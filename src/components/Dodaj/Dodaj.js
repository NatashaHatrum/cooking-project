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
var Steper_1 = __importDefault(require("../Stepers/Steper"));
var DodajPrszepis = function () {
    var _a = (0, react_1.useState)(false), isModalOpen = _a[0], setModalOpen = _a[1];
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
        React.createElement(antd_1.Button, { type: "default", size: "large", onClick: showModal }, "Dodaj przepis"),
        React.createElement(antd_1.Modal, { centered: true, onCancel: handleToogle, onOk: handleOk, footer: false, open: isModalOpen },
            " ",
            React.createElement(Steper_1["default"], { isModalOpen: isModalOpen, setModalOpen: setModalOpen }))));
};
exports["default"] = DodajPrszepis;
