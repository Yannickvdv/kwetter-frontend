import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

// Http for RESTful API
import { HttpClientModule } from "@angular/common/http";

// Routing module for routing
import { AppRoutingModule } from "./app-routing.module";

// Services
import { ProfileService } from "./components/profile/profile.service";
import { UserService } from "./services/user.service";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileBannerComponent } from "./components/profile/profile-banner/profile-banner.component";
import { ProfileFollowingComponent } from "./components/profile/profile-following/profile-following.component";
import { ProfileStatisticsComponent } from "./components/profile/profile-statistics/profile-statistics.component";
import { ProfileTweetsComponent } from "./components/profile/profile-tweets/profile-tweets.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { UserInformationComponent } from "./components/profile/user-information/user-information.component";
import { RegisterComponent } from "./components/register/register.component";
import { LanguageDropdownComponent } from "./components/shared/language-dropdown/language-dropdown.component";
import { ProfilePictureComponent } from "./components/shared/profile-picture/profile-picture.component";
import { TweetComponent } from "./components/shared/tweet/tweet.component";
import { TweetsListComponent } from "./components/shared/tweets-list/tweets-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    UserInformationComponent,
    ProfileBannerComponent,
    ProfileTweetsComponent,
    TweetsListComponent,
    ProfilePictureComponent,
    ProfileStatisticsComponent,
    ProfileFollowingComponent,
    TweetComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LanguageDropdownComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [UserService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
