import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "../Components/nfc.css";
import { Row, Col, Card, NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {
  BsCheckCircle,
  BsGlobeCentralSouthAsia,
  BsPhone,
  BsTelephoneInbound,
} from "react-icons/bs";
import { BiSolidIdCard } from "react-icons/bi";
import { PiHandshakeLight } from "react-icons/pi";
import { LiaAddressBookSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import Lottie from "react-lottie";
import animationData from "../Assert/Lotties/animation_lnpuj58m.json";
import animationDatas from "../Assert/Lotties/CardGif2.json";
import "../Components/nfc.css";
import FeatureImg1 from "../Assert/FeatureImg1.jpg";
import FeatureImg2 from "../Assert/FeatureImg2.jpg";
import FeatureImg3 from "../Assert/FeatureImg3.jpg";
import FeatureImg4 from "../Assert/FeatureImg4.jpg";
import FeatureImg5 from "../Assert/FeatureImg5.jpg";
import FeatureImg6 from "../Assert/FeatureImg6.jpg";
import BCard from "../Assert/handing-business-card.jpg";
import { useNavigate } from "react-router-dom";

export default function NfcHome() {
  const defaulOption = {
    loop: true,
    autoPlay: true,
    animationData: animationData,
    renderSetting: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaulOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationDatas,
    renderSetting: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/form');
  };

  return (
    <Container fluid>
      <Navbar expand="lg" className="navigationBar">
        <Container className="navcontainer">
          <div>
            <Navbar.Brand href="#home" className="navbarLogo">
              React-Bootstrap
            </Navbar.Brand>
          </div>
          <Row>
            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="navContext" href="#section">Home</NavLink>
                  <NavLink className="navContext" href="#section1">Featurs</NavLink>
                  <NavLink className="navContext" href="#section2">Interface</NavLink>
                  <NavLink className="navContext" href="#section3">Pricing</NavLink>
                  <NavLink className="navContext" href="#section4">Contact</NavLink>
                  {/* <NavLink className="navContext" href="#section5">Profile</NavLin  k> */}
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <div id="section">
        <Row style={{ margin: "3%" }}>
          <Col sm={12} md={4} lg={4}>
            <Lottie options={defaulOption} />
          </Col>
          <Col
            sm={12}
            md={8}
            lg={8}
            style={{ textAlign: "center", marginTop: "10%" }}
          >
            <h1 style={{ color: "grey" }}>Switch to the Next Generation</h1>
            <h1>NFC Smart Cards</h1>
            <button className="contecbotton" onClick={handleNavigation}>Get Yours</button>
            {/* <NavLink className="contecbotton" to="form">GET YOURS</NavLink> */}
          </Col>
        </Row>
        <Row style={{ padding: "2%" }}>
          <Col sm={6} mg={6} lg={3} xl={3}>
            <Row>
              <Col>
                <BiSolidIdCard size={70} style={{ color: "gray" }} className="" />
              </Col>
              <Col>
                <h2>15 K</h2>
                <p style={{ color: "gray" }}>Scube Card Users</p>
              </Col>
            </Row>
          </Col>
          <Col sm={6} mg={6} lg={3} xl={3}>
            <Row>
              <Col>
                <PiHandshakeLight size={70} style={{ color: "gray" }} />
              </Col>
              <Col>
                <h2>3000+</h2>
                <p style={{ color: "gray" }}>Businesses Using Scube</p>
              </Col>
            </Row>
          </Col>
          <Col sm={6} mg={6} lg={3} xl={3}>
            <Row>
              <Col>
                <BsPhone size={70} style={{ color: "gray" }} />
              </Col>
              <Col>
                <h2>80 k</h2>
                <p style={{ color: "gray" }}>Scube App Users</p>
              </Col>
            </Row>
          </Col>
          <Col sm={6} mg={6} lg={3} xl={3}>
            <Row>
              <Col>
                <BsGlobeCentralSouthAsia size={70} style={{ color: "gray" }} />
              </Col>
              <Col>
                <h2>120+</h2>
                <p style={{ color: "gray" }}>World-wide Shipping</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "gray", padding: "2%" }} id="section1">
        <h1 style={{ textAlign: "center" }}>Feature</h1>
        <Row className="feat_cards">
          <Col
            sm={12}
            md={12}
            lg={3}
            xl={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className="card_Feature">
              <Card.Img
                variant="top"
                src={FeatureImg3}
                className="image_Feature"
              />
              <Card.Body className="content">
                <Card.Title>Share your VCards</Card.Title>
                <Card.Text>
                  Share Your Business Information with your prospects directly
                  via SMS, Email or any other ways.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={3}
            xl={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className="card_Feature">
              <Card.Img
                variant="top"
                src={FeatureImg1}
                className="image_Feature"
              />
              <Card.Body className="content">
                <Card.Title>Social Media Links</Card.Title>
                <Card.Text>
                  Your Client can follow you on social media account. You can
                  also inc areas your bussiness by sharing your social link.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={3}
            xl={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className="card_Feature">
              <Card.Img
                variant="top"
                src={FeatureImg5}
                className="image_Feature"
              />
              <Card.Body className="content">
                <Card.Title>Pricing And Plans</Card.Title>
                <Card.Text>
                  We provide various plan from which you can choose plan
                  according to your requirement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Col
            sm={12}
            md={12}
            lg={3}
            xl={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className="card_Feature">
              <Card.Img
                variant="top"
                src={FeatureImg4}
                className="image_Feature"
              />
              <Card.Body className="content">
                <Card.Title>Scan QR Code</Card.Title>
                <Card.Text>
                  By scanning Your QR Code, your client can see your details and
                  also then can share your QR Code to others.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={3}
            xl={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className="card_Feature">
              <Card.Img
                variant="top"
                src={FeatureImg2}
                className="image_Feature"
              />
              <Card.Body className="content">
                <Card.Title>Various Range of Templates</Card.Title>
                <Card.Text>
                  You Can select various templates for your VCards and share to
                  your clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={3}
            xl={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card className="card_Feature">
              <Card.Img
                variant="top"
                src={FeatureImg6}
                className="image_Feature"
              />
              <Card.Body className="content">
                <Card.Title>Click On Call</Card.Title>
                <Card.Text>
                  Your client can reach you by just tap on phone number and
                  contact you for any query.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{marginBottom:"4%"}} id="section2">
        <h1 style={{ textAlign: "center", padding: "4%" }}>
          Modern & Powerful Interface
        </h1>
        <Row>
          <Col sm={12} md={7} lg={7} style={{marginLeft:"3%", marginRight:"3%"}}>
            <div>
              <h3>Make Smart Business Card</h3>
              <p>
                Make Your Own Smart business Card with us and grow your business
                easily.
              </p>
            </div>
            <div>
              <h3>VCard - Virtual Card</h3>
              <p>
                A vCard, or Virtual Contact Card, finds versatile use as a
                digital format for storing and sharing contact information. It
                simplifies contact management by enabling easy sharing of
                details like names, phone numbers, addresses, emails, and more.
              </p>
            </div>
            <div>
              <h3>The Power of VCards</h3>
              <p>
                VCards simplifies sharing contacts, ensuring accuracy and saving
                time. Compatibility across platforms and devices is a strong
                suit, and it accommodates rich data like profile pictures.
                Changes in contact details are effortless to update, reducing
                paper waste and offering global reach.
              </p>
            </div>
            <div>
              <h3>One Tap to Share</h3>
              <p>
              All it takes is a simple tap to share your contact details and much more on NFC enabled smartphones
              </p>
            </div>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Lottie options={defaulOptions} height={400} width={400} />
          </Col>
        </Row>
      </div>
      <div
      id="section3"
      className="plan_main_div">
        <h1
        className="plan_head">
          Choose a plan that's right for you
        </h1>
        <Row
        className="plan_row">
          <Col sm={12} mg={5} lg={5} xl={5} style={{ padding: "0px" }}>
            <img src={BCard} style={{ width: "100%", height: "100%" }}></img>
          </Col>
          <Col
            sm={12}
            mg={3}
            lg={3}
            xl={3}
            className="plan_Img "
          >
            <div style={{ height: "100%", padding: "9%" }}>
              <div
              className="plan_card_head">
                <h3>Free Card</h3>
                <p> No Of Card 7</p>
                <button
                className="plan_rs_button">
                  ₹0
                </button>
              </div>
              <div style={{ marginTop: "12%" }}>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  />
                  Services
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  />
                  Testimonials
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  /> 
                  Enquiry Form
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  />
                  Social Links
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  />{" "}
                  Password Protection
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  /> Custom
                  CSS
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  /> Custom
                  Fonts
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  />{" "}
                  Appointments
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  /> Gallery
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  /> SEO
                </p>
                <p>
                  <BsCheckCircle size={20}  className="plan_crt"  /> Blog
                </p>
                <p>
                  <BsCheckCircle size={20} className="plan_crt"  />
                  Affiliation
                </p>
                <p>
                  <BsCheckCircle size={20} className="plan_crt" /> Custom
                  QR Code
                </p>
                <p>
                  <BsCheckCircle size={20} /> Hide Branding
                </p>
                <p>
                  <BsCheckCircle size={20} /> Custom JS
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div id="section4">
        <h1 className="contact_us_head">Contact Us</h1>
        <Row style={{ padding: "3%", marginTop: "2%" }}>
          <Col
            sm={12}
            mg={7}
            lg={7}
            xl={7}
            className="conta_us_left"
          >
            <h5 style={{ margin: "15px" }}>
              <CiMail size={40} style={{ color: "grey" }} /> info@trimatis.com
            </h5>
            <br />
            <h5 style={{ margin: "15px" }}>
              <BsTelephoneInbound size={32} style={{ color: "grey" }} /> +91 8867929955
            </h5>
            <br />
            <h5 style={{ margin: "15px" }}>
              <LiaAddressBookSolid size={40} style={{ color: "grey" }} />{" "}
              Bengaluru, Coimbatore, Chennai.
            </h5>
          </Col>
          <Col
            sm={12}
            mg={5}
            lg={5}
            xl={5}
            className="conta_us_form">
            <form>
              {/* <h5 style={{ textAlign: "center", padding: "1%" }}>
                submit here to contact
              </h5> */}
              <input
                type="text"
                placeholder="Name"
                style={{
                  borderRadius: "10px",
                  margin: "15px",
                  width: "18rem",
                  borderColor: "#e0e0d1",
                  padding: "1.5%",
                }}
              ></input>
              <br />
              <input
                type="text"
                placeholder="E-mail"
                style={{
                  borderRadius: "10px",
                  margin: "15px",
                  width: "18rem",
                  borderColor: "#e0e0d1",
                  padding: "1.5%",
                }}
              ></input>
              <br />
              <input
                type="text"
                placeholder="Subject"
                style={{
                  borderRadius: "10px",
                  margin: "15px",
                  width: "18rem",
                  borderColor: "#e0e0d1",
                  padding: "1.5%",
                }}
              ></input>
              <br />
              <input
                type="text"
                placeholder="Enter Your message"
                style={{
                  borderRadius: "10px",
                  margin: "15px",
                  width: "18rem",
                  borderColor: "#e0e0d1",
                  padding: "1.5%",
                }}
              ></input>{" "}
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    margin: "15px",
                    width: "48%",
                    color: "white",
                    backgroundColor: "black",
                    border: "0px",
                    padding: "2%",
                  }}
                ></input>
              </div>
            </form>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h6 style={{ textAlign: "center" }}>
          {" "}
          © 2023 Copyright by Business Cards - Trimatis.Vip{" "}
        </h6>
      </div>
    </Container>
  );
}
