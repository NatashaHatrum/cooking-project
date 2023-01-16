"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_2 = __importDefault(require("react"));
var index = 0;
var Device = function () {
    var _a = (0, react_1.useState)(['Mulinex', 'Tefal']), items = _a[0], setItems = _a[1];
    var _b = (0, react_1.useState)(''), name = _b[0], setName = _b[1];
    var inputRef = (0, react_1.useRef)(null);
    var onNameChange = function (event) {
        setName(event.target.value);
    };
    var addItem = function (e) {
        e.preventDefault();
        setItems(__spreadArray(__spreadArray([], items, true), [name || "New item ".concat(index++)], false));
        setName('');
        setTimeout(function () {
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }, 0);
    };
    return (react_2["default"].createElement(antd_1.Select, { style: { width: 300 }, placeholder: "Urzondzenie do wypieku", dropdownRender: function (menu) { return (react_2["default"].createElement(react_2["default"].Fragment, null,
            menu,
            react_2["default"].createElement(antd_1.Divider, { style: { margin: '8px 0' } }),
            react_2["default"].createElement(antd_1.Space, { style: { padding: '0 8px 4px' } },
                react_2["default"].createElement(antd_1.Input, { placeholder: "Dodaj nowe urzondzenie", ref: inputRef, value: name, onChange: onNameChange }),
                react_2["default"].createElement(antd_1.Button, { type: "text", icon: react_2["default"].createElement(icons_1.PlusOutlined, null), onClick: addItem }, "Add new device")))); }, options: items.map(function (item) { return ({ label: item, value: item }); }) }));
};
exports["default"] = Device;
