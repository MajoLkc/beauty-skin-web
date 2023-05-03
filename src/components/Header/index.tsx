import { LayoutHeader } from "../PageLayout"
import { NavLink } from "react-router-dom"
import * as routes from "../../routes"
import logo from "../../assets/images/logo-small.png"
import styled from "styled-components"
import config from "../../config.json"
import { Typography } from "antd"

const { Text } = Typography

const StyledText = styled(Text)`
  color: ${config.secondaryColor};
  font-size: 40px;
  font-weight: 600;
  margin-left: 10px;
`

const StyledNavLink = styled(NavLink)`
  padding: 22px;
  height: 64px;
  :hover {
    color: ${config.secondaryColor};
    background-color: ${config.tertiaryColor};
    // font-weight: bold;
    // transition: 0.5;
  }
`

export const Header: React.FC = () => (
  <LayoutHeader>
    <div
      style={{
        width: "1400px",
        display: "flex",
        justifyContent: "space-between",
        margin: "0px auto",
      }}
    >
      <NavLink className="logo" to={routes.OPENING}>
        <img src={logo} alt="logo" />
        <StyledText>Beauty skin</StyledText>
      </NavLink>
      <div>
        {/* <StyledNavLink to={routes.ABOUT_US}>O nás</StyledNavLink>
        <StyledNavLink to={routes.SERVICES}>Služby</StyledNavLink>
        <StyledNavLink to={routes.PRICE_LIST}>Cenník</StyledNavLink>
        <StyledNavLink to={routes.CONTACT}>Kontakt</StyledNavLink> */}
      </div>
    </div>
  </LayoutHeader>
)
