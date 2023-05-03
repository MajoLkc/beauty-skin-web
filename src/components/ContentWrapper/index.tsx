import { ReactNode } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`

type Props = {
  children: ReactNode
}

export const ContentWrapper: React.FC<Props> = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)
