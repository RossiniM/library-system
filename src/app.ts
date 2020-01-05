import express from "express";
import routes from "./routes";
import Database from "./database/database";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const port: number = process.env.PORT | 3000;
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors());
app.use(routes);
new Database().connect().then(() => {
  app.listen(port, () => console.log(`listen at ${port}`));
});
