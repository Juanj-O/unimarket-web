import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import { Suspense } from "react";

const SLEEP = 1;
// const LoginPage = lazyMinLoadTime(() => import("Route login page"), SLEEP);

const MainRouter = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="market" />} />
          <Route path="login" element={<div>login</div>} />
          <Route element={<AuthGuard />}>
            <Route path="market" element={<div>MArket</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MainRouter;
