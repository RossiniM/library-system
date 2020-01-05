import express from "express";
import BookController from "./controller/book.controller";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).json("sucess");
});

routes.post("/book/save", (req, res) => {
  return new BookController().save(req, res);
});

export default routes;
