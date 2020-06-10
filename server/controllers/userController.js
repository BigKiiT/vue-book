const { User } = require("../models");
module.exports = {
  //get all user
  async index(req, res) {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (err) {
      res.status(500).send({
        error: "users All error",
      });
    }
  },

  // create user
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "users Create error",
      });
    }
  },

  // edit user
  async editUserId(req, res) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.userId,
        },
      });
      res.send(req.body);
    } catch (error) {
      res.status(500).send({
        error: "users Update error",
      });
    }
  },

  // delete user
  async deleteUser(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: "delete error",
        });
      }
      await user.destroy();
      res.send(user);
    } catch (error) {
      res.status(500).send({
        error: "user delete error",
      });
    }
  },

  // get by Id
  async show(req, res) {
    try {
      const users = await User.findById(req.params.userId);
      res.send(users);
    } catch (err) {
      res.status(500).send({
        error: "user error get by Id ",
      });
    }
  },
};
