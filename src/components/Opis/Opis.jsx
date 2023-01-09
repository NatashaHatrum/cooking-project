"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var React = require("react");
var col_1 = require("antd/es/grid/col");
var row_1 = require("antd/es/grid/row");
var Title = antd_1.Typography.Title;
var TextArea = antd_1.Input.TextArea;
var Opis = function (_a) {
    var opis = _a.opis, setOpis = _a.setOpis;
    var handleChangeOpis = function (e) {
        setOpis(e.target.value);
    };
    return (<>


                    <Title level={2}>Dodaj opis</Title>
                    <antd_1.Form.Item name="opis" rules={[{ required: true, message: 'Pole jest wymagane!' }]}>
                        <row_1.default>
                            <col_1.default span={24}>
                                <TextArea value={opis} rows={7} onChange={function (event) {
            handleChangeOpis(event);
        }} placeholder='Text'/>
                            </col_1.default>
                        </row_1.default>
                    </antd_1.Form.Item>

        </>);
};
exports.default = Opis;
