import React from 'react'

export default function DashAppoinment() {

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
          title: "APPOINTMENT TIME",
          dataIndex: "appoinmentTime",
          key: "appoinmentTime",
        },
        {
            title: "STATUS",
            dataIndex: "status",
            key: "status",
        },
        {
          title: "TYPE",
          dataIndex: "type",
          key: "type",
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
          appoinmentTime:"12-2-2023",
          status:"yes",
          type:"product",
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
