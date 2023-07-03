import { Row, Col, Space, Typography } from "antd"
import { Subtitle } from "../Titles"
import { Image } from "../Image"
import styled from "styled-components"
import config from '../../config.json'

const { Text } = Typography

type Props = {
  viceVersa?: boolean
  subtitle: string
  texts: string[]
  name: string
  imageSrc: string
  imageAlt: string
  imageHeight: number
}

const Box = styled(Row)`
  border-radius: 20px;
  box-shadow: ${config.tertiaryColor} 7px 7px 20px;
  margin-bottom: 40px;
`

const Section = styled(Col)`
  margin: 20px;
`

export const ContentWithImage: React.FC<Props> = ({
  viceVersa,
  subtitle,
  texts,
  name,
  imageSrc,
  imageAlt,
  imageHeight,
}) => {
  const mappedTexts = texts.map((text, index) => (
    <Text key={`${name}-${index}`}>{text}</Text>
  ))
  return (
    <Box>
      {viceVersa ? (
        <>
          <Section span={11}>
            <Image src={imageSrc} alt={imageAlt} height={imageHeight} />
          </Section>
          <Section span={11}>
            <Subtitle text={subtitle} />
            <Space direction="vertical">{mappedTexts}</Space>
          </Section>
        </>
      ) : (
        <>
          <Section span={11}>
            <Subtitle text={subtitle} />
            <Space direction="vertical">{mappedTexts}</Space>
          </Section>
          <Section span={11}>
            <Image src={imageSrc} alt={imageAlt} height={imageHeight} />
          </Section>
        </>
      )}
    </Box>
  )
}
