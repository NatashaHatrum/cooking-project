import './App.css';
import {Row, Col} from 'antd';
import {Fragment} from "react";
import React from "react";
import GetWether from "./Api";
import Form from "./components/Form";
import Kalkulator from "./components/KalkulatorDlugosci";
import KalkulatorStopni from "./components/KalkulatorStopni";
import mainPhoto from './photo/photoglowne.jpg'
import DodajPrszepis from "./components/Dodaj/Dodaj.tsx";
import ZnajdzPrszepis from "./components/Dodaj/Znajdz.tsx";


function App() {

    return (

        <Fragment>
            <div className='glownePhoto' alt="pierogi"><img src={mainPhoto}/>

            </div>
            {/*  <Row gutter={[12, 12]} justify='center'>
                <Col>
                    <Kalkulator/>
                </Col>
                <Col>
                    <KalkulatorStopni/>
                </Col>
            </Row>
            <GetWether/>*/}
            <Row gutter={[12, 12]} justify='center' >
                {/*     <Form/>*/}
                <Col >
                    <DodajPrszepis/>
                </Col>
                <Col >
                    <ZnajdzPrszepis/>
                </Col>
            </Row>

        </Fragment>
    )
}

export default App;
