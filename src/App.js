import './App.css';
import {Row, Col, Typography, Space} from 'antd';
import React from "react";
import GetWether from "./Api";
import Form from "./components/Form";
import Kalkulator from "./components/KalkulatorWagi";
import KalkulatorStopni from "./components/KalkulatorStopni";
import mainPhoto from './photo/main.jpg'
import DodajPrszepis from "./components/Dodaj/Dodaj.tsx";
import ZnajdzPrszepis from "./components/Dodaj/Znajdz.tsx";
import FrontTable from "./views/FrontTable/FrontTable";
import MainLayout from "./views/Layout/MainLayout";
import 'antd/dist/reset.css';

const {Title} = Typography;


function App() {

  return (
      <MainLayout>
        <div className='glownePhoto' alt="hlebek"><img src={mainPhoto}/>
        </div>
          <Space direction="vertical" size="middle" style={{ display: 'flex',  marginTop: '2%'}}>
          <Row gutter={[16, 48]} justify='center'>
              <Col >
          <Title className='title'  >Książka przepisów "Pyszny chlebek"</Title>
              </Col>
          </Row>
          </Space>
        {/*  <Row gutter={[12, 12]} justify='center'>
                <Col>
                    <Kalkulator/>
                </Col>
                <Col>
                    <KalkulatorStopni/>
                </Col>
            </Row>
            <GetWether/>*/}
          <Space direction="vertical" size="middle" style={{ display: 'flex', marginBottom: '6%', marginTop: '3%'}}>
        <Row gutter={[16, 48]} justify='center'>
          {/*     <Form/>*/}
          <Col >
            <DodajPrszepis/>
          </Col>
        </Row>
          </Space>
          <Row gutter={[12, 12]} justify='center'>
        <FrontTable/>
          </Row>
      </MainLayout>
  )
}

export default App;
