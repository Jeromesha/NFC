import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function BusinessHours() {
  const Value = {
    Time: [
      "12 AM",
      "1 AM",
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
      "1 PM",
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

  // State to store selected values for each day
  const [selectedHours, setSelectedHours] = useState({});

  // Handle checkbox change for a specific day
  const handleCheckboxChange = (day) => (e) => {
    setSelectedHours({
      ...selectedHours,
      [day]: e.target.checked ? [...Value.Time] : [],
    });
  };

  // Handle select change for a specific day
  const handleSelectChange = (day) => (e) => {
    setSelectedHours({
      ...selectedHours,
      [day]: Array.from(e.target.selectedOptions, (option) => option.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Hours:", selectedHours);
  };

  return (
    <div style={{ padding: "5%" }}>
      <form onSubmit={handleSubmit}>
        <Row>
          {Object.keys(Value).map((day, index) => (
            <div key={index}>
              <Col lg={2}>
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange(day)}
                ></input>{" "}
                &nbsp;
                <label style={{ padding: "2%" }}>{day}</label>
              </Col>
              <Col lg={1}>
                <select
                  multiple
                  onChange={handleSelectChange(day)}
                  value={selectedHours[day] || []}
                >
                  {Value.Time.map((hour, index) => (
                    <option key={index} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </Col>
            </div>
          ))}
        </Row>
        <div style={{ marginLeft: "4%" }}>
          <button type="submit" className="vcard_detial_btton_submit">
            Submit
          </button>
          <button type="reset" className="vcard_detial_btton_discard">
            Discard
          </button>
        </div>
      </form>
    </div>
  );
}
