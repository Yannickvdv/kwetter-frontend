import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-profile-following",
  templateUrl: "./profile-following.component.html",
  styleUrls: ["./profile-following.component.scss"]
})
export class ProfileFollowingComponent implements OnInit {
  @Input() following: User[];

  constructor() { }

  ngOnInit() {
  }

}
