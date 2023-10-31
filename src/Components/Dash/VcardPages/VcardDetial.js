import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { Row, Col } from "react-bootstrap";
import "../../../Components/nfc.css";

export default function VcardDetail() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [formData, setFormData] = useState({
    url: "",
    vCardName: "",
    occupation: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alternateEmail: "",
    location: "",
    locationURL: "",
    dateOfBirth: "",
    company: "",
    jobTitle: "",
    defaultLanguage: "",
    image: null,
    images: null,
  });

  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        setFormData({ ...formData, image: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChanges = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImages(event.target.result);
        setFormData({ ...formData, images: file });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h5>VCard Form</h5>
      <Form form={form} onFinish={handleSubmit} initialValues={formData}>
        <div>
          <Form.Item
          style={{margin:"0px"}}
            name="url"
            label="Url Alias"
            rules={[
              {
                required: true,
                message: "Please enter Url Alias!",
              },
            ]}
          ></Form.Item>
          <Input />
        </div>

        <Row gutter={16}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <div>
              <Form.Item
              style={{margin:"0px"}}
                name="vCardName"
                label="VCard Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter VCard Name!",
                  },
                ]}
              ></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item
              style={{margin:"0px"}}
                name="occupation"
                label="Occupation"
                rules={[
                  {
                    required: true,
                    message: "Please enter Occupation!",
                  },
                ]}
              ></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item
              style={{margin:"0px"}}
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "Please enter Description!",
                  },
                ]}
              >
              </Form.Item> <Input.TextArea />
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <div style={{paddingTop:"5%"}}>
              <Form.Item name="image" label="Profile">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <div>
                    <p>Preview</p>
                    <div>
                      <img
                        src={selectedImage}
                        alt="Selected"
                        style={{ maxWidth: "20%", maxHeight: "20%" }}
                      />
                    </div>
                  </div>
                )}
              </Form.Item>
            </div>
            <div style={{paddingTop:"5%"}}>
              <Form.Item name="images" label="Cover">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChanges}
                />
                {selectedImages && (
                  <div>
                    <p>Preview</p>
                    <div>
                      <img
                        src={selectedImages}
                        alt="Selected"
                        style={{ maxWidth: "20%", maxHeight: "20%" }}
                      />
                    </div>
                  </div>
                )}
              </Form.Item>
            </div>
          </Col>
        </Row>
        <h5 style={{paddingTop:"3%", paddingBottom:"3%"}}>VCard Details</h5>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <div>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter First Name!",
                  },
                ]}
              ></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter Last Name!",
                  },
                ]}
              ></Form.Item>{" "}
              <Input />
            </div>
            <div>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid Email!",
                  },
                ]}
              ></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item name="phone" label="Phone"></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item
                name="alternateEmail"
                label="Alternate Email"
              ></Form.Item>
              <Input />
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <div>
              <Form.Item name="location" label="Location"></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item name="locationURL" label="Location URL"></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item name="dateOfBirth" label="Date of Birth"></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item name="company" label="Company"></Form.Item>
              <Input />
            </div>
            <div>
              <Form.Item
                name="defaultLanguage"
                label="Default Language"
              ></Form.Item>
              <Input />
            </div>
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
