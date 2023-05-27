import React from 'react'
import Layout from '../../components/layout/Layout'
import CardProduct from './components/card-product/CardProduct'
import './scss/_dashboard.scss'

const DashboardPage = () => {
  return (
    <Layout classStyle={'dashboardPage'}>
      <div className="dashboard">
        <div className="container-products">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
