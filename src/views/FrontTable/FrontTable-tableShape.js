"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var antd_2 = require("antd");
var FrontTable_module_css_1 = __importDefault(require("./FrontTable.module.css"));
var TextArea = antd_2.Input.TextArea;
var tableShape = function () {
    var columns = [
        {
            title: 'Nazwa',
            dataIndex: 'name',
            key: 'name',
            render: function (text) { return react_1["default"].createElement("a", null, text); }
        },
        {
            title: 'Rodziaj',
            dataIndex: 'type',
            key: 'type',
            render: function (type) { return react_1["default"].createElement("a", null, type); }
        },
        {
            title: 'Waga - gramy',
            dataIndex: 'weight',
            key: 'weight',
            sorter: function (a, b) { return a.weight - b.weight; },
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Czas',
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: 'Składniki',
            key: 'tags',
            dataIndex: 'tags',
            render: function (_, _a) {
                var tags = _a.tags;
                return (react_1["default"].createElement(react_1["default"].Fragment, null, tags.map(function (tag) {
                    var color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag.includes('Woda')) {
                        color = 'blue';
                    }
                    if (tag.includes('Olej')) {
                        color = 'gold';
                    }
                    if (tag.includes('Mąka')) {
                        color = 'gray';
                    }
                    if (tag.includes('Drożdze')) {
                        color = 'DarkGoldenRod';
                    }
                    return (react_1["default"].createElement(antd_1.Tag, { className: FrontTable_module_css_1["default"].tableTag, color: color, key: tag }, tag.toUpperCase()));
                })));
            }
        },
        {
            title: 'Urządzenie do wypieku',
            dataIndex: 'owenName',
            key: 'owenName'
        },
        {
            title: 'Program wypieku',
            dataIndex: 'program',
            key: 'program'
        },
        {
            title: 'Opis',
            width: 300,
            dataIndex: 'description',
            key: 'description',
            render: function (opis) { return react_1["default"].createElement(TextArea, { value: opis, rows: 3, readOnly: true }); }
        },
        {
            title: '',
            key: 'action',
            render: function (_, record) { return (react_1["default"].createElement(antd_1.Space, { size: "middle" },
                react_1["default"].createElement("a", null,
                    "Udost\u0119pnij",
                    react_1["default"].createElement("br", null),
                    record.name))); }
        },
    ];
    return columns;
};
exports["default"] = tableShape;
