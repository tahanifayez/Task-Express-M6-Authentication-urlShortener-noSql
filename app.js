const express = require("express");
const connectDb = require("./database");
const urlRoutes = require("./api/urls/urls.routes");
const userRoutes = require("./api/users/users.routes");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const passport = require("passport");
const LocalStrategy = require("./middlewares/passport");

const app = express();
connectDb();

app.use(express.json());

app.use("/urls", urlRoutes);
app.use(userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
app.use(passport.initialize());
passport.use(LocalStrategy);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
