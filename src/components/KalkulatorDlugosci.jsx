import {Button, Col, Input} from "antd";
import React, {useState} from "react";

const Kalkulator = () => {
    const [valueInput, setValueInput] = useState();
    const [state, setState] = useState();
    const remowe = () => {
        setState();
        setValueInput()
    };
    const wynik1 = () => {
        setState(Number(valueInput) / 100)
    };

    return (
        <>
            <div><h2> Kalkulator dlugośći</h2></div>
            <div>Centymetry</div>
            <Input
                value={valueInput}
                placeholder="cm"
                type='number'
                onChange={(el) => {
                    setValueInput(el.target.value)
                }}
            />
            <div>Metry</div>
            <Input
                placeholder="m"
                value={state}>
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