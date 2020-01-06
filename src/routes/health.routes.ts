import express from "express";

const healthRoutes = express.Router();

healthRoutes.get("/", (req, res) => {
  res.status(200).json("sucess");
});

export default healthRoutes;
