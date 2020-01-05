import mongoose from "mongoose";

const schema = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true }
});

export const UserSchema = mongoose.model("user", schema);
