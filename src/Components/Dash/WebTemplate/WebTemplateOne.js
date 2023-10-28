import React, {useState} from "react";
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
import $ from 'jquery';

export default function WebTemplateOne() {
  return (
    <Container fluid>
    <div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "35vw" }}
          src="https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?w=996&t=st=1698391788~exp=1698392388~hmac=15c6195cc7d422e563f703c60ce1f211e3633a71dc887ac504f96fe4a3303411"
        />
        <img
          style={{
            width: "13%",
            height: "13vw",
            borderRadius: "50%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            bottom: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
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
        <h1>Name</h1>
        <h3 style={{ color: "grey" }}>Professional Occupation</h3>
        <h6>Company Name</h6>
        <p>
          Wrok discription I'm having 2+ experience in java full stack
          developement
        </p>
      </div>
      <Row style={{ padding: "4%" }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <BsGlobe2 size={30} style={{ marginLeft: "5%", marginRight: "5%" }} />
          <BsWhatsapp
            size={30}
            style={{ marginLeft: "5%", marginRight: "5%" }}
          />
          <BsInstagram
            size={30}
            style={{ marginLeft: "5%", marginRight: "5%" }}
          />
          <BsFacebook
            size={30}
            style={{ marginLeft: "5%", marginRight: "5%" }}
          />
        </Col>
      </Row>
      <div style={{marginRight:"5%", marginLeft:"5%"}}>
        <Row>
          <Col style={{ padding: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
              }}
            >
              <FiMail size={50} />
            </div>

            <h6 style={{ display: "flex", justifyContent: "center" }}>
              yyyyyy@gmail.com
            </h6>
          </Col>
          <Col style={{ padding: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
              }}
            >
              <BiSolidMap size={50} />
            </div>
            <h6 style={{ display: "flex", justifyContent: "center" }}>
              Bengaluru
            </h6>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: "2%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
              }}
            >
              <LiaBirthdayCakeSolid size={50} />
            </div>
            <h6 style={{ display: "flex", justifyContent: "center" }}>
              1-1-1998
            </h6>
          </Col>
          <Col
            style={{ padding: "2%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2%",
              }}
            >
              <BsTelephone size={50} />
            </div>
            <h6 style={{ display: "flex", justifyContent: "center" }}>
              yyyyyy@gmail.com
            </h6>
          </Col>
        </Row>
      </div>
      <div >
        <h2 style={{textAlign:"center"}}>QR code</h2>
        <div style={{display:"flex", justifyContent:"center" }}>
        <Card style={{width:"30%"}}>
          <Card.Title>Scan</Card.Title>
          <Card.Img
            src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg?w=740&t=st=1698413946~exp=1698414546~hmac=047a9c750fcf84f05044c2d88e87448f54bc51ba6d242e38cdf3043d6d31d415"></Card.Img>
        </Card>
        </div>
      </div>
      <div>
        
        <h2 style={{textAlign:"center"}}>Our Service</h2>
        <div style={{display:"flex", justifyContent:"center" }}>
        <Card style={{width:"30%"}}>
          <Card.Img src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041849.jpg?w=996&t=st=1698414165~exp=1698414765~hmac=84678c61043411fbd272d30c4c499397ae1b18923de1aa25da16322d5b66943b"></Card.Img>
          <Card.Text>Service Name</Card.Text>
          <Card.Text>discription</Card.Text>
        </Card>
        </div>
      </div>
      <div>
        <h2 style={{textAlign:"center"}}>Products</h2>
        <div style={{display:"flex", justifyContent:"center" }}>
        <Card style={{width:"30%"}}>
          <Card.Img src="https://img.freepik.com/free-vector/illuminated-neon-lights-stage-realistic-vector_1441-3734.jpg?w=900&t=st=1698414224~exp=1698414824~hmac=b39fdc6f23fe66005ac28c456fb76240d72c225bfba291293798f148a2d867c7"></Card.Img>
          <Card.Text>Product Name</Card.Text>
          <Card.Text>Price: 1000k</Card.Text>
        </Card>
        </div>
      </div>
      <div>
        <h2 style={{textAlign:"center"}}>Testomonial</h2>
        <div style={{display:"flex", justifyContent:"center" }}>
        <Card style={{width:"30%"}}>
          <Card.Img src="https://img.freepik.com/free-photo/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually_273609-16228.jpg?w=996&t=st=1698414423~exp=1698415023~hmac=580d28f5258c119be16ab72fb0a2e6fc2926b1237214b41b05edf7277a491d4f"></Card.Img>
          <Card.Text>Name</Card.Text>
          <Card.Text>Discription</Card.Text>
        </Card>
        </div>
      </div>
      <div>
        <h2 style={{textAlign:"center"}}>Make An Appoinment</h2>
        <form 
        style={{display:"flex", flexDirection:"column", alignItems:"center"}}
        >
            <div style={{padding:"1%"}}>
            <lable>Date</lable><br/>
            <input type="text" placeholder="Date-Month-Year"></input>
            </div>
            <div style={{padding:"1%"}}>
            <lable>Time</lable><br/>
            <input type="text" placeholder="your Email Address"></input>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
      <div>
        <h2 style={{textAlign:"center"}}>Enquiries</h2>
        <form 
        style={{display:"flex", flexDirection:"column", alignItems:"center"}}
        >
            <div style={{padding:"1%"}}>
            <lable>Name</lable><br/>
            <input type="text" placeholder="your Name"></input>
            </div>
            <div style={{padding:"1%"}}>
            <lable>Email</lable><br/>
            <input type="text" placeholder="your Email Address"></input>
            </div>
            <div style={{padding:"1%"}}>
            <lable>Contact Number</lable><br/>
            <input type="number" placeholder="your Contact Number"></input>
            </div>
            <div style={{padding:"1%"}}>
            <lable>Message</lable><br/>
            <textarea type="text" placeholder="Type Your Message"></textarea>
            </div>
        </form>
      </div>
    </div>
    </Container>
  );
}
