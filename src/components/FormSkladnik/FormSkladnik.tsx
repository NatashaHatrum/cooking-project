import * as React from "react";
import {Upload, Form, Input, Select, Typography, UploadProps} from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";



const {Title} = Typography;


const FormSkladnik: React.FC<{setSklad: any, skladnik: any, rodziaj:any, setRodziaj: any, fileList:any, setFileList:any}> = ({setSklad,setRodziaj, skladnik, rodziaj, fileList, setFileList}) => {
    const [form] = Form.useForm();



    const onFinish = (values: any) => {
        console.log(values);
    };

    const handleChange = (e) => {
        setSklad(e.target.value)
    };
    const handleChangeSelect = (rodziaj) => {
setRodziaj(rodziaj)
    };

   const handleChangeUpload: UploadProps['onChange'] = (fileList) => {
       setFileList(fileList);
    };


    return (
        <>
            <Row>
                <Col span={24}>
                    <Title level={2}>Dodaj nazwe</Title>
                    <Form form={form} name="control-hooks" onFinish={onFinish}>
                        <Row >
                            <Col span={24}>
                                <Form.Item name="nazwa"   rules={[{ required: true, message: 'Pole jest wymagane!' }]}>
                                    <Input

                                        value={skladnik}
                                        onChange={(event) => {
                                            handleChange(event)
                                        }}
                                        placeholder='Nazwa przepisu&#9913;'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item name="rodzaj"
                                           rules={[{ required: true, message: 'Pole jest wymagane!' }]}>
                                    <Select
                                        value={rodziaj}
                                        placeholder='Rodzaj dania&#9913;'
                                        onChange={handleChangeSelect}
                                        options={[
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

                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item>

                                    <Form.Item name="photo" label="Dodaj zdjęcie">
                                        <Upload


                                            listType="picture-card"
                                         onChange={handleChangeUpload}>
                                            <div>
                                                <PlusOutlined/>
                                                <div style={{marginTop: 8}}>Upload</div>
                                            </div>
                                        </Upload>
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default FormSkladnik;