import { Image as AntImage } from "antd"
import styled from "styled-components"

type Props = {
  src: string
  alt: string
  height?: number
}

const StyledImage = styled(AntImage)`
  border-radius: 20px;
`

export const Image: React.FC<Props> = ({ src, alt, height }) => (
  <StyledImage src={src} alt={alt} preview={false} height={height} />
)
