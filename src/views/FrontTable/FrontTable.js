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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var FrontTable_tableShape_1 = __importDefault(require("./FrontTable-tableShape"));
var data = [
    {
        key: '1',
        name: 'Chleb w starym stylu',
        type: 'Ciemny chleb',
        owenName: 'Tefal/Moulinex Home Bread Baqiette',
        weight: 750,
        program: 5,
        time: '3:00',
        tags: ['Woda 340 ml', 'Sól 1,5 łyżeczki', 'Mąka chlebowa 490 gram', 'Mąka żytnia 40 gram', 'Drożdze 1,5 łyżeczki'],
        description: 'Wlej do formy wodę a następnie dosyp soli. Wsyp oba rodzaje mąki a następnie dodaj suszone drożdze. Umieść formę w maszynie rozpocznij pieczenie'
    },
    {
        key: '2',
        name: 'Chleb kopia',
        type: 'Czarny chleb',
        owenName: 'Tefal/Moulinex Home Bread Baqiette',
        weight: 1000,
        program: 5,
        time: '3:00',
        tags: ['Woda 340 ml', 'Sól 1,5 łyżeczki', 'Mąka chlebowa 490 gram', 'Mąka żytnia 40 gram', 'Drożdze 1,5 łyżeczki'],
        description: 'Wlej do formy wodę a następnie dosyp soli. Wsyp oba rodzaje mąki a następnie dodaj suszone drożdze. Umieść formę w maszynie rozpocznij pieczenie'
    },
];
var FrontTable = function () {
    var _a = (0, react_1.useState)(data), przepisy = _a[0], setPrzepisy = _a[1];
    (0, react_1.useEffect)(function () {
        var dataZlokalStorycz = localStorage.getItem('przepis');
        var stringZamienionyNaDane = JSON.parse(dataZlokalStorycz);
        setPrzepisy(__spreadArray(__spreadArray([], data, true), [stringZamienionyNaDane], false));
    }, []);
    return (react_1["default"].createElement(antd_1.Row, { justify: 'center' },
        react_1["default"].createElement(antd_1.Col, { span: 18, offset: 2 },
            react_1["default"].createElement(antd_1.Table, { columns: (0, FrontTable_tableShape_1["default"])(), dataSource: przepisy, sortDirections: ['ascend', 'descend'] }))));
};
exports["default"] = FrontTable;
