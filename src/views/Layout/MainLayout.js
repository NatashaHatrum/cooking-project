"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Header = antd_1.Layout.Header, Footer = antd_1.Layout.Footer, Content = antd_1.Layout.Content;
var MainLayout = function (_a) {
    var children = _a.children, _b = _a.withFooter, withFooter = _b === void 0 ? false : _b, _c = _a.withHeader, withHeader = _c === void 0 ? false : _c, optionalHeader = _a.optionalHeader, optionalFooter = _a.optionalFooter;
    return (react_1["default"].createElement(antd_1.Layout, null,
        withHeader && react_1["default"].createElement(Header, null, optionalHeader),
        react_1["default"].createElement(Content, null, children),
        withFooter && react_1["default"].createElement(Footer, null, "Footer")));
};
exports["default"] = MainLayout;
