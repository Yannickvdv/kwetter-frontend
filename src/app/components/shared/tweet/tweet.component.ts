import { Component, Input, OnInit } from "@angular/core";
import { DateTimeHelperService } from "src/app/helpers/datetimehelper.service";
import { Tweet } from "src/app/models/tweet.model";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"]
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet[];
  public DateTimeHelperService = DateTimeHelperService;

  constructor() { }

  ngOnInit() {
  }
}
