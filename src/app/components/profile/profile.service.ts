
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/index";
import { UserService } from "src/app/services/user.service";
import { User } from "../../models/user.model";


@Injectable()
export class ProfileService extends UserService {
  private user: Observable<User>;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getUserProfile(index): Observable<User> {
    if (this.user && this.user === index) {
      return this.user;
    } else {
      const retrievedUser: Observable<User> = this.getUser(index);
      this.user = retrievedUser;
      return retrievedUser;
    }
  }
}
