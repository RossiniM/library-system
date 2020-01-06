import DataBase from "./src/database/database";
import app from "./src/config/custom-express";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const port: number = process.env.PORT | 3000;

new DataBase().connect().then(() => {
  app.listen(port, () => console.log(`listen at ${port}`));
});
