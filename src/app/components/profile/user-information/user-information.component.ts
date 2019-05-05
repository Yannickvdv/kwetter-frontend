import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-user-information",
  templateUrl: "./user-information.component.html",
  styleUrls: ["./user-information.component.scss"]
})
export class UserInformationComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }
}
