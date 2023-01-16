import {FC, useEffect, useState} from 'react';
import {Form, Input, Modal, Typography} from 'antd';
import * as React from "react";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import Device from './Device'
import Button from "antd/lib/button/button";
import Kalkulator from '../KalkulatorWagi.jsx'

const {Title} = Typography;
const {TextArea} = Input;

const Opis: FC<{ opis: any, setOpis: any, waga: any, setWaga: any, czas: any, setCzas: any, program: any, setProgram: any}> = ({opis, setOpis, waga, setWaga, czas, setCzas, program, setProgram}) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleChangeOpis = (e) => {
        setOpis(e.target.value)
    };
    const handleChangeWaga = (e) => {
        setWaga(e.target.value)
    };
    const handleChangeCzas = (e) => {
        setCzas(e.target.value)
    };
    const handleChangeProgram = (e) => {
        setProgram(e.target.value)
    };


    const showModal = () => {
        setModalOpen(true)
    };
    const handleOk = () => {
        setModalOpen(false)
    };

    const handleToogle = () => {
        setModalOpen(oldState => !oldState)
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
                                    placeholder='Dodaj opis przepisu'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            value={waga}
                            placeholder='Waga chleba (gr)'
                            onChange={(event) => {
                                handleChangeWaga(event)
                            }}
                        />
                    </Col>
                    <Col>
                        <Button
                            type="default"
                            size="large"
                            onClick={showModal}

                        >Kalkulator wagi</Button>
                        <Row>
                            <Col>
                                <Input
                                    value={czas}
                                    type='time'
                                    placeholder='Czas wypieku'
                                    onChange={(event) => {
                                        handleChangeCzas(event)
                                    }}/>
                            </Col>

                        </Row>
                        <Modal
                            centered={true}
                            onCancel={handleToogle}
                            onOk={handleOk}
                            footer={false}
                            open={isModalOpen}
                        > <Kalkulator/></Modal>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Device/>
                    </Col>
                    <Col>
                        <Input
                            type='number'
                            placeholder='Program'
                            value={program}
                            onChange={(event) => {
                                handleChangeProgram(event)
                            }}/>
                    </Col>
                </Row>
            </Form.Item>

        </>
    )
};


export default Opis;