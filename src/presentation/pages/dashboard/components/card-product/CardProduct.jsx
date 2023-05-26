import React from "react";
import "./scss/_card-product.scss";

const CardProduct = () => {
  return (
    <div className="card-product">
      <figure>
        <img
          src="https://www.ecoshop.surf/media/catalog/product/cache/bf12b8d883e264b699074648a8094f3e/k/r/kro_nik_172_rn_rezultat.jpg"
          alt="plato"
          title="plato"
        />
        <figcaption>
          <p className="p-name">Bandeja papas</p>
          <p className="description">Descripcion</p>
          <p className="price">$450000</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardProduct;
