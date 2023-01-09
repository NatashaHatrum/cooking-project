"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var React = require("react");
var Form_jsx_1 = require("./../../components/Form.jsx");
var FormSkladnik_tsx_1 = require("../FormSkladnik/FormSkladnik.tsx");
var Opis_tsx_1 = require("../Opis/Opis.tsx");
var Steper = function (_a) {
    var isModalOpen = _a.isModalOpen, setModalOpen = _a.setModalOpen;
    var _b = (0, react_1.useState)(0), current = _b[0], setCurrent = _b[1];
    var _c = (0, react_1.useState)(), name = _c[0], setName = _c[1];
    var _d = (0, react_1.useState)([]), state = _d[0], setState = _d[1];
    var _e = (0, react_1.useState)(), rodziaj = _e[0], setRodziaj = _e[1];
    var _f = (0, react_1.useState)([]), fileList = _f[0], setFileList = _f[1];
    var _g = (0, react_1.useState)(), opis = _g[0], setOpis = _g[1];
    var steps = [
        {
            content: <FormSkladnik_tsx_1.default setSklad={setName} skladnik={name} rodziaj={rodziaj} setRodziaj={setRodziaj} photo={fileList} setFileList={setFileList}/>,
        },
        {
            content: <Form_jsx_1.default stateFromParent={state} setStateFromParent={setState}/>,
        },
        {
            content: <Opis_tsx_1.default opis={opis} setOpis={setOpis}/>,
        },
    ];
    var handleSave = function () {
        console.log(__assign({ nazwa: name, type: rodziaj, photo: fileList, description: opis }, state));
        localStorage.setItem('przepis', JSON.stringify({
            nazwa: name,
            type: rodziaj,
            photo: fileList,
            description: opis,
            state: state
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
    return (<>
            <antd_1.Steps current={current}/>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (<antd_1.Button type="primary" onClick={function () { return next(); }}>
                        Przejdź dalej
                    </antd_1.Button>)}
                {current === steps.length - 1 && (<antd_1.Button type="primary" onClick={handleSave}>
                        Zapisz
                    </antd_1.Button>)}
                {current > 0 && (<antd_1.Button style={{ margin: '0 8px' }} onClick={function () { return prev(); }}>
                        Wróć
                    </antd_1.Button>)}
            </div>

        </>);
};
exports.default = Steper;
