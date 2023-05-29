import "./scss/_login.scss";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate()
	

  const  onFinish = async(values) => {
    console.log("Received values of form: ", values);

		await axios.post('http://localhost:8081/api/auth/login', {
			email: values.username,
			contrasena: values.password
		},{headers: {
			'Access-Control-Allow-Origin': '*',
			'origin':'x-requested-with',
			'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
			'Content-Type': 'application/json',
	}})
		.then(function (response) {
			console.log(response);
			localStorage.setItem('token', response.data.token);
			if (values.type==="moderador") {
			navigate('/moderator', { replace: true })
			}else{
			navigate('/', { replace: true })
			}
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
            <h2>Iniciar sesión en Unimarket</h2>
          </div>

          <div className="form-container">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="type"
                rules={[{ required: true, message: "Escribe tu usuario!" }]}
              >
                <Select
                  options={[
										{key:1, value: 'moderador', label: 'Moderador' },
										{key:2, value: 'usuario', label: 'Usuario' }
		
									]}
                />
              </Form.Item>
							<Form.Item
                name="username"
                rules={[{ required: true, message: "Escribe tu usuario!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Usuario"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Escribe tu contraseña!" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Contraseña"
                />
              </Form.Item>
              <Form.Item>
                <a className="login-form-forgot" href="">
                  Olvide mi contraseña
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Iniciar sesión
                </Button>
                <div>
                  ¿ No tienes cuenta ? -<a onClick={() =>navigate('/register', { replace: true }) }> Registrarse ahora!</a>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
