import { Typography } from "antd"
import styled from "styled-components"
import config from "../../config.json"

const AntTitle = Typography.Title

const StyledTitle = styled(AntTitle)`
  @import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");
  font-family: Parisienne, cursive;
  font-size: 3em;
  color: ${config.secondaryColor} !important;
  text-shadow: 2px 2px 4px #d9c5b4;
`

const StyledSubtitle = styled(AntTitle)`
  @import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");
  font-family: Parisienne, cursive;
  font-size: 2em;
  color: ${config.secondaryColor} !important;
  text-shadow: 2px 2px 4px #d9c5b4;
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
