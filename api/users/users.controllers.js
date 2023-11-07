const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  const { user } = req.body;
  const payload = {
    username: user.username,
    _id: user._id,
  };
  jwt.sign(payload, JWT_SECRET, () => {
    expiresIn: JWT_TOKEN_EXP;
  });
};

exports.signup = async (req, res) => {
  const { password } = req.body;
  try {
    const hash = bcrypt.hash(password, 10);
    req.body.password = hash;
    const newUser = await User.create(req.body);
    const token = generateToken(newUser);
    res.status(201).json(token);
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res) => {
  try {
  const token=  generateToken(user);
    res.status(201).json(token);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};
json
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("urls");
    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};
