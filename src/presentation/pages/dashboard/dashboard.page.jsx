import React from "react";
import Layout from "../../components/layout/Layout";
import CardProduct from "./components/card-product/CardProduct";
import "./scss/_dashboard.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const DashboardPage = () => {
  const location = useLocation();
  const { categories } = useParams();
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    await axios
      .get(
        `http://localhost:8081/api/productos/listar-productos-categoria/${categories}`
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        notification.error({
          message: "No se encuentran productos de esta categoria",
        });
      });
  };

  const getProducts = async () => {
    await axios
      .get(`http://localhost:8081/api/productos/listar-productos-estado/${1}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        notification.error({
          message: "No se encuentran productos",
        });
      });
  };

  useEffect(() => {
    if (categories !== undefined) {
      getCategories();
    }
  }, [categories]);

  useEffect(() => {
    if (location.pathname == "/market") {
      getProducts();
    }
  }, [location]);

  return (
    <Layout classStyle={"dashboardPage"}>
      <div className="dashboard">
        <div className="container-products">
          {products.map((product) => (
            <CardProduct key={product.codigo} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
