"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var col_1 = require("antd/es/grid/col");
var row_1 = require("antd/es/grid/row");
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
    return (<>
            <row_1.default>
                <col_1.default span={24}>
                    <Title level={2}>Dodaj nazwe</Title>
                    <antd_1.Form form={form} name="control-hooks" onFinish={onFinish}>
                        <row_1.default>
                            <col_1.default span={24}>
                                <antd_1.Form.Item name="nazwa" rules={[{ required: true, message: 'Pole jest wymagane!' }]}>
                                    <antd_1.Input value={skladnik} onChange={function (event) {
            handleChange(event);
        }} placeholder='Nazwa przepisu&#9913;'/>
                                </antd_1.Form.Item>
                            </col_1.default>
                        </row_1.default>
                        <row_1.default>
                            <col_1.default span={24}>
                                <antd_1.Form.Item name="rodzaj" rules={[{ required: true, message: 'Pole jest wymagane!' }]}>
                                    <antd_1.Select value={rodziaj} placeholder='Rodzaj dania&#9913;' onChange={handleChangeSelect} options={[
            {
                value: 'zupa',
                label: 'Zupa'
            },
            {
                value: 'glówne',
                label: 'Danie glówne'
            },
            {
                value: 'salatka',
                label: 'Sałatka'
            },
            {
                value: 'ciasto',
                label: 'Ciasto'
            },
            {
                value: 'hleb',
                label: 'Hleb'
            },
            {
                value: 'przystawka',
                label: 'Przystawka'
            },
            {
                value: 'inne',
                label: 'Inne'
            },
        ]}/>
                                </antd_1.Form.Item>
                            </col_1.default>
                        </row_1.default>
                        <row_1.default>
                            <col_1.default span={24}>
                                <antd_1.Form.Item>

                                    <antd_1.Form.Item name="photo" label="Dodaj zdjęcie">
                                        <antd_1.Upload listType="picture-card" onChange={handleChangeUpload}>
                                            <div>
                                                <icons_1.PlusOutlined />
                                                <div style={{ marginTop: 8 }}>Upload</div>
                                            </div>
                                        </antd_1.Upload>
                                    </antd_1.Form.Item>
                                </antd_1.Form.Item>
                            </col_1.default>
                        </row_1.default>

                    </antd_1.Form>
                </col_1.default>
            </row_1.default>
        </>);
};
exports.default = FormSkladnik;
