import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { User } from "src/app/models/user.model";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  user: User;
  userId: number = null;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.profileService.getUserProfile(1).subscribe(user => {
      this.user = user;
    });
    // this.route.params.subscribe((params: Params) => {
    //   if (params.id) {
    //     this.userId = +params.id;
    //     this.userService.getUser(this.userId).subscribe(user => {
    //       // TODO: Maybe (if else) to check if it exists? If it doesn't exist show warning
    //       this.user = user;
    //     });
    //   }
    //   // TODO: ELSE: show logged in user's page
    //  });
  }
}
