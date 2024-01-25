import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1060px) {
    display: block;
    margin-bottom: -120px;
  }
`

export const TextWrapper = styled.div`
  width: 700px;
  @media (max-width: 1060px) {
    width: 100%;
  }
`
