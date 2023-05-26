import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Header from "./components/header/Header";
// Style
import "./scss/_layout.scss";
import CategoriesPage from "./components/categories/categories.page";

const Layout = ({ children, loader, classStyle = "" }) => {
  return (
    <>
      <Header />
      <CategoriesPage />
      <div className="layoutPages">
        <div className={"contentPage"}>
          <main className={classStyle}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
