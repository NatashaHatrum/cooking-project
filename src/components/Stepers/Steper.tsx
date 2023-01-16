import {FC, useState} from 'react';
import {Button, Steps, message} from "antd";
import * as React from "react";
import Form from "./../../components/Form.jsx";
import FormSkladnik from "../FormSkladnik/FormSkladnik";
import Opis from "../Opis/Opis";
import {v4 as uuidv4} from 'uuid';

const Steper: FC<{ isModalOpen: any, setModalOpen: any }> = ({isModalOpen, setModalOpen}) => {
    const [current, setCurrent] = useState(0);
    const [name, setName] = useState();
    const [state, setState] = useState([]);
    const [rodziaj, setRodziaj] = useState();
    const [fileList, setFileList] = useState([]);
    const [opis, setOpis] = useState();
    const [waga, setWaga] = useState();
    const [czas, setCzas] = useState();
    const [program, setProgram] = useState();


    const steps = [
        {
            content: <FormSkladnik setSklad={setName} skladnik={name} rodziaj={rodziaj} setRodziaj={setRodziaj}
                                   setFileList={setFileList}/>,
        },
        {
            content: <Form stateFromParent={state} setStateFromParent={setState}/>,
        },
        {
            content: <Opis opis={opis} setOpis={setOpis} waga={waga} setWaga={setWaga} czas={czas} setCzas={setCzas} program={program} setProgram={setProgram}/>,
        },


    ];
    const handleSave = () => {
        console.log({
            nazwa: name,
            type: rodziaj,
            photo: fileList,
            description: opis,
            weight: waga,
            time: czas,
            program: program,
            tags: state.map((el) =>`${el.name} ${el.quantity.weight} ${el.quantity.measurementUnits}`)
        });
        localStorage.setItem('przepis', JSON.stringify({
            key: uuidv4(),
            name: name,
            type: rodziaj,
            photo: fileList,
            description: opis,
            weight: waga,
            time: czas,
            program:program,
            tags: state.map((el) =>`${el.name} ${el.quantity.weight} ${el.quantity.measurementUnits}`)
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
