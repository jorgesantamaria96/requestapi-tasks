"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

var app = (0, _express["default"])(); // settings

app.set("port", process.env.port || 3000); // middlewares

var corsOptions = {};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // routes

app.get("/", function (req, res) {
  res.json("Wellcome to my application!");
});
app.use("/api/tasks", _tasks["default"]);
var _default = app;
exports["default"] = _default;