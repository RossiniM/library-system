import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bookRoutes from "../routes/book.routes";
import healthRoutes from "../routes/health.routes";
import userRoutes from "../routes/user.routes";

const app = express();

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors());
app.use(bookRoutes);
app.use(healthRoutes);
app.use(userRoutes);

export default app;
