import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-profile-banner",
  templateUrl: "./profile-banner.component.html",
  styleUrls: ["./profile-banner.component.scss"]
})
export class ProfileBannerComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
