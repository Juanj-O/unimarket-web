import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import { Suspense } from "react";
import { lazyMinLoadTime } from "../components/loader/LazyLoad";

const SLEEP = 1;
const LoginPage = lazyMinLoadTime(
  () => import("../pages/login/login.page"),
  SLEEP
);

const DashboardPage = lazyMinLoadTime(
  () => import("../pages/dashboard/dashboard.page"),
  SLEEP
);

const MainRouter = () => {
  return (
    <Suspense>
      <BrowserRouter>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Navigate replace to="market" />} />
          <Route path="login" element={<LoginPage />} />
          <Route element={<AuthGuard />}>
            <Route path="market" element={<DashboardPage />} />
          </Route>
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </Suspense>
  );
};

export default MainRouter;
