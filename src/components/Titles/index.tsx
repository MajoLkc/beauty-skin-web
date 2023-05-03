import { Typography } from "antd"
import styled from "styled-components"
import config from "../../config.json"

const AntTitle = Typography.Title

const StyledTitle = styled(AntTitle)`
  font-family: "Alex Brush";
  font-size: 80px !important;
  margin: 0 !important;
  color: ${config.primaryColor} !important;
`

const StyledSubtitle = styled(AntTitle)`
//   font-family: "Alex Brush";
//   font-size: 80px !important;
//   margin: 0 !important;
//   color: ${config.primaryColor} !important;
`

type Props = {
  text: string
}

export const Title: React.FC<Props> = ({ text }) => (
  <StyledTitle level={1}>{text}</StyledTitle>
)

export const Subtitle: React.FC<Props> = ({ text }) => (
  <StyledSubtitle level={2}>{text}</StyledSubtitle>
)
