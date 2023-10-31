import { Button, Input, Select, Switch } from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function Setting() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [check, setCheck] = useState(false);

  const handleSwitchChecked = (checked) => {
    setSwitchChecked(checked);
  };
  const handelCheck = (checks) => {
    setCheck(checks);
  };

  const { Option } = Select;

  const currencies = [
    "$ - United States Dollar",
    "€ - Euro",
    "£ - Pound Sterling",
    "¥ - Japanese Yen",
    "₣ - Swiss Franc",
    "₹ - Indian Rupee",
    "د.ك - Kuwaiti Dinar",
    "د.إ - United Arab Emirates Dirham",
    "﷼‎ - Saudi Riyal",
    "₻ - German Mark",
    "₽ - Russian Ruble",
    "₾ - Georgian Lari",
    "₺ - Turkish Lira",
    "₼ - Azerbaijani Manat",
    "₸ - Kazakhstani Tenge",
    "₴ - Ukrainian Hryvnia",
    "₷ - Spesmilo",
    "฿ - Thai Baht",
    "원 - South Korean Won",
    "₫ - Vietnamese Dong",
    "₮ - Mongolian Tugrik",
    "₯ - Greek Drachma",
    "₱ - Philippine Peso",
    "₳ - Australian Dollar",
    "₵ - Ghanaian Cedi",
    "₲ - Paraguayan Guarani",
    "₪ - Israeli New Sheqel",
    "₰ - Peruvian Nuevo Sol",
  ];
  
  const [selectedInputCurrency, setSelectedInputCurrency] = useState("");

  const handleInputCurrencyChange = (value) => {
    setSelectedInputCurrency(value);
  };

  const onChange =(checked) => {
    console.log(`switch to ${checked}`);
  }
  return (
    <div style={{padding:"4%"}}>
      <h5>Stripe</h5>
      <Switch
        defaultChecked={setSwitchChecked}
        onChange={handleSwitchChecked}
      />
      <div>
        {switchChecked && (
          <Row style={{padding:"3%"}}>
            <Col>
              <label>Stripe Key:</label>
              <Input placeholder="strip key"></Input>
            </Col>
            <Col>
              <label>Stripe Secret:</label>
              <Input placeholder="strip Secret"></Input>
            </Col>
          </Row>
        )}
      </div>
      <div>
        <h5>PayPal</h5>
        <Switch defaultChecked={setCheck} onChange={handelCheck} />
        {check && (
          <div style={{padding:"3%"}}>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <label>Paypal Client Id:</label>
                <Input placeholder="Paypal Client Id"></Input>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label>Paypal Secret:</label>
                <Input placeholder="Paypal Secret"></Input>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <label>Paypal Mode:</label>
                <Input placeholder="Paypal Mode"></Input>
              </Col>
            </Row>
          </div>
        )}
      </div>
      <div style={{padding:"3%"}}>
        <div>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <label>Paypal Payout Email</label>
              <Input placeholder="Paypal Client Id"></Input>
            </Col>
            <Col sm={12} md={6} lg={6}>
                <lable>Select currency</lable>
              <Select
                style={{ width: "100%" }}
                placeholder="Select input currency"
                onChange={handleInputCurrencyChange}
                value={selectedInputCurrency}
              >
                {currencies.map((currency, index) => (
                  <Option key={index} value={currency.split(" - ")[0]}>
                    {currency}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </div>
      </div>
      <Row style={{padding:"3%"}}>
        <Col>
        <h6>Time Formate</h6>
        <Button>12 hours</Button>
        <Button>24 hours</Button>
        </Col>
        <Col>
        <h6>Enable Affiliation:</h6>
        <Switch defaultChecked onChange={onchange}/>
        </Col>
        <Col>
        <h6>Enable Contact:</h6>
        <Switch defaultChecked onChange={onchange}/>
        </Col>
        <Col>
        <h6>Hide vCard Sticky Bar:</h6>
        <Switch defaultChecked onChange={onchange}/>
        </Col>

      </Row>
    </div>
  );
}
