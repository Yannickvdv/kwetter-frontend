import { User } from "./user.model";
import { HashTag } from "./hashTag.model";

export class Tweet {
  uuid: string;
  text: string;
  user: User;
  insertedAt: Date;
  likes: User[];
  hashTags: HashTag[];

//   constructor(
//     public uuid: string,
//     public text: string,
//     public user: User,
//     public insertedAt: Date,
//     public likes: User[],
//     public hashTags: HashTag[]
//   ) {}
}
