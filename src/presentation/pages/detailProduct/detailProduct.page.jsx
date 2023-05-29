import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Comments from './Comments'
import './scss/_detailProduct.scss'

const DetailProduct = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(0)

  const addCart = (amount) => {
    let cart = JSON.parse(localStorage.getItem('carrito'))
    let cartAux = []
    if (cart != null) {
      cart.map((item) => {
        console.log(item.codigo != product.codigo)
        if (item.codigo != product.codigo) {
          cartAux.push(item)
        }
      })
      if (amount != 0) {
        if (amount > product.unidades) {
          cartAux.push({ ...product, count: product.unidades })
          setQuantity(product.unidades)
          return
        }
        cartAux.push({ ...product, count: amount })
      }
    } else {
      cartAux.push({ ...product, count: amount })
    }
    localStorage.setItem('carrito', JSON.stringify(cartAux))
    setQuantity(amount)
  }
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem('carrito'))
      ? JSON.parse(localStorage.getItem('carrito'))
      : []
    axios
      .get(`http://localhost:8081/api/productos/obtener-producto/${productId}`)
      .then((response) => {
        console.log(response.data)
        setProduct(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    if (cart) {
      let aux = cart.find((item) => {
        return item.codigo == productId
      })
      if (aux != undefined) {
        setProduct({ ...aux, count: aux.count })
        setQuantity(aux.count)
      }
    }
  }, [])

  return (
    <Layout classStyle={''}>
      <div className="container-detailProduct">
        <div className="container-top">
          <div className="card-images">
            <div className="container-arrow">{'<'}</div>
            <img
              className="image"
              src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2018/05/Como-armar-una-PC-Gamer-en-2018.jpg?fit=1280%2C768&ssl=1"
              alt=""
            />
            <div className="container-arrow">{'>'}</div>
          </div>
          <div className="card-info">
            <h1>{product && product.nombre}</h1>
            <h2>Descripcion :</h2>
            <p>{product && product.descripcion}</p>
            <h1>Precio : ${product && product.precio}</h1>
            {quantity > 0 ? (
              <div className="container-buttons">
                <button onClick={() => addCart(quantity - 1)}>-</button>
                <input value={quantity} />
                <button onClick={() => addCart(quantity + 1)}>+</button>
              </div>
            ) : (
              <button className="button-add" onClick={() => addCart(1)}>
                Agregar
              </button>
            )}
          </div>
        </div>
        <div className="container-bottom">
          <h1>Comentarios</h1>
          <Comments />
        </div>
      </div>
    </Layout>
  )
}

export default DetailProduct
