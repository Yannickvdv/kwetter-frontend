import { Component, Input, OnInit } from "@angular/core";
import { Tweet } from "src/app/models/tweet.model";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-profile-tweets",
  templateUrl: "./profile-tweets.component.html",
  styleUrls: ["./profile-tweets.component.scss"]
})
export class ProfileTweetsComponent implements OnInit {
  @Input() tweets: Tweet[];

  constructor() { }

  ngOnInit() {
  }

  sortTweetsByDate() {
    this.tweets.sort((a, b) => {
      const dateA = new Date(a.insertedAt), dateB = new Date(b.insertedAt);
      return +dateA - +dateB;
    });
  }
}
