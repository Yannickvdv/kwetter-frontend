import { Component, OnInit, Input } from "@angular/core";
import { Tweet } from "src/app/models/tweet.model";

@Component({
  selector: "app-tweets-list",
  templateUrl: "./tweets-list.component.html",
  styleUrls: ["./tweets-list.component.scss"]
})
export class TweetsListComponent implements OnInit {
  @Input() tweets: Tweet[];
  startPage: number;
  paginationLimit: number;
  increment: number;

  constructor() {
    this.startPage = 0;
    this.paginationLimit = 5;
    this.increment = 5;
  }

  ngOnInit() {
  }

  showMoreItems() {
      this.paginationLimit = Number(this.paginationLimit) + this.increment;
   }

   showLessItems() {
     this.paginationLimit = Number(this.paginationLimit) - this.increment;
   }
}
