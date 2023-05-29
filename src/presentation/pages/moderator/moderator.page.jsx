import { Modal } from "antd";
import Layout from "../../components/layout/Layout";
import DataTable from "../../components/table/DataTable";
import "./scss/_moderator.scss";
import { CheckOutlined, CloseOutlined, ExclamationCircleFilled, EyeFilled } from "@ant-design/icons";
import ProductDetail from "../../components/product/ProductDetail";
import { useState } from "react";
import { useEffect } from 'react';
const { confirm } = Modal;

import axios from 'axios';
const Moderator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataProct, setDataProduct] = useState();
  const [product, setProduct] = useState();
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
    },
    {
      title: "Unidades",
      dataIndex: "unidades",
      key: "unidades",
    },
    {
      title: "Fecha creacion",
      dataIndex: "fechaCreacion",
      key: "fechaCreacion",
    },
    {
      title: "Fecha limite",
      dataIndex: "fechaLimite",
      key: "fechaLimite",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
    },
    {
      title: "Action",
      key: "action",
      render: (value) => (
				
        <>
          <div className="icons">
            <EyeFilled onClick={()=> showModal(value)} />
            <CheckOutlined onClick={() => showConfirm(value)} />
            <CloseOutlined onClick={() => showDesable(value)}/>
          </div>
        </>
      ),
    },
  ];
	const showConfirm = (value) => {
		confirm({
			title: 'Desea Activar el producto?',
			icon: <ExclamationCircleFilled />,
			content: value.nombre,
			onOk() {
				console.log('OK');
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};
	const showDesable = (value) => {
		confirm({
			title: 'Desea desactivar el producto?',
			icon: <ExclamationCircleFilled />,
			content: value.nombre,
			onOk() {
				console.log('OK');
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};
  const showModal = (value) => {
    setIsModalOpen(true);
		setProduct(value)
  };

  const handleCancel = (product) => {
    setIsModalOpen(false);
		setProduct(product)
  };

	useEffect(() => {
		axios.get('http://localhost:8081/api/productos/listar-productos-estado/true')
		.then(function (response) {
			setDataProduct(response.data)
		})
		.catch(function (error) {
			console.log(error);
		});
	}, [])
	

  return (
    <Layout classStyle={"dashboardPage"}>
      <DataTable columns={columns} dataSource={dataProct} />
      <Modal
        footer={null}
        title="Detalle Producto"
        open={isModalOpen}
        onCancel={handleCancel}
        width={600}
      >
        <ProductDetail product={product} />
      </Modal>
    </Layout>
  );
};

export default Moderator;
