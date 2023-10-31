import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BiLogoTumblr, BiSolidMap } from "react-icons/bi";
import {
  BsFacebook,
  BsGlobe2,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbLetterX } from "react-icons/tb";
import "../../../Components/nfc.css";
import { Form, Input, Button, DatePicker, TimePicker, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import Api from '../../../Api';
const { Item } = Form;
const { RangePicker } = DatePicker;
export default function WebTemplateOne() {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get("http://localhost:8080/vcard/getvcarddetail")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error in API call", error);
      });
  }, []); 

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "35vw" }}
          src="https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?w=996&t=st=1698391788~exp=1698392388~hmac=15c6195cc7d422e563f703c60ce1f211e3633a71dc887ac504f96fe4a3303411"
        />
        <img
          className="web_temp_profile"
          src="https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?w=996&t=st=1698392107~exp=1698392707~hmac=e5b693b616885efc13fb7fb670713b1ea5e2d05e766ffd4949ae7b8ac0e8b15f"
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "8%",
        }}
      >
        <p className="web_temp_name">Name</p>
        <p className="web_temp_occuupation">Professional Occupation</p>
        <p className="web_temp_comname">Company Name</p>
        <p className="web_temp_discription">
          Wrok discription I'm having 2+ experience in java full stack
          developement
        </p>
      </div>
      <Row style={{ padding: "4%" }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <BsGlobe2
            size={30}
            style={{ marginLeft: "5%", marginRight: "5%", color: "#0099cc" }}
          />
          <BsWhatsapp
            size={30}
            style={{ marginLeft: "5%", marginRight: "5%", color: "#00ff00" }}
          />
          <BsInstagram
            size={30}
            style={{ marginLeft: "5%", marginRight: "5%", color: "#ff0066" }}
          />
          <BsFacebook
            size={30}
            style={{ marginLeft: "5%", marginRight: "5%", color: " #0000cc" }}
          />
        </Col>
      </Row>
      <div style={{ marginRight: "5%", marginLeft: "5%" }}>
        <Row>
          <Col sm={6} md={6} lg={3} style={{ padding: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
                color: "	 #6666ff",
              }}
            >
              <FiMail size={50} />
            </div>

            <p className="web_temp_cont">yyyyyy@gmail.com</p>
          </Col>
          <Col sm={6} md={6} lg={3} style={{ padding: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
                color: "	 #6666ff",
              }}
            >
              <BiSolidMap size={50} />
            </div>
            <h6 className="web_temp_cont">Bengaluru</h6>
          </Col>
          <Col sm={6} md={6} lg={3} style={{ padding: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
                color: "	 #6666ff",
              }}
            >
              <LiaBirthdayCakeSolid size={60} />
            </div>
            <h6 className="web_temp_cont">1-1-1998</h6>
          </Col>
          <Col sm={6} md={6} lg={3} style={{ padding: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
                color: "	 #6666ff",
              }}
            >
              <BsTelephone size={50} />
            </div>
            <h6 className="web_temp_cont">yyyyyy@gmail.com</h6>
          </Col>
        </Row>
      </div>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col sm={8} md={6} lg={6}>
          <div className="web_temp_qr_div">
            <p className="web_temp_occuupation">QR code</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card style={{ width: "30%" }}>
                <Card.Img src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=740&t=st=1698413946~exp=1698414546~hmac=047a9c750fcf84f05044c2d88e87448f54bc51ba6d242e38cdf3043d6d31d415"></Card.Img>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <p className="web_temp_occuupation">Our Service</p>
        <div>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={6} md={6} lg={3}>
              <Card className="web_temp_card">
                <Card.Img src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041849.jpg?w=996&t=st=1698414165~exp=1698414765~hmac=84678c61043411fbd272d30c4c499397ae1b18923de1aa25da16322d5b66943b"></Card.Img>
                <div style={{ padding: "2%" }}>
                  <Card.Text className="web_temp_card_name">
                    Service Name
                  </Card.Text>
                  <Card.Text>discription</Card.Text>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <p className="web_temp_occuupation">Products</p>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col sm={6} md={6} lg={3}>
            <Card className="web_temp_card">
              <Card.Img src="https://img.freepik.com/free-vector/illuminated-neon-lights-stage-realistic-vector_1441-3734.jpg?w=900&t=st=1698414224~exp=1698414824~hmac=b39fdc6f23fe66005ac28c456fb76240d72c225bfba291293798f148a2d867c7"></Card.Img>
              <div style={{ padding: "2%" }}>
                <Card.Text className="web_temp_card_name">
                  Product Name
                </Card.Text>
                <Card.Text>Price: 1000k</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <p className="web_temp_occuupation">Testomonial</p>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col sm={6} md={6} lg={3}>
            <Card className="web_temp_card">
              <Card.Img src="https://img.freepik.com/free-photo/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually_273609-16228.jpg?w=996&t=st=1698414423~exp=1698415023~hmac=580d28f5258c119be16ab72fb0a2e6fc2926b1237214b41b05edf7277a491d4f"></Card.Img>
              <div style={{ padding: "2%" }}>
                <Card.Text className="web_temp_card_name">Name</Card.Text>
                <Card.Text>Discription</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          style={{ display: "flex", justifyContent: "center", padding: "4%" }}
        >
          <Col sm={8} md={6} lg={6}>
            <div className="web_temp_appin_div">
              <p
                className="web_temp_occuupation"
                style={{ color: "white", paddingTop: "4%" }}
              >
                Make An Appointment
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "3%",
                }}
              >
                <Form
                  layout="vertical"
                  style={{ color: "white" }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Item
                    label={<span style={{ color: "white" }}>Date</span>}
                    style={{ color: "white" }}
                    name="date"
                    rules={[
                      {
                        required: true,
                        message: "Please select a date!",
                      },
                    ]}
                  >
                    <DatePicker placeholder="Date-Month-Year" />
                  </Item>

                  <Item
                    label={<span style={{ color: "white" }}>Time</span>}
                    name="time"
                    style={{ color: "white" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select a time!",
                      },
                    ]}
                  >
                    <TimePicker format="HH:mm" placeholder="Select Time" />
                  </Item>
                  <Item style={{ display: "flex", justifyContent: "center" }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          style={{ display: "flex", justifyContent: "center", padding: "4%" }}
        >
          <Col sm={8} md={6} lg={6}>
            <div className="web_temp_en_div">
              <p
                className="web_temp_occuupation"
                style={{ color: "white", paddingTop: "2%" }}
              >
                Enquiries
              </p>
              <Form
                layout="vertical"
                style={{
                  marginRight: "15px",
                  marginLeft: "15px",
                  padding: "4%",
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <div style={{ paddingBottom: "1%", padding: "3%" }}>
                  <Item
                    label={<span style={{ color: "white" }}>Name</span>}
                    name="name"
                    style={{ margin: "0px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your name!",
                      },
                    ]}
                  >
                    {" "}
                    <Input
                      placeholder="Your Name"
                      style={{ color: "white", fontWeight: "bold" }}
                    />
                  </Item>
                </div>
                <div style={{ paddingBottom: "1%", padding: "3%" }}>
                  <Item
                    label={<span style={{ color: "white" }}>Email</span>}
                    name="email"
                    style={{ margin: "0px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email address!",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email address!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Your Email Address"
                      style={{ marginTop: "-30px" }}
                    />
                  </Item>
                </div>
                <div style={{ paddingBottom: "1%", padding: "3%" }}>
                  <Item
                    label={
                      <span style={{ color: "white" }}>Contact Email</span>
                    }
                    name="contactNumber"
                    style={{ margin: "0px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your contact number!",
                      },
                    ]}
                  >
                    <InputNumber
                      placeholder="Your Contact Number"
                      style={{ width: "100%", marginTop: "-30px" }}
                    />
                  </Item>
                </div>
                <div style={{ paddingBottom: "1%", padding: "3%" }}>
                  <Item
                    label={<span style={{ color: "white" }}>Message</span>}
                    name="message"
                    style={{ margin: "0px" }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your message!",
                      },
                    ]}
                  >
                    <TextArea placeholder="Type Your Message" />
                  </Item>
                </div>
                <br />
                <div
                  style={{
                    paddingBottom: "1%",
                    padding: "4%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Item>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
