import Layout from '../../components/layout/Layout'
import { Button, Form, Input } from "antd";
import './scss/_post-product.scss'
import { DatePicker } from 'antd';
import { Select } from 'antd';
import { useState } from 'react';
import { Upload } from 'antd';

const PostProuct = () => {
		const [fileList, setFileList] = useState([
			{
				uid: '-1',
				name: 'image.png',
				status: 'done',
				url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			},
		]);
		const onPreview = async (file) => {
			let src = file.url;
			if (!src) {
				src = await new Promise((resolve) => {
					const reader = new FileReader();
					reader.readAsDataURL(file.originFileObj);
					reader.onload = () => resolve(reader.result );
				});
			}
			const image = new Image();
			image.src = src;
			const imgWindow = window.open(src);
			imgWindow?.document.write(image.outerHTML);
		};
		const onChange = ({ fileList: newFileList }) => {
			setFileList(newFileList);
		};
	const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
	return (
		<Layout><div className="post-right-side">
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
				>
					<Form.Item
						name="name"
						rules={[{ required: true, message: "Escribe el nombre!" }]}
					>
						<Input
							placeholder="Nombre"
						/>
					</Form.Item>
					<Form.Item
						name="description"
						rules={[{ required: true, message: "Escribe la descripcion!" }]}
					>
						<Input
							placeholder="Descripcion"
						/>
					</Form.Item>
					<Form.Item
						name="price"
						rules={[{ required: true, message: "Escribe el precio!" }]}
					>
						<Input
						type='number'
							placeholder="Precio"
						/>
					</Form.Item>
					<Form.Item
						name="units"
						rules={[{ required: true, message: "Escribe las unidades!" }]}

					>
						<Input
						type='number'
							placeholder="Unidades"
						/>
					</Form.Item>
					<Form.Item
						name="dateCreate"
						rules={[{ required: true, message: "Escribe la fecha de creacion!" }]}
					>
						<DatePicker />
					</Form.Item>
					<Form.Item
						name="dateLimit"
						rules={[{ required: true, message: "Escribe la fecha limite!" }]}
					>
						<DatePicker />
					</Form.Item>
					<Form.Item
						name="category"
						rules={[{ required: true, message: "Selecciona una categoria!" }]}
					>
						<Select />
					</Form.Item>
					<Form.Item
						name="images"
						rules={[{ required: true, message: "Sube una imagen!" }]}
					>
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
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Crear
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	</div></Layout>
		
	)
}

export default PostProuct