import Layout from "../../components/layout/Layout";
import Comments from "./Comments";
import "./scss/_detailProduct.scss";

const DetailProduct = () => {
  return (
    <Layout classStyle={""}>
      <div className="container-detailProduct">
        <div className="container-top">
          <div className="card-images">
            <div className="container-arrow">{"<"}</div>
            <img
              className="image"
              src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2018/05/Como-armar-una-PC-Gamer-en-2018.jpg?fit=1280%2C768&ssl=1"
              alt=""
            />
            <div className="container-arrow">{">"}</div>
          </div>
          <div className="card-info">
            <h1>Computador Gamer</h1>
            <h2>Descripcion :</h2>
            <p>
              Domina a tus oponentes con el poder y la velocidad de tu estación
              de batalla esencial con Legion Tower 5i 7ma Gen. Los procesadores
              hasta Intel® Core™ i9 de 12va generación y las GPU NVIDIA®
              GeForce® ofrecen frecuencias de actualización rápidas, junto con
              un rendimiento ventilado y silencioso en una carcasa compacta y
              limpia.
            </p>
            <h1>Precio : $3.000.000</h1>
            <div className="container-buttons">
              <button>-</button>
              <input />
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="container-bottom">
          <h1>Comentarios</h1>
          <Comments />
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduct;
