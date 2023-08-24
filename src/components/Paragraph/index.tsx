import { Typography } from "antd"

const AntParagraph = Typography.Paragraph
const AntText = Typography.Text

type Props = {
  text: string
}

export const Paragraph: React.FC<Props> = ({ text }) => (
  <AntParagraph>
    <AntText>{text}</AntText>
  </AntParagraph>
)
