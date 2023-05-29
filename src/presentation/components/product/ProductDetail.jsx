import './scss/_product-detail.scss'

const ProductDetail = () => {
  return (
    <div className="container-product">
      <div className="container-image">
        <img
          src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2018/05/Como-armar-una-PC-Gamer-en-2018.jpg?fit=1280%2C768&ssl=1"
          alt=""
        />
      </div>
      <div className="container-info">
        <h2>Computador Gamer</h2>
        <h3>Descripcion:</h3>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit voluptatem in
          modi incidunt asperiores, vel error. Nihil modi iusto alias molestias mollitia, veniam
          provident sit pariatur porro facilis fuga?
        </p>
      </div>
    </div>
  )
}

export default ProductDetail
