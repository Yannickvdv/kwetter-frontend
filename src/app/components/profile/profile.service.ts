import { User } from "../../models/user.model";
import { Observable } from "rxjs/index";
import { Injectable } from "@angular/core";
import { Tweet } from "src/app/models/tweet.model";
import { RestService } from "src/app/rest.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService extends RestService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  private relativePath = "/users";

  getUsers(): Observable<User[]> {
    return this.get(this.relativePath);
  }

  getUser(index): Observable<User> {
    return this.get(`${this.relativePath}/${index}`);
  }

  createUser(user): Observable<User> {
    return this.post(this.relativePath, user);
  }

  editUser(id, user): Observable<User> {
    return this.put(`${this.relativePath}/${id}`, user);
  }

  getUserTweets(id): Observable<Tweet[]> {
    return this.get(`${this.relativePath}/${id}/tweets`);
  }

  sendTweetFromUser(id, tweet): Observable<Tweet> {
    return this.post(`${this.relativePath}/${id}/tweets`, tweet);
  }
}