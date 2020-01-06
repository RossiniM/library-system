import { UserDao } from "../database/user.dao";
import { User } from "../model/user";

export default class UserController {
  static routes = {
    query: "/user"
  };

  findByLogin(req, res) {
    const login = req.query.login;
    return new UserDao()
      .findByUser(login)
      .catch(reason => res.status(500).json({ error: reason }))
      .then(value => res.status(200).json({ value }));
  }

  save(req, res) {
    const user = Object.assign(new User(), req.body);
    return new UserDao()
      .save(user)
      .catch(reason => res.status(500).json({ error: reason }))
      .then(value => res.status(200).json({ value }));
  }
}
