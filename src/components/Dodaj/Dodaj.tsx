import {FC, useState} from 'react';
import {Button, Modal, Steps} from "antd";
import * as React from "react";
import Steper from "../Stepers/Steper";


const DodajPrszepis: FC = () => {
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
            <Button type="primary"
                    size="large"
                    onClick={showModal}
            >Dodaj przepis</Button>
            <Modal
                centered={true}
                onCancel={handleToogle}
                onOk={handleOk}
                footer = {false}
                open={isModalOpen}
            > <Steper isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>

            </Modal>
            <pre>{JSON.stringify(localStorage.getItem('przepis'), null,2)}</pre>
        </>
    )
};


export default DodajPrszepis
