// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { BsFacebook, BsGlobe2, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { TbLetterX } from "react-icons/tb";
// import { FiMail } from "react-icons/fi";
import { BiLogoTumblr } from "react-icons/bi";
import React from 'react';
import { Row, Col, Input, Button, Form } from 'antd';
import {
  GlobalOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
  MailOutlined,
  WhatsAppOutlined,
  CloseCircleFilled,
} from '@ant-design/icons';

export default function SocialMediaLinks() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item name="website" label={<GlobalOutlined style={{ fontSize: '30px' }} />}>
            <Input placeholder="WebSite URL" />
          </Form.Item>

          <Form.Item name="linkedin" label={<LinkedinOutlined style={{ fontSize: '30px' }} />}>
            <Input placeholder="LinkedIn URL" />
          </Form.Item>

          <Form.Item name="instagram" label={<InstagramOutlined style={{ fontSize: '30px' }} />}>
            <Input placeholder="Instagram URL" />
          </Form.Item>

          <Form.Item name="facebook" label={<FacebookOutlined style={{ fontSize: '30px' }} />}>
            <Input placeholder="Facebook URL" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form.Item name="x" label={<TbLetterX style={{ fontSize: '30px' }} />}>
            <Input placeholder="X URL" />
          </Form.Item>

          <Form.Item name="email" label={<MailOutlined style={{ fontSize: '30px' }} />}>
            <Input placeholder="E-mail URL" />
          </Form.Item>

          <Form.Item name="tumblr" label={<BiLogoTumblr style={{ fontSize: '30px' }} />}>
            <Input placeholder="Tumblr URL" />
          </Form.Item>

          <Form.Item name="whatsapp" label={<WhatsAppOutlined style={{ fontSize: '30px' }} />}>
            <Input placeholder="WhatsApp URL" />
          </Form.Item>
        </Col>
      </Row>

      <Row justify="end" style={{ marginTop: '20px' }}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button style={{ marginLeft: '8px' }} onClick={() => form.resetFields()}>
            Discard
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}

