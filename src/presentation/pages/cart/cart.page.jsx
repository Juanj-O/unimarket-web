import { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import ProductCart from './components/ProductCart/ProductCart'
import './scss/_cart.scss'
const Cart = () => {
  const [cart, setCart] = useState([])
  const [countProductsCart, setCountProductsCart] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let cartAux = JSON.parse(localStorage.getItem('carrito'))
    if (cartAux != null) {
      let countProducts = 0
      let totalAux = 0
      setCart(cartAux)
      cart.map((product) => {
        countProducts += product.count
        totalAux += product.count * product.precio
      })
      setCountProductsCart(countProducts)
      setTotal(totalAux)
    }
  }, [])

  return (
    <Layout>
      <div className="container-cart">
        <div className="container-left">
          <h1>Mi Pedido</h1>
          <div className="container-products">
            {cart.map((product, index) => (
              <ProductCart key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="container-rigth">
          <div className="container-card">
            <h2>Unimarket</h2>
            <div className="item">
              <p>#Productos :</p>
              <p>{countProductsCart}</p>
            </div>
            <div className="item">
              <p>Total : :</p>
              <p>${total}</p>
            </div>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
