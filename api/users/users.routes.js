const express = require("express");

const router = express.Router();

const { signup, signin, getUsers } = require("./users.controllers");
const passport = require("passport");

router.post("/signup", signup);
router.post("/signin", signin);
router.get(
  "/users",
  getUsers,
  passport.authenticate(local, { session: false })
);

module.exports = router;
