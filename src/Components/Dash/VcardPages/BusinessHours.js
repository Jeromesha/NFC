import React from "react";
import { Col, Row } from "react-bootstrap";

export default function BusinessHours() {
  const Value = {
    Time: [
      "12 AM",
      "2 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "2 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
    ],
  };

  return (
    <div style={{padding:"3%"}}>
        <form>
      <Row>
        <Col lg={2}>
        <input type="checkbox" ></input> &nbsp;
        <label style={{padding:"3%"}}>Monday</label>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
        <input type="checkbox" ></input> &nbsp;
        <label style={{padding:"3%"}}>Tuesday</label>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
        <input type="checkbox" ></input> &nbsp;
        <label style={{padding:"3%"}}>Wednesday</label>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
        <input type="checkbox" ></input> &nbsp;
        <label style={{padding:"3%"}}>Thrusday</label>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
        <input type="checkbox" ></input> &nbsp;
        <label style={{padding:"3%"}}>Friday</label>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
        <input type="checkbox" ></input> &nbsp;
        <label style={{padding:"3%"}}>Saturday</label>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
      </Row>
       <Row>
        <Col lg={2}>
        <input type="checkbox" ></input> &nbsp;
        <label style={{padding:"3%"}}>Sunday</label>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
        <Col lg={2}>
        <select>
          {Value.Time.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        </Col>
      </Row>
      <div style={{ marginLeft: "4%" }}>
            <button type="submit" className="vcard_detial_btton_submit">
              Submit
            </button>
            <button type="submit" className="vcard_detial_btton_discard">
              Discard
            </button>
          </div>
          </form>
    </div>
  );
}
