import './App.css';
import {Row, Col, Button, Input} from 'antd';
import {useEffect, useState} from "react";
import React from "react";
import Select from "antd/es/select";


const GetWether = () => {
    const APIkey = '902306e53243897b98916241c35e4506';
    const [miasto, setMiasto] = useState('Lublin');
    const [wybraneMiasta, setWybraneMiasta] = useState(['Lublin']);

    const Api =(wybraneMiasto)=> `https://api.openweathermap.org/data/2.5/weather?q=${wybraneMiasto}&appid=${APIkey}&units=metric`;
    const [error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const [items, setItems] = useState([]);
    const [valueInput, setValueInput] = useState();
    const time = new Date().toLocaleString();


    const miastoInput = () => {
        setMiasto(valueInput);
        setWybraneMiasta(wybraneMiasta.concat([valueInput]))

    };

    const handleChange = (value) => {
        setMiasto(value);
    };

    useEffect(() => {
       wybraneMiasta?.forEach(el => {
            fetch(Api(el))
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.cod === '404') {
                            setError(result)
                        }

                        setIsLoader(true);
                        if (result) {
                            const data = [...items,result];
                            setItems(data)
                        }
                    },
                    (error) => {
                        setIsLoader(true);
                        setError(error);
                    }
                );
            setValueInput('')

        })
    }, [wybraneMiasta]);

    if (error) {
        return <span>Spróbój jeszcze raz: {error.message || error}
            <Input
                tupe='text'
                value={valueInput}
                placeholder="Wpish miasto"
                onChange={(el) => {
                    setValueInput(el.target.value)
                }}
            />
                        <Button
                            style={{marginTop: '5px'}}
                            type="primary"
                            onClick={() => miastoInput()}>Znajdż</Button>
        </span>
    } else if (!isLoader) {
        return <span>Loading</span>
    } else {
        return (
            <>
                <Row gutter={[24]} justify='center'>
                    <Col>
                        <h1 style={{
                            paddingTop: '50px',
                            margin: '0'
                        }}> Aktualna pogoda na</h1>
                        <h4 style={{
                            paddingBottom: '10px',
                            margin: '0'
                        }}
                        >{time}
                        </h4>
                        <Select
                            defaultValue="Lublin"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'Lublin',
                                    label: 'Lublin',
                                },
                                {
                                    value: 'Warszawa',
                                    label: 'Warszawa',
                                },
                                {
                                    value: 'London',
                                    label: 'London',
                                },
                                {
                                    value: 'Minsk',
                                    label: 'Minsk',
                                },

                            ]}
                        />
                        <Input
                            tupe='text'
                            value={valueInput}
                            placeholder="Wpish miasto"
                            onChange={(el) => {
                                setValueInput(el.target.value)
                            }}
                        />
                        <Button
                            style={{marginTop: '5px'}}
                            type="primary"
                            onClick={() => miastoInput()}>Znajdż
                        </Button>
                       {  items?.map(el => <ul>
                            <li><span>Miasto:</span> {el.name} </li>
                            <li><span>Kraj:</span> {el.sys.country} </li>
                            <li><span>Temperatura:</span> {el.main.temp} &#176;C</li>
                            {el.weather.map(weather => <li>{weather.main}</li>)}
                        </ul>)
                       }

                    </Col>
                    <Row >
                        <Col>
                            Wybrane miasta:
                            {wybraneMiasta.map(el => <div key={el}>{el}</div>)}
                        </Col>
                    </Row>
                </Row>
            </>
        )
    }
};


export default GetWether;