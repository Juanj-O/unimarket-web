import React, { useState } from "react";
import "./scss/_favorite_product.scss";
import { Button } from "antd";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

const FavoriteProduct = () => {
  const token = localStorage.getItem("token");
  const decodeToken = jwtDecode(token);

  const [favoritos, setFavoritos] = useState([]);
  const getFavorites = async () => {
    axios
      .get(
        `http://localhost:8081/api/productos/listar-productos-favoritos/${decodeToken.roles[1]}`
      )
      .then((res) => {
        setFavoritos(res.data);
      });
  };

  useEffect(() => {
    if (token) getFavorites();
  }, []);

  return (
    <div className="container-favoriteProduct">
      {favoritos.map((product) => (
        <>
          <div className="container-image">
            <img src={product.imagenes.imagen} alt="" />
          </div>
          <div className="container-info">
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <h3>
              Precio : <p> product.precio</p>
            </h3>
            <div className="container-buttons">
              <Button
                type="primary"
                htmlType="button"
                className="login-form-button"
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default FavoriteProduct;
