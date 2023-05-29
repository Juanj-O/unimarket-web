import { BsFillTrashFill } from 'react-icons/bs'
import './scss/_productCart.scss'
const ProductCart = ({ product }) => {
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
        <div className="container-buttons">
          <div className="buttons-quantity">
            <button>-</button>
            <input defaultValue={product && product.count} />
            <button>+</button>
          </div>
          <BsFillTrashFill />
        </div>
      </div>
    </div>
  )
}

export default ProductCart
