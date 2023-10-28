import { Space, Switch, Table, Tag, Tooltip } from 'antd';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AiOutlineDownload, AiOutlineQrcode } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { BsEyeFill } from 'react-icons/bs';

export default function Enquiries() {

  const columns = [
    {
      title: "VCARD NAME",
      dataIndex: "vcardname",
      key: "vcardname",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "CREATED ON",
      dataIndex: "createdOn",
      key: "createdOn",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
                <Tooltip title="Delete"><BsEyeFill size={20}/></Tooltip>
            <Tooltip title="Delete"><DeleteOutlined size={20} style={{color:"red"}}/></Tooltip>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      vcardname: 'hello',
      name: 'hello',
      email: 'yyyyy@gmail.com',
      phone: 123456789, // true for "on" and false for "off"
      createdOn: '12-1-3223',
      action: '',
    },
  ];

  return (
    <div>
      <h1>Enquiries</h1>
      <div style={{paddingLeft:"2%"}}>
            <Table columns={columns} dataSource={data} />
        </div>
    </div>
  )
}
