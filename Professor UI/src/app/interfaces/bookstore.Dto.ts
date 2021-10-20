import { Guid } from "guid-typescript";

export interface BookstoreDto {
  dateOfPublish: Date;
  language: string;
  author: string;
  title: string;
  _id:string;
}

export interface AddBookstoreDto {
  language: string;
  author: string;
  title: string;
  dateOfPublish:string;
}
