import { Card, Col, Row } from "react-bootstrap";
import { Button, Input, Space, Switch, Table, Tag, Tooltip } from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { BsEyeFill } from "react-icons/bs";
export default function DashAffiliations() {
  const columns = [
    {
      title: "USER",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "AFFILIATION AMOUNT",
      dataIndex: "affiliationAmount",
      key: "affiliationAmount",
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
  ];

  const data = [
    {
      key: "1",
      name: "hello",
      affiliationAmount: "1200",
      date: "12-1-3223",
    },
  ];

  const columnse = [
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "APPROVAL STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
    }
  ];

  const datae = [
    {
      key: "1",
      amount: "12330",
      status: "pending",
      date: "12-1-3223",
      action:"approved",
    },
  ];

  const [tableChange, setTableChange] = useState('AffilicationTable')

  return (
    <div style={{padding:"3%"}}>
      <h2>Affiliations</h2>
      <Row>
        <Col style={{display:"flex"}}>
          <Input placeholder="Basic usage" />
          <Button>copy</Button>
        </Col>
        <Col style={{display:"flex", flexDirection:"row-reverse"}}>
          <Button> send invite</Button>
        </Col>
      </Row>
      <div style={{padding:"4%"}}>
        <Row>
          <Col>
            <Card style={{display:"flex", flexDirection:"row", justifyContent:"space-around", padding:"4%", backgroundColor:"#0ac074", borderRadius:"10px"}}>
              <Card.Title>Total Affiliation Amount</Card.Title>
              <Card.Title>₹0.00</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{display:"flex", flexDirection:"row", justifyContent:"space-around", padding:"4%", backgroundColor:"#0099fb", borderRadius:"10px"}}>
              <Card.Title>Current Amount</Card.Title>
              <Card.Title>₹0.00</Card.Title>
            </Card>
          </Col>
        </Row>
        <br/>
        <h5 style={{margin:"15px"}}>
          Note: Your affiliation links will be shown to your vcards page in the
          bottom. When someone do registration via that and buying a
          subscription after that you will be get rewarded with amount ₹10.00
        </h5>
      </div>
      <div >
        <div style={{marginRight:"4%"}}>
        <Button onClick={()=> setTableChange('AffilicationTable')}>Affiliation</Button>
        <Button onClick={()=> setTableChange('WithdrawTable')}>Withdrawal</Button>
        </div>
        <div style={{padding:"4%"}}>
            {tableChange === 'AffilicationTable' && <Table columns={columns} dataSource={data} /> }
            {tableChange === 'WithdrawTable' && <Table columns={columnse} dataSource={datae} />}
        </div>
      </div>
    </div>
  );
}
