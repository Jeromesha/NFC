import React from "react";
import { Col, Row } from "react-bootstrap";
import '../../Components/nfc.css';
import cardF1 from '../../Assert/Background/card1Front.png';
import cardB1 from '../../Assert/Background/card1Back.png';
import cardB2 from '../../Assert/Background/card2Back.png';
import cardF2 from '../../Assert/Background/card2Front.png';

export default function BackGround() {
  return (
    <div style={{padding:"2%"}}>
      <Row>
        <Col>
        <div class="flip_card">
            <div class="flip_card_inner">
              <div class="flip_card_front">
                <img
                src={cardF1}
                alt="Avatar"
                style={{width:"100%", height:"100%"}}
                />
              </div>
              <div class="flip_card_back">
                <img
                src={cardB1}
                alt="Avatar"
                style={{width:"100%", height:"100%"}}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col>
        <div class="flip_card">
            <div class="flip_card_inner">
              <div class="flip_card_front">
                <img
                src={cardB2}
                alt="Avatar"
                style={{width:"100%", height:"100%"}}
                />
              </div>
              <div class="flip_card_back">
                <img
                src={cardF2}
                alt="Avatar"
                style={{width:"100%", height:"100%"}}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
