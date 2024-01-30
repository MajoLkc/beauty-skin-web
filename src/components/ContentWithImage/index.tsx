import { Row, Col, Space } from "antd"
import { Subtitle } from "../Titles"
import styled from "styled-components"
import config from "../../config.json"
import { Text } from "../Text"

type Props = {
  viceVersa?: boolean
  subtitle: string
  texts: string[]
  width?: number
  name?: string
  bgImage: string
  imageAlt?: string
  imageHeight?: number
}

const Box = styled(Row)`
  border-radius: 20px;
  box-shadow: ${config.tertiaryColor} 7px 7px 20px;
  margin-bottom: 40px;
`

const Section = styled(Col)`
  margin: 20px;
`

const StyledDiv = styled.div`
  background-size: cover;
  background-position: center center;
  overflow: auto;
  min-height: 240px;
  width: 500px;
  margin-bottom: 20px;
  margin-right: 20px;
  // border-radius: 20px;
  box-shadow: ${config.tertiaryColor} 7px 7px 7px;
  @media (max-width: 1120px) {
    width: 100% !important;
  }
`

export const ContentWithImage: React.FC<Props> = ({
  subtitle,
  texts,
  name,
  bgImage,
  width,
  imageAlt,
  imageHeight,
}) => {
  const mappedTexts = texts.map((text, index) => (
    <Text key={`${name}-${index}`}>{text}</Text>
  ))
  return (
    <StyledDiv style={{ backgroundImage: `url(${bgImage})`, width }}>
        <Subtitle text={subtitle} />
      <Section span={24}>
        <Space direction="vertical">{mappedTexts}</Space>
      </Section>
    </StyledDiv>
  )
}
