import BookController from "../controller/book.controller";
import express from "express";

const routes = express.Router();

routes.get(BookController.routes.query, (req, res) => {
  return new BookController().findByTitle(req, res);
});

routes.post(BookController.routes.query, (req, res) => {
  return new BookController().save(req, res);
});

export default routes;
