import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { lazyMinLoadTime } from '../components/loader/LazyLoad'
import AuthGuard from '../guards/AuthGuard'
import Cart from '../pages/cart/cart.page'
import DetailProduct from '../pages/detailProduct/detailProduct.page'
import { Suspense } from 'react'

const SLEEP = 1
const LoginPage = lazyMinLoadTime(() => import('../pages/login/login.page'), SLEEP)
const Register = lazyMinLoadTime(() => import('../pages/register/register.page'), SLEEP)
const Moderator = lazyMinLoadTime(() => import('../pages/moderator/moderator.page'), SLEEP)

const DashboardPage = lazyMinLoadTime(() => import('../pages/dashboard/dashboard.page'), SLEEP)

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
          <Route element={<AuthGuard />}>
            <Route path="market" element={<DashboardPage />} />
          </Route>
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </Suspense>
  )
}

export default MainRouter
