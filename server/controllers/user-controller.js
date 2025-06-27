const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
<<<<<<< HEAD
  // Get a single user by ID or username
  async getSingleUser({ user = null, params }, res) {
    try {
      const foundUser = await User.findOne({
        $or: [
          { _id: user ? user._id : params.id },
          { username: params.username },
        ],
      })
        .select("-__v -password") // security: exclude password if it's in schema
        .populate("cardio")
        .populate("resistance");

      if (!foundUser) {
        return res.status(404).json({ message: "User not found." });
      }

      res.json(foundUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error." });
    }
  },

  // Create a user and return a signed JWT
  async createUser({ body }, res) {
    try {
      const user = await User.create(body);
      const token = signToken(user);
      res.status(201).json({ token, user });
    } catch (err) {
      if (err.code === 11000) {
        return res
          .status(409)
          .json({ message: "Username or email already exists." });
      }
      console.error(err);
      res.status(400).json({ message: "User creation failed." });
    }
  },

  // Login a user and return a signed JWT
  async login({ body }, res) {
    try {
      const user = await User.findOne({
        $or: [{ username: body.username }, { email: body.email }],
      });

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const correctPw = await user.isCorrectPassword(body.password);
      if (!correctPw) {
        return res.status(401).json({ message: "Invalid credentials." });
      }

      const token = signToken(user);
      res.json({ token, user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Login error." });
    }
=======
  // get a single user by id or username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    })
      .select("-__v")
      .populate("cardio")
      .populate("resistance")

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },

  // create a user, sign a token, and send it back to sign up page
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // login a user, sign a token, and send it back to login page
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
>>>>>>> b1dbdded32eabbdea7a0431ba7696e40013c3e99
  },
};
