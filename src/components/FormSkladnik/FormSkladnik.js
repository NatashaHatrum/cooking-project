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
var React = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var col_1 = __importDefault(require("antd/es/grid/col"));
var row_1 = __importDefault(require("antd/es/grid/row"));
var Title = antd_1.Typography.Title;
var FormSkladnik = function (_a) {
    var setSklad = _a.setSklad, setRodziaj = _a.setRodziaj, skladnik = _a.skladnik, rodziaj = _a.rodziaj, fileList = _a.fileList, setFileList = _a.setFileList;
    var form = antd_1.Form.useForm()[0];
    var onFinish = function (values) {
        console.log(values);
    };
    var handleChange = function (e) {
        setSklad(e.target.value);
    };
    var handleChangeSelect = function (rodziaj) {
        setRodziaj(rodziaj);
    };
    var handleChangeUpload = function (fileList) {
        setFileList(fileList);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(row_1["default"], null,
            React.createElement(col_1["default"], { span: 24 },
                React.createElement(Title, { level: 2 }, "Dodaj nazwe"),
                React.createElement(antd_1.Form, { form: form, name: "control-hooks", onFinish: onFinish },
                    React.createElement(row_1["default"], null,
                        React.createElement(col_1["default"], { span: 24 },
                            React.createElement(antd_1.Form.Item, { name: "nazwa", rules: [{ required: true, message: 'Pole jest wymagane!' }] },
                                React.createElement(antd_1.Input, { value: skladnik, onChange: function (event) {
                                        handleChange(event);
                                    }, placeholder: 'Nazwa przepisu\u26B9' })))),
                    React.createElement(row_1["default"], null,
                        React.createElement(col_1["default"], { span: 24 },
                            React.createElement(antd_1.Form.Item, { name: "rodzaj", rules: [{ required: true, message: 'Pole jest wymagane!' }] },
                                React.createElement(antd_1.Select, { value: rodziaj, placeholder: 'Rodzaj chleba\u26B9', onChange: handleChangeSelect, options: [
                                        {
                                            value: 'ciemny',
                                            label: 'Ciemny chleb'
                                        },
                                        {
                                            value: 'jasny',
                                            label: 'Jasny chleb'
                                        },
                                        {
                                            value: 'bulka',
                                            label: 'Bułka'
                                        },
                                        {
                                            value: 'keks',
                                            label: 'Keks'
                                        },
                                        {
                                            value: 'bagietka',
                                            label: 'Bagietka'
                                        },
                                        {
                                            value: 'ziarnisty',
                                            label: 'Ziarnisty chleb'
                                        },
                                        {
                                            value: 'inny',
                                            label: 'Inny'
                                        },
                                    ] })))),
                    React.createElement(row_1["default"], null,
                        React.createElement(col_1["default"], { span: 24 },
                            React.createElement(antd_1.Form.Item, null,
                                React.createElement(antd_1.Form.Item, { name: "photo", label: "Dodaj zdj\u0119cie" },
                                    React.createElement(antd_1.Upload, { listType: "picture-card", onChange: handleChangeUpload },
                                        React.createElement("div", null,
                                            React.createElement(icons_1.PlusOutlined, null),
                                            React.createElement("div", { style: { marginTop: 8 } }, "Upload"))))))))))));
};
exports["default"] = FormSkladnik;
