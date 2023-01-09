"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var React = require("react");
var Steper_tsx_1 = require("../Stepers/Steper.tsx");
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
    return (<>
            <antd_1.Button type="primary" size="large" onClick={showModal}>Dodaj przepis</antd_1.Button>
            <antd_1.Modal centered={true} onCancel={handleToogle} onOk={handleOk} footer={false} open={isModalOpen}> <Steper_tsx_1.default isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>

            </antd_1.Modal>
            <pre>{JSON.stringify(localStorage.getItem('przepis'), null, 2)}</pre>
        </>);
};
exports.default = DodajPrszepis;
