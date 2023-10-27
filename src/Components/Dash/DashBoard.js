import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineDownload, AiOutlineQrcode, AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LiaUserAltSlashSolid } from "react-icons/lia";
import { FaQuestion } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Table, Switch, Space, Tooltip } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

Chart.register(CategoryScale);

// chart data
const barData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Entries",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "category",
      title: {
        display: true,
        text: "Months",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Data",
      },
    },
  },
};
const CardVal = [
  {
    icon: <AiOutlineUser size={40} className="card_icon_head" />,
    title: "Total Active Vcard",
    active: "4",
  },
  {
    icon: <LiaUserAltSlashSolid size={40} className="card_icon_head" />,
    title: "Total Deactivate",
    active: "0",
  },
  {
    icon: <FaQuestion size={40} className="card_icon_head" />,
    title: "Total Enquiries",
    active: "0",
  },
  {
    icon: <SlCalender size={40} className="card_icon_head" />,
    title: "Total Appointments",
    active: "0",
  },
];

// table data

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
    title: "PHONE",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const data = [
  {
    key: '1',
    vcardname: 'YYYYY',
    name: 'XXXX',
    phone: 1234567890, // true for "on" and false for "off"
    email: 'abc@gmal.com',
    action: '',
  },
];

export default function DashBoard() {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chart) {
        chart.destroy();
      }
      const newChart = new Bar(chartRef.current, {
        data: barData,
        options: options,
      });
      setChart(newChart);
    }
  }, []);
  return (
    <div
      data-bs-spy="scroll"
      data-bs-offset="0"
      tabIndex="0"
      style={{ overflow: "auto" }}
    >
      {/* <div>
        <Header SectionName="DashBoard" />
      </div> */}
      <Row style={{ padding: "3%" }}>
        {CardVal.map((card, i) => (
          <Col sm={12} md={6} lg={3} xl={3} key={i}>
            <Card style={{ padding: "0px" }} className="card_dash">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "4%",
                }}
              >
                <div className="card_icon">{card.icon}</div>
                <div style={{ color: "white" }}>
                  <Card.Text>{card.title}</Card.Text>
                  <Card.Text style={{ fontSize: "2rem", textAlign: "center" }}>
                    {card.active}
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Bar data={barData} options={options} style={{ padding: "5%" }} />
      </div>
      <div className="dash_Table_div">
        <h5 style={{ paddingBottom: "3%" }}>Today Appointments</h5>
        <div style={{ overflowX: "auto",boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.082), 0 6px 20px 0 rgba(75, 73, 73, 0)" }}>
          <Table columns={columns} dataSource={data}/>
        </div>
      </div>
    </div>
  );
}
