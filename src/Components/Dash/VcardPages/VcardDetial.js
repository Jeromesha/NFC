import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { Row, Col } from "react-bootstrap";
import "../../../Components/nfc.css";
import Api from "../../../Api";

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
        // Send a POST request to your API with the form data
        Api.post('http://localhost:8080/vcard/createvcarddetail', values)
          .then((response) => {
            console.log("Data sent successfully:", response);
          })
          .catch((error) => {
            console.error("Error sending data:", error);
          });
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
      <Form layout="vertical" form={form} onFinish={handleSubmit} initialValues={formData}>
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
          ><Input /></Form.Item>
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
              ><Input /></Form.Item>
              
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
              ><Input /></Form.Item>
              
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
                <Input.TextArea />
              </Form.Item> 
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
              ><Input /></Form.Item>
              
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
              ><Input /></Form.Item>{" "}
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
              ><Input /></Form.Item>
            </div>
            <div>
              <Form.Item name="phone" label="Phone"><Input /></Form.Item>
            </div>
            <div>
              <Form.Item
                name="alternateEmail"
                label="Alternate Email"
              > <Input /></Form.Item>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6} lg={6}>
            <div>
              <Form.Item name="location" label="Location"><Input /></Form.Item>
            </div>
            <div>
              <Form.Item name="locationURL" label="Location URL"><Input /></Form.Item>
            </div>
            <div>
              <Form.Item name="dateOfBirth" label="Date of Birth"><Input /></Form.Item>
            </div>
            <div>
              <Form.Item name="company" label="Company"><Input /></Form.Item>
            </div>
            <div>
              <Form.Item
                name="defaultLanguage"
                label="Default Language"
              > <Input /></Form.Item>
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
