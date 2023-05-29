import React from "react";
import Layout from "../../components/layout/Layout";
import FavoriteProduct from "./components/FavoriteProduct";
import "./scss/_favorites.scss";

const FavoritesPage = () => {
  return (
    <Layout>
      <div className="container-cart">
        <div className="content-favorites">
          <h1>Mis favoritos</h1>
          <div className="container-products">
            <FavoriteProduct />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
