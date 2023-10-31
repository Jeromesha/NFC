import React from "react";
import { Checkbox, Select, Button, Form } from "antd";
import { Row, Col } from "react-bootstrap";
import "../../../Components/nfc.css";

const { Option } = Select;

export default function Appointments() {
  const Value = {
    Time: [
      "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM",
      "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM",
      "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
    ],
  };

  return (
    <div style={{ padding: "3%" }}>
    <Form>
      <Row gutter={[16, 16]}>
        <Col lg={4}>
          <Checkbox />
          <label className="businessHrs_dash_vp_label">Monday</label>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={4}>
          <Checkbox />
          <label className="businessHrs_dash_vp_label">TuesDay</label>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={4}>
          <Checkbox />
          <label className="businessHrs_dash_vp_label">WednesDay</label>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={4}>
          <Checkbox />
          <label className="businessHrs_dash_vp_label">ThrusDay</label>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={4}>
          <Checkbox />
          <label className="businessHrs_dash_vp_label">FriDay</label>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={4}>
          <Checkbox />
          <label className="businessHrs_dash_vp_label">Saturday</label>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={4}>
          <Checkbox />
          <label className="businessHrs_dash_vp_label">Sunday</label>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
        <Col lg={4}>
          <Select className="businessHrs_dash_vp_Select" mode="single">
            {Value.Time.map((hour, index) => (
              <Option key={index} value={hour}>
                {hour}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row style={{ paddingTop:"5%", display:"flex", justifyContent:"end"}}>
        <Col sm={6} lg={2}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Col>
        <Col sm={6} lg={2}>
        <Button type="default">Discard</Button>
        </Col>
      </Row>
    </Form>
  </div>
  );
}
