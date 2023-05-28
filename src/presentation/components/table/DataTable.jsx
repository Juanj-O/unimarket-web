import { Table } from 'antd'
import './scss/_table.scss'

const DataTable = ({columns, dataSource}) => {
  return  <Table dataSource={dataSource} columns={columns}  /> 
}

export default DataTable
