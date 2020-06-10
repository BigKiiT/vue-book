let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let bodyParser = require("body-parser");
let cors = require ('cors')
const { sequelize } = require("./models");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");

const config = require("./config/config");

let app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

let port = process.env.PORT || config.port;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, function () {
    console.log("Server running on " + port);
  });
});

module.exports = app;
