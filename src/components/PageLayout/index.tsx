import { Layout as AntLayout } from "antd"
import { ReactNode } from "react"
import styled from "styled-components"
import config from "../../config.json"

const { Header, Content, Footer } = AntLayout

type Props = {
  children: ReactNode
}

const StyledHeader = styled(Header)`
  background: ${config.primaryColor};
  .active {
    color: ${config.secondaryColor};
    font-weight: bold;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const StyledFooter = styled(Footer)`
  background: ${config.primaryColor};
`

export const Layout: React.FC<Props> = ({ children }) => (
  <AntLayout>{children}</AntLayout>
)

export const LayoutHeader: React.FC<Props> = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
)

export const LayoutContent: React.FC<Props> = ({ children }) => (
  <Content>{children}</Content>
)

export const LayoutFooter: React.FC<Props> = ({ children }) => (
  <StyledFooter>{children}</StyledFooter>
)
