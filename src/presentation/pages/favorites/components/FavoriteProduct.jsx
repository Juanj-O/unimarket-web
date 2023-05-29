import React from "react";
import "./scss/_favorite_product.scss";
import { Button } from "antd";

const FavoriteProduct = () => {
  return (
    <div className="container-favoriteProduct">
      <div className="container-image">
        <img
          src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2018/05/Como-armar-una-PC-Gamer-en-2018.jpg?fit=1280%2C768&ssl=1"
          alt=""
        />
      </div>
      <div className="container-info">
        <h2>Computador Gamer</h2>
        <p>Descripción</p>
        <h3>
          Precio : <p> $3.000.000</p>
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
    </div>
  );
};

export default FavoriteProduct;
