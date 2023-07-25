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
  width: 100%;
  .active {
    color: ${config.secondaryColor} !important;
  }
  .logo {
    display: flex;
    align-items: left;
    justify-content: left;
  }
  .ant-menu-item:hover::after {
    border-bottom-color: ${config.secondaryColor} !important;
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
