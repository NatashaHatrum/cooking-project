import {FC, useState, useRef, useCallback, useEffect} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Divider, Input, Select, Space, Button} from 'antd';
import React from 'react';
import { InputRef } from 'antd';
import {getMaszynyDoChleba} from "../../firebaseConfig";

let index = 0;

const Device: FC = () => {
    const [items, setItems] = useState(['Mulinex', 'Tefal']);
    const [name, setName] = useState('');
    const [rozpoczynamPobieranie, setRozpoczynamPobieranie]=useState(true)
    const [maszynyZBazyDanych, setMaszynyZBazyDanych] = useState([])
    const inputRef = useRef<InputRef>(null);

    console.log(rozpoczynamPobieranie)

    const dostanDaneZBazyDoSelecta = useCallback(async ()=> {
        setRozpoczynamPobieranie(true)
        const daneZBazy = await getMaszynyDoChleba
        if(daneZBazy) {
            console.log(daneZBazy)
        }
        setRozpoczynamPobieranie(false)
    },[])

    useEffect(()=>{
        dostanDaneZBazyDoSelecta()
    },[])

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    return (
        <Select
            loading={rozpoczynamPobieranie}
            style={{width: 300}}
            placeholder="Urząndzenie do wypieku"
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider style={{margin: '8px 0'}}/>
                    <Space style={{padding: '0 8px 4px'}}>
                        <Input
                            placeholder="Dodaj nowe urzondzenie"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                        />
                        <Button type="text" icon={<PlusOutlined/>} onClick={addItem}>
                            Add new device
                        </Button>
                    </Space>
                </>
            )}
            options={items.map((item) => ({label: item, value: item}))}
        />
    );
};

export default Device;
