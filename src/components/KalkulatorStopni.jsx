import {Button, Col, Input} from "antd";
import React, {useState} from "react";

const KalkulatorStopni = () => {

    const [value, setValue] = useState();
    const [valueCelsiuszInput, setValueCelsiusz] = useState();


    const wynik2 = () => {
        setValue(Number(valueCelsiuszInput) * 1.8 + 32)
    };

    const remoweCelsiusz = () => {
        setValue();
        setValueCelsiusz()
    };

    return (
        <>
            <div><h2> Klkulator stopnie Celsjusza (°C)</h2></div>
            <div>stopnie Celsjusza</div>
            <Input
                value={valueCelsiuszInput}
                type='number'
                placeholder='°C'
                onChange={(el) => setValueCelsiusz(el.target.value)}
            />
            <div>stopnie Farengejta</div>
            <Input
                value={value}
                type='number'
                placeholder='F'
            />

            <Button
                style={{marginTop: '20px'}}
                type='primary'
                onClick={() => wynik2()}
            >Wylicz</Button>
            <Button
                style={{marginLeft: '10px'}}
                type="primary" danger
                onClick={() => remoweCelsiusz()}>Wyczyść</Button>
        </>
    )
};

export default KalkulatorStopni;