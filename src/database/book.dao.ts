import { BookSchema } from "./schema/book.schema";
import { Book } from "../model/book";
import { Document } from "mongoose";

export class BookDao {
  public async findByTitle(title: string): Promise<Document[]> {
    return await BookSchema.find({ title: title }).exec();
  }

  public async save(book: Book): Promise<Document> {
    return new BookSchema(book).save();
  }
}
