import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Card, Col, Row, Table } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { LiaUserAltSlashSolid } from "react-icons/lia";
import { FaQuestion } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'],
  datasets: [
      {
          label: 'Entries',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
      }
  ]
};

const options = {
  scales: {
      x: {
          type: 'category',
          title: {
              display: true,
              text: 'Months',
          },
      },
      y: {
          beginAtZero: true,
          title: {
              display: true,
              text: 'Data',
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

export default function DashBoard() {
  const chartRef = useRef(null); // Reference to the chart instance
  const [chart, setChart] = useState(null);

  useEffect(() => {
      if (chartRef.current) {
          if (chart) {
              // Destroy the existing chart if it exists
              chart.destroy();
          }

          // Create a new chart
          const newChart = new Bar(chartRef.current, {
              data: barData,
              options: options,
          });

          // Set the chart in the state
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
                <div style={{}}>
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
      <div >
        <Bar data={barData} options={options} style={{padding:"5%"}}/>
      </div>
      <div className="dash_Table_div">
        <h5 style={{paddingBottom:"3%"}}>Today Appointments</h5>
        <Table
          className="dash_Table"
        >
          <div style={{boxShadow: "0 20px 27px 0 rgba(0,0,0,.05)"}}>
          <thead style={{ border: "none", borderRadius: "23px"}}>
            <tr style={{ border: "none", borderRadius: "23px" }}>
              <th style={{ border: "none", borderRadius: "23px" }}>
                Vcard Name
              </th>
              <th style={{ border: "none" }}>Name</th>
              <th style={{ border: "none" }}>Phone</th>
              <th style={{ border: "none", borderRadius: "23px" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ border: "none", borderRadius: "23px" }}>
              <td style={{ border: "none", borderRadius: "23px" }}>1</td>
              <td style={{ border: "none", borderRadius: "23px" }}>Mark</td>
              <td style={{ border: "none", borderRadius: "23px" }}>Otto</td>
              <td style={{ border: "none", borderRadius: "23px" }}>@mdo</td>
            </tr>
          </tbody>
          </div>
        </Table>
      </div>
    </div>
  );
}
