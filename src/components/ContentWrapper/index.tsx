import { ReactNode } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 1350px) {
    margin: 5%;
  }
`

type Props = {
  children: ReactNode
}

export const ContentWrapper: React.FC<Props> = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)
