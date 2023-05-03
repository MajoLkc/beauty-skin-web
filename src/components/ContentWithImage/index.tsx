import { Row, Col, Space, Typography } from "antd"
import { Subtitle } from "../Titles"
import { Image } from "../Image"

const { Text } = Typography

type Props = {
  viceVersa?: boolean
  subtitle: string
  texts: string[]
  key: string
  imageSrc: string
  imageAlt: string
  imageHeight: number
}

export const ContentWithImage: React.FC<Props> = ({
  viceVersa,
  subtitle,
  texts,
  key,
  imageSrc,
  imageAlt,
  imageHeight
}) => {
  const mappedTexts = texts.map((text, i) => (
    <Text key={`${key}-${i}`}>{text}</Text>
  ))
  return (
    <Row>
      {viceVersa ? (
        <>
          <Col span={12}>
            <Image src={imageSrc} alt={imageAlt} height={imageHeight} />
          </Col>
          <Col span={12}>
            <Subtitle text={subtitle} />
            <Space direction="vertical">{mappedTexts}</Space>
          </Col>
        </>
      ) : (
        <>
          <Col span={12}>
            <Subtitle text={subtitle} />
            <Space direction="vertical">{mappedTexts}</Space>
          </Col>
          <Col span={12}>
            <Image src={imageSrc} alt={imageAlt} height={imageHeight} />
          </Col>
        </>
      )}
    </Row>
  )
}
