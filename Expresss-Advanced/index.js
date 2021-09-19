const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./middleware/logger");
const express = require("express");
const app = express();
const debug = require("debug")("app:startup");
const courses = require('./routes/courses');
const home = require('./routes/home');

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //with exteded = true with can send arrays and more complex format.
app.use(logger);
app.use(helmet());

//routes
app.use('/api/courses', courses);
app.use('/', home);

//Configuration
console.log("Appliction Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail password: " + config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled...");
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
