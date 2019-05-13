import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthenticationService } from "./authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const jwt = this.authenticationService.currentJWTValue;
        if (jwt && jwt.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwt.token}`
                }
            });
        }

        return next.handle(request);
    }
}
