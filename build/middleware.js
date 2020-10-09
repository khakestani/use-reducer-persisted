"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constant = _interopRequireDefault(require("./constant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middleware = function middleware(reducer) {
  var modifiedReducer = function modifiedReducer(state, _ref) {
    var type = _ref.type,
        payload = _ref.payload;

    if (type === _constant["default"]) {
      return payload;
    }

    return reducer(state, {
      type: type,
      payload: payload
    });
  };

  return modifiedReducer;
};

var _default = middleware;
exports["default"] = _default;