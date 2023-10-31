import React, { useState } from "react";
import { Button, Modal, Table, Form, Input, Upload, message, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Row } from "react-bootstrap";

const { TextArea } = Input;

export default function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Handle your form submission here
        console.log(values);
        setIsModalOpen(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "icon",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "PRODUCT URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: () => (
        <a onClick={showModal} style={{ cursor: "pointer" }}>
          Edit
        </a>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      price: 250,
      icon: "New York No. 1 Lake Park",
      url: "url here",
    },
  ];

  const onFinishFailed = (errorInfo) => {
    console.log("Validation failed:", errorInfo);
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage;
    },
    maxCount: 1,
  };

  return (
    <div style={{ padding: "2%" }}>
      <Button type="primary" onClick={showModal}>
        Service
      </Button>
      <Modal
        title="Service Detail"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="discard" onClick={handleCancel}>
            Discard
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="serviceForm"
          initialValues={{ remember: true }}
          onFinish={handleOk}
          onFinishFailed={onFinishFailed}
        >
          <div>
          <Form.Item
          style={{margin:"0px"}}
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter the name!" },
            ]}
          >
          </Form.Item><Input />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            label="Service URL"
            name="url"
            rules={[
              { required: true, message: "Please enter the service URL!" },
            ]}
          >
          </Form.Item> <Input />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please enter the description!" },
            ]}
          >
            
          </Form.Item><TextArea rows={4} />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            label="Service Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
            rules={[
              {
                required: true,
                message: "Please upload the service image!",
              },
            ]}
          >
          </Form.Item>
          <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </div>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} style={{ marginTop: "4%" }} />
    </div>
  );
}
