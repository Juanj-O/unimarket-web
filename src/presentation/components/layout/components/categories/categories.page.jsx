import React from "react";
import "./scss/_categories.scss";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const handleCategories = (event) => {
    navigate(`/market/${event.target.getAttribute("value")}`);
  };
  return (
    <div className="categories-container">
      <ul onClick={handleCategories}>
        <li value="CELULARES">Celulares</li>
        <li value="COMPUTADORES">Computadores</li>
        <li value="ELECTRODOMESTICOS">Electrodomesticos</li>
        <li value="TELEVISORES">Televisores</li>
        <li value="VIDEOJUEGOS">Videojuegos</li>
        <li value="DEPORTE">Deporte</li>
        <li value="ACCESORIOS">Accesorios</li>
      </ul>
    </div>
  );
};

export default CategoriesPage;
