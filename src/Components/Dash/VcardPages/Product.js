import { Button, Modal, Space, Table, Tag } from "antd";
import React, { useState } from "react";

export default function Product() {
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
          title: "Discription",
          key: "discription",
          dataIndex:"discription",
        },
        {
          title: "Prodct Image",
          key: "productimage",
          dataIndex:"productimage",
        },
      ];
      const data = [
        {
          key: "1",
          name: "John Brown",
          currency: 3232,
          url: "New York No. 1 Lake Park",
          discription: "product dicription",
          productimage:"image url"
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
    <div>
    <Button type="primary" onClick={showModal}>
      Add Product
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
          <lable>price</lable>
          <input type="number"></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", padding:"4%"}}>
          <lable>Currency</lable>
          <input type="text"></input>
        </div>
        <div style={{display:"flex", flexDirection:"column", padding:"4%"}}>
          <lable>Product Url</lable>
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
    <Table columns={columns} dataSource={data} />
  </div>
  )
}
