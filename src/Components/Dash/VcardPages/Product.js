import React, { useState } from "react";
import { Button, Modal, Table, Form, Input, InputNumber, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function Product() {
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
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Product Url",
      key: "url",
      dataIndex: "url",
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Product Image",
      key: "productimage",
      dataIndex: "productimage",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      currency: 3232,
      url: "New York No. 1 Lake Park",
      description: "product description",
      productimage: "image url",
    },
  ];

  return (
    <div style={{padding:"2%"}}>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal
        title="Product"
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
        style={{padding:"5%"}}
          form={form}
          name="productForm"
          onFinish={handleOk}
          initialValues={{ name: "", price: null, currency: "", url: "", description: "" }}
        >
          <div>
          <Form.Item
            style={{margin:"0px"}}
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name!" }]}
          >
          </Form.Item><Input />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please enter the price!" },
              { type: "number", min: 0, message: "Price must be a positive number" },
            ]}
          >
          </Form.Item> <InputNumber style={{ width: "100%" }} />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            name="currency"
            label="Currency"
            rules={[{ required: true, message: "Please enter the currency!" }]}
          >
          </Form.Item><Input />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            name="url"
            label="Product URL"
            rules={[{ required: true, message: "Please enter the product URL!" }]}
          >
          </Form.Item> <Input />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter the description!" }]}
          >
          </Form.Item><Input.TextArea rows={4} />
          </div>
          <div>
          <Form.Item
          style={{margin:"0px"}}
            name="productimage"
            label="Product Image"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
            rules={[
              {
                required: true,
                message: "Please upload the product image!",
              },
            ]}
          >
            </Form.Item>
            <Upload
              beforeUpload={(file) => {
                const isImage = file.type.startsWith("image/");
                if (!isImage) {
                  message.error("You can only upload image files!");
                }
                return isImage;
              }}
              maxCount={1}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
            </div>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} style={{padding:"4%"}}/>
    </div>
  );
}
