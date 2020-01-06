import express from "express";
import UserController from "../controller/user.controller";

const userRoutes = express.Router();

userRoutes.get(UserController.routes.query, (req, res) => {
  return new UserController().findByLogin(req, res);
});

userRoutes.post(UserController.routes.query, (req, res) => {
  return new UserController().save(req, res);
});

export default userRoutes;
