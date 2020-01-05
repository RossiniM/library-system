import { Document } from "mongoose";
import { User } from "../model/user";
import { UserSchema } from "./schema/user.schema";

export class UserDao {
  public async findByUser(login: string): Promise<Document[]> {
    return await UserSchema.find({ login: login }).exec();
  }

  public async save(user: User): Promise<Document> {
    return new UserSchema(user).save();
  }
}
