import React, {useEffect, useState} from 'react';
import {Col, Row, Table} from 'antd';
import {TableDataType} from "./FrontTable-tableShape";
import tableShape from "./FrontTable-tableShape";


const data: TableDataType[] = [
    {
        key: '1',
        name: 'Chleb w starym stylu',
        type: 'Ciemny chleb',
        owenName: 'Tefal/Moulinex Home Bread Baqiette',
        weight: 750,
        program: 5,
        time: '3:00',
        tags: ['Woda 340 ml', 'Sól 1,5 łyżeczki', 'Mąka chlebowa 490 gram', 'Mąka żytnia 40 gram', 'Drożdze 1,5 łyżeczki'],
        description: 'Wlej do formy wodę a następnie dosyp soli. Wsyp oba rodzaje mąki a następnie dodaj suszone drożdze. Umieść formę w maszynie rozpocznij pieczenie'
    },
    {
        key: '2',
        name: 'Chleb kopia',
        type: 'Czarny chleb',
        owenName: 'Tefal/Moulinex Home Bread Baqiette',
        weight: 1000,
        program: 5,
        time: '3:00',
        tags: ['Woda 340 ml', 'Sól 1,5 łyżeczki', 'Mąka chlebowa 490 gram', 'Mąka żytnia 40 gram', 'Drożdze 1,5 łyżeczki'],
        description: 'Wlej do formy wodę a następnie dosyp soli. Wsyp oba rodzaje mąki a następnie dodaj suszone drożdze. Umieść formę w maszynie rozpocznij pieczenie'
    },
];

const FrontTable = () => {
    const [loadingData, setLoadingData] = useState(true)
    const [przepisy, setPrzepisy] = useState([]);

    useEffect(()=>{
        setLoadingData(true)
        const dataZlokalStorycz = localStorage.getItem('przepis')
        if(dataZlokalStorycz) {
            const stringZamienionyNaDane = JSON.parse(dataZlokalStorycz)
            setPrzepisy([...data,stringZamienionyNaDane])
        }
        else setPrzepisy(data)
        setLoadingData(false)
    },[]);

    return (
        <Row justify='center'>
            <Col span={18} offset={2}>
                <Table
                    columns={tableShape()}
                    loading={loadingData}
                    dataSource={przepisy}
                    sortDirections={['ascend', 'descend']}
                />
            </Col>
        </Row>
    );
};

export default FrontTable;
