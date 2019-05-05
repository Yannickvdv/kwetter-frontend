import { Tweet } from './tweet.model';

export class HashTag {
  uuid: string;
  text: string;
  tweets: Tweet[];

//   constructor(
//     public uuid: string,
//     public text: string,
//     public tweets: Tweet[]
//   ) {}
}
