"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var React = __importStar(require("react"));
var col_1 = __importDefault(require("antd/es/grid/col"));
var row_1 = __importDefault(require("antd/es/grid/row"));
var Device_1 = __importDefault(require("./Device"));
var button_1 = __importDefault(require("antd/lib/button/button"));
var KalkulatorWagi_jsx_1 = __importDefault(require("../KalkulatorWagi.jsx"));
var Title = antd_1.Typography.Title;
var TextArea = antd_1.Input.TextArea;
var Opis = function (_a) {
    var opis = _a.opis, setOpis = _a.setOpis, waga = _a.waga, setWaga = _a.setWaga, czas = _a.czas, setCzas = _a.setCzas, program = _a.program, setProgram = _a.setProgram;
    var _b = (0, react_1.useState)(false), isModalOpen = _b[0], setModalOpen = _b[1];
    var handleChangeOpis = function (e) {
        setOpis(e.target.value);
    };
    var handleChangeWaga = function (e) {
        setWaga(e.target.value);
    };
    var handleChangeCzas = function (e) {
        setCzas(e.target.value);
    };
    var handleChangeProgram = function (e) {
        setProgram(e.target.value);
    };
    var showModal = function () {
        setModalOpen(true);
    };
    var handleOk = function () {
        setModalOpen(false);
    };
    var handleToogle = function () {
        setModalOpen(function (oldState) { return !oldState; });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { level: 2 }, "Dodaj opis"),
        React.createElement(antd_1.Form.Item, { name: "opis", rules: [{ required: true, message: 'Pole jest wymagane!' }] },
            React.createElement(row_1["default"], null,
                React.createElement(col_1["default"], { span: 24 },
                    React.createElement(TextArea, { value: opis, rows: 7, onChange: function (event) {
                            handleChangeOpis(event);
                        }, placeholder: 'Dodaj opis przepisu' }))),
            React.createElement(row_1["default"], null,
                React.createElement(col_1["default"], null,
                    React.createElement(antd_1.Input, { value: waga, placeholder: 'Waga chleba (gr)', onChange: function (event) {
                            handleChangeWaga(event);
                        } })),
                React.createElement(col_1["default"], null,
                    React.createElement(button_1["default"], { type: "default", size: "large", onClick: showModal }, "Kalkulator wagi"),
                    React.createElement(row_1["default"], null,
                        React.createElement(col_1["default"], null,
                            React.createElement(antd_1.Input, { value: czas, type: 'time', placeholder: 'Czas wypieku', onChange: function (event) {
                                    handleChangeCzas(event);
                                } }))),
                    React.createElement(antd_1.Modal, { centered: true, onCancel: handleToogle, onOk: handleOk, footer: false, open: isModalOpen },
                        " ",
                        React.createElement(KalkulatorWagi_jsx_1["default"], null)))),
            React.createElement(row_1["default"], null,
                React.createElement(col_1["default"], null,
                    React.createElement(Device_1["default"], null)),
                React.createElement(col_1["default"], null,
                    React.createElement(antd_1.Input, { type: 'number', placeholder: 'Program', value: program, onChange: function (event) {
                            handleChangeProgram(event);
                        } }))))));
};
exports["default"] = Opis;
