import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { JWT } from "../models/jwt.model";
import { RestService } from "../rest.service";

@Injectable({ providedIn: "root" })
export class AuthenticationService extends RestService {
    private currentJWTSubject: BehaviorSubject<JWT>;
    public currentJWT: Observable<JWT>;

    constructor(private http: HttpClient) {
        super(http);
        this.currentJWTSubject = new BehaviorSubject<JWT>(JSON.parse(localStorage.getItem("currentJWT")));
        this.currentJWT = this.currentJWTSubject.asObservable();
    }

    public get currentJWTValue(): JWT {
        return this.currentJWTSubject.value;
    }

    register(name: string, password: string, language: string) {
    return this.post("/auth/register", {name, password, language})
        .pipe(map(jwt => this.saveCurrentJWT(jwt)));
    }

    login(username: string, password: string) {
        const headers = { "Content-Type": "application/x-www-form-urlencoded" };
        return this.post("/auth/login", {username, password}, headers)
        .pipe(map(jwt => this.saveCurrentJWT(jwt)));
    }

    logout() {
        localStorage.removeItem("currentJWT");
        this.currentJWTSubject.next(null);
    }

    private saveCurrentJWT = function(jwt: JWT) {
        // login successful if there's a jwt token in the response
        if (jwt && jwt.token) {
            // store JWT details in local storage to keep JWT user logged in between page refreshes
            localStorage.setItem("currentJWT", JSON.stringify(jwt));
            this.currentJWT.Subject.next(jwt);
        }
        return jwt;
    };
}
