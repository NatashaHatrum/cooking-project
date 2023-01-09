import {FC, useEffect} from 'react';
import {Form, Input, Typography} from 'antd';
import * as React from "react";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

const {Title} = Typography;
const {TextArea} = Input;

const Opis: FC<{opis:any, setOpis: any}> = ({opis,setOpis}) => {

const handleChangeOpis = (e) =>{
        setOpis(e.target.value)
    };



    return (
        <>


                    <Title level={2}>Dodaj opis</Title>
                    <Form.Item name="opis" rules={[{required: true, message: 'Pole jest wymagane!'}]}>
                        <Row>
                            <Col span={24}>
                                <TextArea
                                    value={opis}
                                    rows={7}
                                    onChange={(event) => {
                                         handleChangeOpis(event)
                                     }}
                                    placeholder='Text'/>
                            </Col>
                        </Row>
                    </Form.Item>

        </>
    )
};


export default Opis;