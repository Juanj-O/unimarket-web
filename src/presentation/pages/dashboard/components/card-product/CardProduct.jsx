import React from "react";
import { useNavigate } from "react-router-dom";
import "./scss/_card-product.scss";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card-product"
      onClick={() => navigate(`/detail-product/${product.codigo}`)}
    >
      <figure>
        <img src={product.imagenes.imagen} alt="plato" title="plato" />
        <figcaption>
          <p className="p-name">{product.nombre}</p>
          <p className="description">{product.descripcion}</p>
          <p className="price">${product.precio}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardProduct;
