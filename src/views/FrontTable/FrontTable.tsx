import React from 'react';
import {Col, Row, Table} from 'antd';
import {TableDataType} from "./FrontTable-tableShape";
import tableShape from "./FrontTable-tableShape";


const data: TableDataType[] = [
  {
    key: '1',
    name: 'Chleb w starym stylu',
    owenName: 'Tefal/Moulinex Home Bread Baqiette',
    weight: 750,
    program: 5,
    time: '3:00',
    tags: ['Woda 340 ml', 'Sól 1,5 łyżeczki', 'Mąka chlebowa 490 gram', 'Mąka żytnia 40 gram', 'Drożdze 1,5 łyżeczki' ],
    description: 'Wlej do formy wodę a następnie dosyp soli. Wsyp oba rodzaje mąki a następnie dodaj suszone drożdze. Umieść formę w maszynie rozpocznij pieczenie'
  },
  {
    key: '2',
    name: 'Chleb kopia',
    owenName: 'Tefal/Moulinex Home Bread Baqiette',
    weight: 1000,
    program: 5,
    time: '3:00',
    tags: ['Woda 340 ml', 'Sól 1,5 łyżeczki', 'Mąka chlebowa 490 gram', 'Mąka żytnia 40 gram', 'Drożdze 1,5 łyżeczki' ],
    description: 'Wlej do formy wodę a następnie dosyp soli. Wsyp oba rodzaje mąki a następnie dodaj suszone drożdze. Umieść formę w maszynie rozpocznij pieczenie'
  },
];

const FrontTable = () => {
  return (
      <Row>
        <Col span={18} offset={2}>
          <Table
              columns={tableShape()}
              dataSource={data}
              sortDirections={['ascend', 'descend']}
          />
        </Col>
      </Row>
  );
};

export default FrontTable;
