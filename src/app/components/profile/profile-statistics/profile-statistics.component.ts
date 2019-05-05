import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-profile-statistics",
  templateUrl: "./profile-statistics.component.html",
  styleUrls: ["./profile-statistics.component.scss"]
})
export class ProfileStatisticsComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
