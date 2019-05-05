import { Tweet } from "./tweet.model";

export class User {
  uuid: string;
  name: string;
  location: string;
  website: string;
  bio: string;
  role: string;
  language: string;
  photo: string;
  tweets: Tweet[];
  mentions: Tweet[];
  followers: User[];
  following: User[];

//   constructor(
//     public uuid: string,
//     public name: string,
//     public website: string,
//     public bio: string,
//     public role: string,
//     public language: string,
//     public photo: string,
//     public tweets: Tweet[],
//     public mentions: Tweet[],
//     public followers: User[],
//     public following: User[]
//   ) {}
}
