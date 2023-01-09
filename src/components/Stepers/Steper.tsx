import {FC, useEffect, useState} from 'react';
import {Button, Steps, message, Select} from "antd";
import * as React from "react";
import Form from "./../../components/Form.jsx";
import FormSkladnik from "../FormSkladnik/FormSkladnik.tsx";
import Opis from "../Opis/Opis.tsx";

const Steper: FC<{ isModalOpen: any, setModalOpen: any }> = ({isModalOpen, setModalOpen}) => {
    const [current, setCurrent] = useState(0);
    const [name, setName] = useState();
    const [state, setState] = useState([]);
    const [rodziaj, setRodziaj] = useState();
    const [fileList, setFileList] = useState([]);
    const [opis, setOpis] = useState();

    const steps = [
        {
            content: <FormSkladnik setSklad={setName} skladnik={name} rodziaj={rodziaj} setRodziaj={setRodziaj}
                                   photo={fileList} setFileList={setFileList}/>,
        },
        {
            content: <Form stateFromParent={state} setStateFromParent={setState}/>,
        },
        {
            content: <Opis opis={opis} setOpis={setOpis}/>,
        },


    ];

    const handleSave = () => {
        console.log({nazwa: name, type: rodziaj, photo: fileList, description: opis, ...state});
        localStorage.setItem('przepis', JSON.stringify({
            nazwa: name,
            type: rodziaj,
            photo: fileList,
            description: opis,
            state
        }));
        setModalOpen(false);
        {
            message.success('Gotowe!')
        }

    };


    const next = () => {

        if (!name) {
            {
                message.error('Wypeuni polia odznaczone gwiazdką')
            }
        }
        else if (!rodziaj) {
            {
                message.error('Wypeuni polia odznaczone gwiazdką')
            }
        } else {
            setCurrent(current + 1);
        }


    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}/>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary"
                            onClick={() => next()}>
                        Przejdź dalej
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={handleSave}>
                        Zapisz
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                        Wróć
                    </Button>
                )}
            </div>

        </>
    )
};


export default Steper;