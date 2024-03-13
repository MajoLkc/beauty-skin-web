import { Typography } from "antd"
import styled from "styled-components"
import config from "../../config.json"

const AntTitle = Typography.Title
const { secondaryColor } = config

const StyledTitle = styled(AntTitle)`
  @import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");
  font-family: Parisienne, cursive;
  font-size: 3em;
  color: ${secondaryColor} !important;
  text-shadow: 2px 2px 4px #d9c5b4;

  // Centering Styles
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  // height: 100vh; // This makes the container take the full viewport height
  // width: 100%; // This ensures the container spans the full width
`

const StyledSubtitle = styled(AntTitle)`
  @import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");
  font-family: Parisienne, cursive;
  color: ${secondaryColor} !important;
  text-shadow: 2px 2px 4px #d9c5b4;
  font-size: 2em;
  margin-left: 10px;
`

const StyledSmallTitle = styled(StyledSubtitle)`
  font-size: 1em;
  margin-top: 0 !important;
`

type Props = {
  text: string
  id?: string
}

export const Title: React.FC<Props> = ({ text }) => (
  <StyledTitle level={1}>{text}</StyledTitle>
)

export const Subtitle: React.FC<Props> = ({ text }) => (
  <StyledSubtitle level={2}>{text}</StyledSubtitle>
)

export const SmallTitle: React.FC<Props> = ({ text, id }) => (
  <StyledSmallTitle level={3} id={id}>
    {text}
  </StyledSmallTitle>
)
