import "./scss/_register.scss";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
		axios.post('http://localhost:8081/api/usuario/registrar-usuario', {
			cedula: values.cedula,
			nombreCompleto: values.nombreCompleto,
			telefono: values.telefono,
			direccion: values.direccion,
			email: values.email,
			contrasena: values.contrasena
		})
		.then(function (response) {
			console.log(response);
			navigate('/login', { replace: true })
		})
		.catch(function (error) {
			console.log(error);
		});
  };
  return (
    <div className="login-container">
      <aside className="login-left-side">
        <div className="login-about">
          <div className="titles">
            <img
              className="logo"
              src="/assets/unimarket-logo.png"
              alt="imagen"
							onClick={ () => navigate('/')}
            />

            <h1>Vende o compra.</h1>
            <h1>Casi cualquier cosa.</h1>
          </div>

          <img className="img-login" src="/assets/uni-login.png" alt="imagen" />
        </div>
      </aside>
      <div className="login-right-side">
        <div className="form-side">
          <div className="title">
            <h2>Registrarse en Unimarket</h2>
          </div>

          <div className="form-container">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="nombreCompleto"
                rules={[{ required: true, message: "Escribe tu nombre completo!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Nombre Completo"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Escribe tu contraseña!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Correo"
                />
              </Form.Item>
							<Form.Item
                name="cedula"
                rules={[{ required: true, message: "Escribe tu contraseña!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Cedula"
                />
              </Form.Item>
							<Form.Item
                name="telefono"
                rules={[{ required: true, message: "Escribe tu contraseña!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Numero de telefono"
                />
              </Form.Item>
							<Form.Item
                name="direccion"
                rules={[{ required: true, message: "Escribe tu contraseña!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Direccion"
                />
              </Form.Item>
							<Form.Item
                name="contrasena"
                rules={[{ required: true, message: "Escribe tu contraseña!" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Contraseña"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Registrarse
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
