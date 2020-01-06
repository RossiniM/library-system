import { BookDao } from "../database/book.dao";
import { Book } from "../model/book";

export default class BookController {
  static routes = {
    query: "/book"
  };

  save(req, res) {
    const book: Book = Object.assign(new Book(), req.body);
    return new BookDao()
      .save(book)
      .catch(reason => res.status(500).json({ error: reason }))
      .then(value => res.status(200).json({ value }));
  }

  findByTitle(req, res) {
    const title: string = req.query.title;
    return new BookDao()
      .findByTitle(title)
      .catch(reason => res.status(500).json({ error: reason }))
      .then(value => res.status(200).json({ value }));
  }
}
