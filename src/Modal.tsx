
import {FC, useState} from 'react';
import { Button, Modal } from 'antd';
import * as React from "react";

const ModalToShow: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true)
    };
    const handleOk = () => {
        setModalOpen(false)
    };

    const handleToogle = () => {
        setModalOpen(oldState=> !oldState)
    };

    return (
        <>
            <Button
                type='primary'
                onClick={showModal}
            >Dodaj przepis
            </Button>
            <Modal
                centered={true}
                onCancel={handleToogle}
                onOk={handleOk}
                title={'Przepis'}
                open={isModalOpen} >
            <p>Ryba</p>
            <p>Ryba</p>
            <p>Ryba</p>
            <p>Ryba</p>
            <p>Ryba</p>
            </Modal>
        </>
    );
};

export default ModalToShow;
