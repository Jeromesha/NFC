import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFacebook, BsGlobe2, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { TbLetterX } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { BiLogoTumblr } from "react-icons/bi";

export default function SocialMediaLinks() {
  return (
    <div>
      <form>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <div style={{padding:"3%"}}>
              <BsGlobe2 size={30}/>
              <input type="text" placeholder="WebSite URL" style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
            <div style={{padding:"3%"}}>
              <BsLinkedin size={30}/>
              <input type="text" placeholder="LinkedIn URL" style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
            <div style={{padding:"3%"}}>
              <BsInstagram size={30}/>
              <input type="text" placeholder="Instagram URL"  style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
            <div style={{padding:"3%"}}>
              <BsFacebook size={30}/>
              <input type="text" placeholder="Facebook URL" style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <div style={{padding:"3%"}}>
              <TbLetterX size={30}/>
              <input type="text" placeholder="X URL" style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
            <div style={{padding:"3%"}}>
              <FiMail size={30}/>
              <input type="text" placeholder="E-mail URL" style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
            <div style={{padding:"3%"}}>
              <BiLogoTumblr size={30}/>
              <input type="text" placeholder="Tumbler URL" style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
            <div style={{padding:"3%"}}>
              <BsWhatsapp size={30}/>
              <input type="text" placeholder="Whatsapp URL" style={{marginLeft:"2%", width:"80%"}}></input>
            </div>
          </Col>
        </Row>
        <div>
            <button type="submit" className="vcard_detial_btton_submit">Submit</button>
            <button type="submit" className="vcard_detial_btton_discard">Discard</button>
        </div>
      </form>
    </div>
  );
}
