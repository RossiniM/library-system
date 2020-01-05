import mongoose, { Mongoose } from "mongoose";
export default class DataBase {
  private mongoDB = "mongodb://127.0.0.1/library-system";

  async connect(): Promise<Mongoose> {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    return mongoose.connect(this.mongoDB);
  }
}
