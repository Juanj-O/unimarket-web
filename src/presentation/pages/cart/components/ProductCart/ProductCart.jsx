import { useNavigate } from 'react-router-dom'
import './scss/_productCart.scss'
const ProductCart = ({ product, setCart }) => {
  const navigate = useNavigate()
  const deleteProduct = () => {
    let cart = JSON.parse(localStorage.getItem('carrito'))
    let cartAux = []
    if (cart != null) {
      cart.map((item) => {
        if (item.codigo != product.codigo) {
          cartAux.push(item)
        }
      })
    }
    localStorage.setItem('carrito', JSON.stringify(cartAux))
    setCart([...cartAux])
  }

  return (
    <div className="container-productCart">
      <div className="container-image">
        <img
          src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2018/05/Como-armar-una-PC-Gamer-en-2018.jpg?fit=1280%2C768&ssl=1"
          alt=""
        />
      </div>
      <div className="container-info">
        <h2>{product && product.nombre}</h2>
        <h3>
          Precio : <p> ${product && product.precio}</p>
        </h3>
        <div>
          <button onClick={deleteProduct}>Eliminar</button>
          <button onClick={() => navigate(`/detail-product/${product.codigo}`)}>Ver</button>
        </div>

        {/* <div className="container-buttons">
          <div className="buttons-quantity">
            <button>-</button>
            <input defaultValue={product && product.count} />
            <button>+</button>
          </div>
          <BsFillTrashFill />
        </div> */}
      </div>
    </div>
  )
}

export default ProductCart
