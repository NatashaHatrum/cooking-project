import {useState, useEffect} from "react";
import React from "react";
import '../App.css';
import Input from "antd/es/input";
import {Button, Select, Typography} from 'antd';
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import {
    MediumOutlined,
    PlusOutlined,
    AppleOutlined,
    FileWordOutlined,
    ShoppingCartOutlined,
    TrademarkOutlined
} from '@ant-design/icons';
import {v4 as uuidv4} from 'uuid';


const {Title} = Typography;






const Form = ({stateFromParent,setStateFromParent}) => {
   /* const [colorTla, setColorTla] = useState(false);
    const kolor = ()  =>{
        setColorTla(!colorTla)
    };
*/



    const [valueInput, setValueInput] = useState('');
    const [valueSelect, setValueSelect] = useState('');
    const [valueQuantity, setValueQuantity] = useState('');
    const [valueQuantitySelect, setValueQuantitySelect] = useState('');

    const zupa = () => {
        const skladinki = [...stateFromParent, {
            id: uuidv4(),
            name: valueInput,
            type: valueSelect,
            quantity: {weight: valueQuantity, measurementUnits: valueQuantitySelect},
        }];
        setStateFromParent(skladinki);
        localStorage.setItem('state', JSON.stringify(skladinki));
        setValueInput('');
        setValueQuantity('');
        setValueQuantitySelect(null);
        setValueSelect(null)
    };
/*const setCookie =() =>{
    document.cookie = 'name = Natasha'
};
const getCookie =()=>{
    alert(document.cookie)
}*/

    const rodziaj = (valueSelect) => {
        setValueSelect(valueSelect)
    };
    const ilosc = (valueQuantitySelect) => {
        setValueQuantitySelect(valueQuantitySelect)
    };

    const deleteItem = (id) => {
        setStateFromParent(
            stateFromParent.filter(item => {
                return item.id !== id
            })
        );
        localStorage.removeItem('state')
    };

    const colorButtons = (typProduktu) => {
        switch (typProduktu) {
            case 'mięso, ryba':
                return (
                    'primary'
                );

            case 'warzywa':
                return (
                    'text '
                );
            case 'owoce':
                return (
                    'dashed '
                );
            case 'inne' :
                return (
                    'default '
                );

            default:
                return (
                    'primary'
                )
        }
    };

    const ikonsButtons = (typProdukyu) => {
        switch (typProdukyu) {
            case 'mięso':
                return (
                    <MediumOutlined/>
                );
            case 'warzywa':
                return (
                <FileWordOutlined/>
            );
                case 'ryba':
                return (
                <TrademarkOutlined/>
            );
            case 'owoce':
                return (
                    <AppleOutlined/>
                );
            case 'inne':
                return (
                    <ShoppingCartOutlined/>
                );
            default:
                return (
                    <ShoppingCartOutlined/>

                )
        }
    };



    useEffect(() => {
        const savedData = localStorage.getItem('state');
        if (savedData?.length) {
            const daneDoWstawenia = JSON.parse(savedData);
            setStateFromParent(daneDoWstawenia);

        }
        else setStateFromParent([])

    }, []);

/*useEffect(()=>{
   if(colorTla){
       document.getElementById('root').style.backgroundColor = 'red'
   } else{
       document.getElementById('root').style.backgroundColor = 'white'
   }
},[colorTla]);*/
    return (
        <>
            <Row gutter={17} justify='center'>
                <Col>
                    <Row style={{
                        padding: '8px 0',
                    }}>
                        <Col span={24}>
                            <Title level={2}>Dodaj skladniki</Title>
                            <Input
                                style={{
                                    marginBottom: '10px'
                                }}
                                type='text'
                                placeholder='Skladnik'
                                value={valueInput}
                                onChange={(el) => {
                                    setValueInput(el.target.value)
                                }}
                            />
                        </Col>
                        <Col span={17}>
                            <Input
                                type='number'
                                placeholder='Ilość'
                                value={valueQuantity}
                                onChange={(el) => {
                                    setValueQuantity(el.target.value)
                                }}
                            />
                        </Col>

                        <Col span={7}>
                            <Select
                                style={{
                                    width: '100%'
                                }}
                                defaultValue=''
                                disabled={valueInput.length <= 0}
                                onChange={ilosc}
                                options={[
                                    {
                                        value: 'gr',
                                        label: 'gr'
                                    },
                                    {
                                        value: 'kg',
                                        label: 'kg'
                                    },
                                    {
                                        value: 'ml',
                                        label: 'ml'
                                    },
                                    {
                                        value: 'l',
                                        label: 'l'
                                    },
                                    {
                                        value: 'lyż',
                                        label: 'lyż'
                                    },
                                    {
                                        value: 'szt',
                                        label: 'szt'
                                    }
                                ]}
                            />

                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Select
                                defaultValue=''
                                disabled={valueInput.length <= 0}
                                style={{
                                    width: '100%',
                                    marginTop: '10px'
                                }}
                                onChange={rodziaj}
                                options={[
                                    {
                                        value: 'mięso',
                                        label: 'Mięso'
                                    },
                                    {
                                        value: 'ryba',
                                        label: 'Ryba'
                                    },
                                    {
                                        value: 'warzywa',
                                        label: 'Warzywa'
                                    },
                                    {
                                        value: 'owoce',
                                        label: 'Owoce'
                                    },

                                    {
                                        value: 'inne',
                                        label: 'Inne'
                                    }
                                ]}
                            />
                        </Col>
                    </Row>


                    <Row><Col>
                        <Button
                            icon={<PlusOutlined/>}
                            disabled={valueInput.length <= 0}
                            onClick={() => zupa()}
                            style={{marginTop: '10px'}}
                        >

                            Dodaj skladnik
                        </Button>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            < Title level={4}> Lista dodanych produktów </Title>

                            {
                                stateFromParent ?
                                    stateFromParent.map((el, index) =>
                                        <Row gutter={[16, 16]} key={index}>

                                            <Button
                                                onClick={() => deleteItem(el.id)}
                                                icon={ikonsButtons(el.type)}
                                                type={colorButtons(el.type)}
                                                style={{
                                                    marginTop: '10px',
                                                    width: '100%'
                                                }}
                                            >{el.name} {el.quantity.weight} {el.quantity.measurementUnits}</Button>
                                        </Row>
                                    )
                                    : 'Brak '

                            }
                        </Col>
                    </Row>
                </Col>
            </Row>

    {/*        <button
           onClick = {kolor}> Zmień tlo</button>
*/}
        </>
    )

};

export default Form;