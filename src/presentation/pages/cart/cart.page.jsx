import Layout from '../../components/layout/Layout'
import ProductCart from './components/ProductCart/ProductCart'
import './scss/_cart.scss'
const Cart = () => {
  return (
    <Layout>
      <div className="container-cart">
        <div className="container-left">
          <h1>Mi Pedido</h1>
          <div className="container-products">
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div className="container-rigth">
          <div className="container-card">
            <h2>Unimarket</h2>
            <div className="item">
              <p>#Productos :</p>
              <p>9</p>
            </div>
            <div className="item">
              <p>Total : :</p>
              <p>$9.000.000</p>
            </div>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
