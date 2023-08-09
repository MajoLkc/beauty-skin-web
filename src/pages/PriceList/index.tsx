import styled from "styled-components"
import { Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import { ContentWrapper } from "../../components/ContentWrapper"
import config from "../../config.json"
import { priceList } from "./priceList"
import { PageName } from "../../components/PageName"

const pageName = config.pages.priceList

const Wrapper = styled.div`
  margin-bottom: 30px;
  .ant-table {
    box-shadow: ${config.tertiaryColor} 7px 7px 20px;
  }
  thead .ant-table-cell {
    background-color: ${config.primaryColor} !important;
    color: ${config.textColor} !important;
  }
  th {
    background-color: #d5c0af;
    color: #444444;
    font-size: 18px;
  }
  th:nth-child(2),
  td:nth-child(2) {
    text-align: right !important;
  }
`

type DataType = {
  key: number
  service: string
  price: string
}

const columns: ColumnsType<DataType> = [
  {
    title: "Služba",
    dataIndex: "service",
    key: "service",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Cena",
    dataIndex: "price",
    key: "price",
  },
]

const priceListToTable: DataType[] = priceList.map((item, index) => ({
  key: index,
  service: item.service,
  price: `${item.price.toFixed(2)}€`,
}))

export const PriceList: React.FC = () => (
  <ContentWrapper>
    <PageName nameOfPage={pageName} />
    <Wrapper>
      <Table
        pagination={false}
        columns={columns}
        dataSource={priceListToTable}
      />
    </Wrapper>
  </ContentWrapper>
)
