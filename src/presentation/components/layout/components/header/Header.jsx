import React from "react";
// Style
import "../../scss/_header.scss";
import { useNavigate } from "react-router-dom";
import Search from "./components/search/Search";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/market");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/login");
  };
  return (
    <div className="header-menu">
      <div className="header-menu__left">
        {/* <MenuDrawer setShowDrawer={setShowDrawer} showDrawer={showDrawer} /> */}
        <img
          src="assets/unimarket-logo.png"
          alt="unimarket-home"
          onClick={submit}
        />
      </div>

      <div className="header-menu__search">
        <Search />
      </div>

      <div className="header-menu__right">
        <HeartOutlined />
        <div className="options" onClick={handleRegister}>
          Registrarse
        </div>
        <div className="options" onClick={handleLogin}>
          Iniciar sesión
        </div>
        <ShoppingCartOutlined />
      </div>
    </div>
  );
};

export default Header;
