import Layout from '../../components/layout/Layout'
import { Button, Form, Input } from 'antd'
import './scss/_post-product.scss'
import { DatePicker } from 'antd'
import { Select } from 'antd'
import { useState } from 'react'
import { Upload } from 'antd'
import axios from 'axios'
import { notification } from 'antd'
import { message } from 'antd'

const PostProuct = () => {
  const [fileList, setFileList] = useState([])
	const [form] = Form.useForm();
  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
		// const file = new File(values.images.file)
		console.log(values.images.file.originFileObj);
		axios
		.post('http://localhost:8081/api/imagenes/subir-imagen', {
			file : values.images.file.originFileObj
		},{
			headers: {
				"Content-Type": "multipart/form-data",
			}})
		.then(function (response) {
			console.log(response)

			const {data} = response
			axios
      .post('http://localhost:8081/api/productos/crear-producto', {
        nombre: values.nombre,
        descripcion: values.descripcion,
        precio: values.precio,
        unidades: values.unidades,
        cedulaUsuario: '4444',
        categorias: values.password,
				imagenes: [{value: data.url, key:data.public_id}]
      })
      .then(function (response) {
        console.log(response)
				form.resetFields();
				setFileList([])
				notification.success({message:'Producto creado'})
      })
      .catch(function (error) {
        console.log(error)
      })
		})
		.catch(function (error) {
			console.log(error)
		})

  }
  return (
    <Layout>
      <div className="post-right-side">
        <div className="form-side">
          <div className="title">
            <h2>Publicar Producto</h2>
          </div>

          <div className="form-container">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
							enctype="multipart/form-data"
							form={form}
            >
              <Form.Item name="nombre" rules={[{ required: true, message: 'Escribe el nombre!' }]}>
                <Input placeholder="Nombre" />
              </Form.Item>
              <Form.Item
                name="descripcion"
                rules={[{ required: true, message: 'Escribe la descripcion!' }]}
              >
                <Input placeholder="Descripcion" />
              </Form.Item>
              <Form.Item name="precio" rules={[{ required: true, message: 'Escribe el precio!' }]}>
                <Input type="number" placeholder="Precio" />
              </Form.Item>
              <Form.Item
                name="unidades"
                rules={[{ required: true, message: 'Escribe las unidades!' }]}
              >
                <Input type="number" placeholder="Unidades" />
              </Form.Item>
              <Form.Item
                name="categorias"
                rules={[{ required: true, message: 'Selecciona una categoria!' }]}
              >
                <Select
                  mode="multiple"
                  options={[
                    { label: 'CELULARES', value: 'CELULARES' },
                    { label: 'COMPUTADORES', value: 'COMPUTADORES' },
                    { label: 'ELECTRODOMESTICOS', value: 'ELECTRODOMESTICOS' },
                    { label: 'TELEVISORES', value: 'TELEVISORES' },
                    { label: 'VIDEOJUEGOS', value: 'VIDEOJUEGOS' },
                    { label: 'DEPORTE', value: 'DEPORTE' },
                    { label: 'ACCESORIOS', value: 'ACCESORIOS' }
                  ]}
                />
              </Form.Item>
              <Form.Item name="images" rules={[{ required: true, message: 'Sube una imagen!' }]}>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
									
                >
                  {fileList.length < 5 && '+ Upload'}
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Crear
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostProuct
