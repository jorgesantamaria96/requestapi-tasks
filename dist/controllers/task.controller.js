"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.findAllDoneTask = exports.deleteTask = exports.findOneTask = exports.createTask = exports.findAllTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

var _getPaginations = require("../libs/getPaginations");

var findAllTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, page, size, title, condition, _getPagination, offset, limit, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, page = _req$query.page, size = _req$query.size, title = _req$query.title;
            condition = title ? {
              title: {
                $regex: new RegExp(title),
                $options: "i"
              }
            } : {};
            _getPagination = (0, _getPaginations.getPagination)(page, size), offset = _getPagination.offset, limit = _getPagination.limit;
            _context.next = 6;
            return _Tasks["default"].paginate(condition, {
              offset: offset,
              limit: limit
            });

          case 6:
            data = _context.sent;
            res.json({
              totalItems: data.totalDocs,
              tasks: data.docs,
              totalPages: data.totalPages,
              currentPage: data.page - 1
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || "Something goes wrong retrieving the tasks"
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function findAllTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.findAllTasks = findAllTasks;

var createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newTask, taskSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (req.body.title) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", res.status(400).send({
              message: "Content cannot be empty"
            }));

          case 2:
            _context2.prev = 2;
            newTask = new _Tasks["default"]({
              title: req.body.title,
              description: req.body.description,
              done: req.body.done ? req.body.done : false
            });
            _context2.next = 6;
            return newTask.save();

          case 6:
            taskSaved = _context2.sent;
            res.json(taskSaved);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            res.status(500).json({
              message: _context2.t0.message || "Something goes wrong creating a task"
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var findOneTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Tasks["default"].findById(id);

          case 4:
            task = _context3.sent;

            if (task) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              message: "Task with id ".concat(id, " does not exists")
            }));

          case 7:
            res.json(task);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: _context3.t0.message || "Error retrieving Task with id: ".concat(id)
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function findOneTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findOneTask = findOneTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Tasks["default"].findByIdAndDelete(id);

          case 4:
            data = _context4.sent;
            res.json({
              message: "Task were deleted successfully",
              data: data
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              message: _context4.t0.message || "Cannot delete Task with id: ".concat(id)
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var findAllDoneTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Tasks["default"].find({
              done: true
            });

          case 2:
            tasks = _context5.sent;
            res.json(tasks);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function findAllDoneTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.findAllDoneTask = findAllDoneTask;

var updateTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedTask;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Tasks["default"].findByIdAndUpdate(req.params.id, req.body);

          case 2:
            updatedTask = _context6.sent;
            res.json({
              mesage: "Task was updated successfully,",
              data: updatedTask
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;