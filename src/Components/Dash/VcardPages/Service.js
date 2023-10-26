import { Button, Modal, Space, Table, Tag } from "antd";
import React, { useState } from "react";

export default function Service() {
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
      dataIndex:"action"
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      price: 250,
      icon: "New York No. 1 Lake Park",
        url: "url here"
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{padding:"4%"}}>
      <Button type="primary" onClick={showModal}>
        Service
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <div style={{display:"flex", flexDirection:"column", padding:"4%"}}>
            <lable>Name</lable>
            <input type="text"></input>
          </div>
          <div style={{display:"flex", flexDirection:"column", padding:"4%"}}>
            <lable>Service Url</lable>
            <input type="text"></input>
          </div>
          <div style={{display:"flex", flexDirection:"column", padding:"4%"}}>
            <lable>Discription</lable>
            <textarea type="text"></textarea>
          </div>
          <div style={{display:"flex", flexDirection:"column", padding:"4%"}}>
            <lable>Service Image</lable>
            <input type="File"></input>
          </div>
        </form>
      </Modal>
      <Table columns={columns} dataSource={data} style={{marginTop:"4%"}}/>
    </div>
  );
}
