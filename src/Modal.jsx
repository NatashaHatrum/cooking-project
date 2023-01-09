"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var React = require("react");
var ModalToShow = function () {
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
            <antd_1.Button type='primary' onClick={showModal}>Dodaj przepis
            </antd_1.Button>
            <antd_1.Modal centered={true} onCancel={handleToogle} onOk={handleOk} title={'Przepis'} open={isModalOpen}>
            <p>Ryba</p>
            <p>Ryba</p>
            <p>Ryba</p>
            <p>Ryba</p>
            <p>Ryba</p>
            </antd_1.Modal>
        </>);
};
exports.default = ModalToShow;
