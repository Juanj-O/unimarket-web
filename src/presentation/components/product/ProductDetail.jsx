import './scss/_product-detail.scss'

const ProductDetail = ({product}) => {
  return (
    <div className="container-product">
      <div className="container-image">
        <img
          src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2018/05/Como-armar-una-PC-Gamer-en-2018.jpg?fit=1280%2C768&ssl=1"
          alt=""
        />
      </div>
      <div className="container-info">
        <h2> {product && product.nombre}</h2>
        <h3>Descripcion:</h3>
        <p>
          {product && product.descripcion}
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
