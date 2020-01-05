import mongoose from "mongoose";

const schema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  isbn: { type: String, required: true }
});

export const BookSchema = mongoose.model("book", schema);
