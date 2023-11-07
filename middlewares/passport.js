const LocalStrategy = require("passport-local");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// exports.LocalStrategy = new LocalStrategy(
//   { usernameField: "username" },
//   async (username, password, done) => {
//     const user = await User.findOne({ username: username });
//     if (!user) return done({ message: "Username or password is wrong!" });
//     const checkPassword = await bcrypt.compare(password, user.password);
//     if (!checkPassword)
//       return done({ message: "Username or password is wrong!" });
//     return done(null, user);
//   }
// );

const LocalStrategy = new LocalStrategy(
  { usernameField: "username" },
  async (username, password, done) => {
    try {
      const user = User.username.LocalStrategy;
      if (user)
        return (passwordsMatch = await bcrypt.compare(password, user.password));
      else if (!user) return { message: "Username or password is wrong!" };
      else passwordsMatch;
      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

module.exports = LocalStrategy;
