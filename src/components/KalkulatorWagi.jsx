import {Button, Col, Input} from "antd";
import React, {useState} from "react";

const Kalkulator = () => {
    const [valueInput, setValueInput] = useState();
    const [valueInputGr, setValueInputGr] = useState();
    const [valueInputF, setValueInputF] = useState();
    const [state, setState] = useState();
    const remowe = () => {
        setState();
        setValueInput();
        setValueInputGr();
        setValueInputF()
    };
    const wynik1 = () => {
        console.log(valueInput, valueInputF, state);
        if(!valueInput) {

            setValueInputGr(Number(valueInputF) * 453 );
        }
        else {
            setValueInputF(Number(valueInput) * 2.2046);
            setValueInputGr(Number(valueInput) * 1000);
        }
    };


    return (
        <>
            <div><h2> Kalkulator wagi</h2></div>
            <div>Kilogramy</div>
            <Input
                value={valueInput}
                placeholder="kg"
                type='number'
                onChange={(event) => {
                    setValueInput(event.target.value)
                }}
            />
            <div>Funty</div>
            <Input
                placeholder="lb"
                onChange ={(event) => !valueInput ? setValueInputF(event.target.value) : event }
                value={valueInputF}>
            </Input>

            <div>Gramy</div>
            <Input
                placeholder="gr"
                value={valueInputGr}>
            </Input>

            <Button
                style={{marginTop: '20px'}}
                type="primary"
                onClick={() => wynik1()}>Wylicz</Button>
            <Button
                style={{marginLeft: '10px'}}
                type="primary" danger
                onClick={() => remowe()}>Wyczyść</Button>


        </>
    )
};

export default Kalkulator;