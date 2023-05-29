import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazyMinLoadTime } from "../components/loader/LazyLoad";
import AuthGuard from "../guards/AuthGuard";

const SLEEP = 1;
const LoginPage = lazyMinLoadTime(
  () => import("../pages/login/login.page"),
  SLEEP
);

const DashboardPage = lazyMinLoadTime(
  () => import("../pages/dashboard/dashboard.page"),
  SLEEP
);

const DetailProduct = lazyMinLoadTime(
  () => import("../pages/detailProduct/detailProduct.page"),
  SLEEP
);

const Cart = lazyMinLoadTime(() => import("../pages/cart/cart.page"), SLEEP);

const Register = lazyMinLoadTime(
  () => import("../pages/register/register.page"),
  SLEEP
);
const Moderator = lazyMinLoadTime(
  () => import("../pages/moderator/moderator.page"),
  SLEEP
);
const PostProduct = lazyMinLoadTime(
  () => import("../pages/postProduct/post-product.page"),
  SLEEP
);

const FavoritesPage = lazyMinLoadTime(
  () => import("../pages/favorites/favorites.page"),
  SLEEP
);

const MainRouter = () => {
  return (
    <Suspense>
      <BrowserRouter>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Navigate replace to="market" />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="moderator" element={<Moderator />} />
          <Route path="post-product" element={<PostProduct />} />
          <Route element={<AuthGuard />}>
            <Route path="market" element={<DashboardPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </Suspense>
  );
};

export default MainRouter;
