import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { first } from "rxjs/operators";
import { AlertService } from "src/app/helpers/alert.service";
import { AuthenticationService } from "src/app/helpers/authentication.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentJWTValue) {
          this.router.navigate(["/"]);
      }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
          username: ["", Validators.required],
          password: ["", Validators.required],
          language: ["", Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      const username = this.registerForm.get("username").value;
      const password = this.registerForm.get("password").value;
      const language = this.registerForm.get("language").value;

      this.loading = true;
      this.authenticationService.register(username, password, language)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success("Registration successful", true);
                  this.router.navigate(["/login"]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
