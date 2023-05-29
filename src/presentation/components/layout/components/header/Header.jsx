import React from "react";
// Style
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../../scss/_header.scss";
import Search from "./components/search/Search";

const Header = () => {
  const navigate = useNavigate();

  const redirect = (path) => {
    navigate(path);
  };

  return (
    <div className="header-menu">
      <div className="header-menu__left">
        {/* <MenuDrawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} /> */}
        <img
          src="assets/unimarket-logo.png"
          alt="unimarket-home"
          onClick={() => redirect("/market")}
        />
      </div>

      <div className="header-menu__search">
        <Search />
      </div>

      <div className="header-menu__right">
        <HeartOutlined onClick={() => redirect("/favorites")} />
        <div className="options" onClick={() => redirect("/register")}>
          Registrarse
        </div>
        <div className="options" onClick={() => redirect("/login")}>
          Iniciar sesión
        </div>
        <ShoppingCartOutlined onClick={() => redirect("/cart")} />
      </div>
    </div>
  );
};

export default Header;
