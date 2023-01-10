import {ColumnsType} from "antd/es/table";
import {Space, Tag} from "antd";
import React from "react";
import { Input } from 'antd';
import styles from './FrontTable.module.css';

const { TextArea } = Input;

export interface TableDataType {
  key: string;
  name: string;
  owenName: string;
  program: string | number;
  weight: number;
  time: string;
  tags: string[];
  description: string;
}

const tableShape = () => {

  const columns: ColumnsType<TableDataType> = [
    {
      title: 'Nazwa',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Waga - gramy',
      dataIndex: 'weight',
      key: 'weight',
      sorter: (a, b) => a.weight - b.weight,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Czas',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Składniki',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, {tags}) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag.includes('Woda')) {
                color = 'blue';
              }
              if (tag.includes('Olej')) {
                color = 'gold';
              }
              if (tag.includes('Mąka')) {
                color = 'gray';
              }
              if (tag.includes('Drożdze')) {
                color = 'DarkGoldenRod';
              }
              return (
                  <Tag className={styles.tableTag} color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
              );
            })}
          </>
      ),
    },
    {
      title: 'Urządzenie do wypieku',
      dataIndex: 'owenName',
      key: 'owenName',
    },
    {
      title: 'Program wypieku',
      dataIndex: 'program',
      key: 'program',
    },
    {
      title: 'Opis',
      width: 300,
      dataIndex: 'description',
      key: 'description',
      render: (opis)=>  <TextArea value={opis} rows={3} readOnly={true} />
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            <a>Udostępnij<br/>{record.name}</a>
          </Space>
      ),
    },
  ];

return columns

}

export default tableShape;
