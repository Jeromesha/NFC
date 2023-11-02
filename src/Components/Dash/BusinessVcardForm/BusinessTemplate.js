import { Space, Switch, Table, Tag, Tooltip } from 'antd';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AiOutlineDownload, AiOutlineQrcode } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import '../../../Components/nfc.css';

export default function BusinessTemplate() {
    const [hotelSet, setHotelSet] = useState('cardDetial');

    const columns = [
      {
        title: "VCARD NAME",
        dataIndex: "vcardname",
        key: "vcardname",
      },
      {
        title: "PREVIEW URL",
        dataIndex: "preview",
        key: "preview",
      },
      {
        title: "STATUS",
        dataIndex: "status",
        key: "status",
        render: (text, record) => (
          <Space size="middle">
            <Switch defaultChecked={text} onChange={onchange} />
          </Space>
        ),
      },
      {
        title: "CREATED AT",
        dataIndex: "createdate",
        key: "createdate",
      },
      {
        title: "ACTION",
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Tooltip title="Downlaod QR"><AiOutlineQrcode/></Tooltip>
            <Tooltip title="Downlaod Card"><AiOutlineDownload/></Tooltip>
            <Tooltip title="Enquiries"><HiOutlineDocumentText/></Tooltip>
            <Tooltip title="Edit"><EditOutlined/></Tooltip>
            <Tooltip title="Delete"><DeleteOutlined style={{color:"red"}}/></Tooltip>
          </Space>
        ),
      },
    ];
    
    const data = [
      {
        key: '1',
        vcardname: 'hello',
        preview: 'created Url',
        status: true, // true for "on" and false for "off"
        createdate: '12-1-3223',
        action: '',
      },
      {
        key: '1',
        vcardname: 'hello',
        preview: 'created Url',
        status: true, // true for "on" and false for "off"
        createdate: '12-1-3223',
        action: '',
      },
    ];

      const navigate = useNavigate();
      const handleNavigate =() => {
        navigate("/user/businessform")
      }
    return (
      <div>
        <div style={{padding:"2%"}}>
        <button 
        className='vcard_detial_btton_submit'
         onClick={handleNavigate}
         >
            NewCard
        </button>
        </div>
        <div style={{paddingLeft:"2%"}}>
            <Table columns={columns} dataSource={data} />
        </div>
      </div>
    );
}
