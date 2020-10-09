"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var storage = {
  get: function get(key, initialValue, init) {
    try {
      var storageData = localStorage.getItem(key);
      return !!storageData ? JSON.parse(storageData) : !!init && init instanceof Function ? init() : !!initialValue ? initialValue : {};
    } catch (e) {
      return initialValue;
    }
  },
  set: function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
var _default = storage;
exports["default"] = _default;