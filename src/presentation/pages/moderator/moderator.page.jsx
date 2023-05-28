import Layout from '../../components/layout/Layout'
import DataTable from '../../components/table/DataTable';
import './scss/_moderator.scss'
import { CheckOutlined, CloseOutlined, EyeFilled } from '@ant-design/icons';
const Moderator= () => {

	const dataSource = [
  {
    key: '1',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '2',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '3',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '4',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '5',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '6',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '7',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '8',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '9',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '10',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '11',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '12',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '13',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '14',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  },{
    key: '15',
    name: 'PC',
    description: 'PC',
    price: 200000,
    units: 5,
    creationDate: '12/02/2023',
    dateLimit: '12/12/2023',
    state: 'activo',
  }
];
const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Descripcion',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
  },
	{
    title: 'Unidades',
    dataIndex: 'units',
    key: 'units',
  },
	{
    title: 'Fecha creacion',
    dataIndex: 'creationDate',
    key: 'creationDate',
  },
	{
    title: 'Fecha limite',
    dataIndex: 'dateLimit',
    key: 'dateLimit',
  },
	{
    title: 'Estado',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <>
			<div className='icons'>
			<EyeFilled /><CheckOutlined /><CloseOutlined />
			</div>
      </>
    ),
  },
];
	return (
    <Layout classStyle={'dashboardPage'}>
		<div>moderator.page</div>
		<DataTable columns={columns} dataSource={dataSource}/>
	</Layout>
	)
}

export default Moderator