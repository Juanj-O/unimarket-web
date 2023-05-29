import { Modal } from "antd";
import Layout from "../../components/layout/Layout";
import DataTable from "../../components/table/DataTable";
import "./scss/_moderator.scss";
import { CheckOutlined, CloseOutlined, EyeFilled } from "@ant-design/icons";
import ProductDetail from "../../components/product/ProductDetail";
import { useState } from "react";
const Moderator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "PC",
      price: 200000,
      units: 5,
      creationDate: "12/02/2023",
      dateLimit: "12/12/2023",
      state: "activo",
    },
    {
      key: "2",
      name: "PC",
      price: 200000,
      units: 5,
      creationDate: "12/02/2023",
      dateLimit: "12/12/2023",
      state: "activo",
    },
  ];
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Unidades",
      dataIndex: "units",
      key: "units",
    },
    {
      title: "Fecha creacion",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "Fecha limite",
      dataIndex: "dateLimit",
      key: "dateLimit",
    },
    {
      title: "Estado",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <div className="icons">
            <EyeFilled onClick={showModal} />
            <CheckOutlined />
            <CloseOutlined />
          </div>
        </>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout classStyle={"dashboardPage"}>
      <div>moderator.page</div>
      <DataTable columns={columns} dataSource={dataSource} />
      <Modal
        footer={null}
        title="Detalle Producto"
        open={isModalOpen}
        onCancel={handleCancel}
        width={600}
      >
        <ProductDetail />
      </Modal>
    </Layout>
  );
};

export default Moderator;
