import { List as AntList, Typography } from "antd"

const { Text } = Typography

type Props = {
  data: string[]
  header?: any
}

export const List: React.FC<Props> = ({ data, header }) => (
  <AntList
    header={header}
    dataSource={data}
    renderItem={(item) => (
      <AntList.Item>
        <Text>{item}</Text>
      </AntList.Item>
    )}
  />
)
