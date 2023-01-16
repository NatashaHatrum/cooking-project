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
var Form_jsx_1 = __importDefault(require("./../../components/Form.jsx"));
var FormSkladnik_1 = __importDefault(require("../FormSkladnik/FormSkladnik"));
var Opis_1 = __importDefault(require("../Opis/Opis"));
var uuid_1 = require("uuid");
var Steper = function (_a) {
    var isModalOpen = _a.isModalOpen, setModalOpen = _a.setModalOpen;
    var _b = (0, react_1.useState)(0), current = _b[0], setCurrent = _b[1];
    var _c = (0, react_1.useState)(), name = _c[0], setName = _c[1];
    var _d = (0, react_1.useState)([]), state = _d[0], setState = _d[1];
    var _e = (0, react_1.useState)(), rodziaj = _e[0], setRodziaj = _e[1];
    var _f = (0, react_1.useState)([]), fileList = _f[0], setFileList = _f[1];
    var _g = (0, react_1.useState)(), opis = _g[0], setOpis = _g[1];
    var _h = (0, react_1.useState)(), waga = _h[0], setWaga = _h[1];
    var _j = (0, react_1.useState)(), czas = _j[0], setCzas = _j[1];
    var _k = (0, react_1.useState)(), program = _k[0], setProgram = _k[1];
    var steps = [
        {
            content: React.createElement(FormSkladnik_1["default"], { setSklad: setName, skladnik: name, rodziaj: rodziaj, setRodziaj: setRodziaj, setFileList: setFileList })
        },
        {
            content: React.createElement(Form_jsx_1["default"], { stateFromParent: state, setStateFromParent: setState })
        },
        {
            content: React.createElement(Opis_1["default"], { opis: opis, setOpis: setOpis, waga: waga, setWaga: setWaga, czas: czas, setCzas: setCzas, program: program, setProgram: setProgram })
        },
    ];
    var handleSave = function () {
        console.log({
            nazwa: name,
            type: rodziaj,
            photo: fileList,
            description: opis,
            weight: waga,
            time: czas,
            program: program,
            tags: state.map(function (el) { return "".concat(el.name, " ").concat(el.quantity.weight, " ").concat(el.quantity.measurementUnits); })
        });
        localStorage.setItem('przepis', JSON.stringify({
            key: (0, uuid_1.v4)(),
            name: name,
            type: rodziaj,
            photo: fileList,
            description: opis,
            weight: waga,
            time: czas,
            program: program,
            tags: state.map(function (el) { return "".concat(el.name, " ").concat(el.quantity.weight, " ").concat(el.quantity.measurementUnits); })
        }));
        setModalOpen(false);
        {
            antd_1.message.success('Gotowe!');
        }
    };
    var next = function () {
        if (!name) {
            {
                antd_1.message.error('Wypeuni polia odznaczone gwiazdką');
            }
        }
        else if (!rodziaj) {
            {
                antd_1.message.error('Wypeuni polia odznaczone gwiazdką');
            }
        }
        else {
            setCurrent(current + 1);
        }
    };
    var prev = function () {
        setCurrent(current - 1);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(antd_1.Steps, { current: current }),
        React.createElement("div", { className: "steps-content" }, steps[current].content),
        React.createElement("div", { className: "steps-action" },
            current < steps.length - 1 && (React.createElement(antd_1.Button, { type: "primary", onClick: function () { return next(); } }, "Przejd\u017A dalej")),
            current === steps.length - 1 && (React.createElement(antd_1.Button, { type: "primary", onClick: handleSave }, "Zapisz")),
            current > 0 && (React.createElement(antd_1.Button, { style: { margin: '0 8px' }, onClick: function () { return prev(); } }, "Wr\u00F3\u0107")))));
};
exports["default"] = Steper;
