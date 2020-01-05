import { BookDao } from "../database/book.dao";
import { Book } from "../model/book";

export default class BookController {
  save(req, res) {
    const book: Book = Object.assign(new Book(), req.body);
    return new BookDao()
      .save(book)
      .catch(reason => res.status(500).json({ error: reason }))
      .then(value => res.status(200).json({ value }));
  }
}
