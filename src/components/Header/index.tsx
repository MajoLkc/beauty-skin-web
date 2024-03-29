import { LayoutHeader } from "../PageLayout"
import { NavLink } from "react-router-dom"
import * as routes from "../../routes"
import logo from "../../assets/images/logo-small.png"
import styled from "styled-components"
import config from "../../config.json"
import { Typography, Row, Menu as AntMenu, Drawer } from "antd"
import React, { useState } from "react"
import { MenuOutlined } from "@ant-design/icons"

const { Text } = Typography
const { name, primaryColor, secondaryColor, textColor } = config
const { OPENING, ABOUT_US, SERVICES, PRICE_LIST, CONTACT } = routes

type MenuProps = {
  isInline?: boolean
  onSelect?: any
}

const StyledText = styled(Text)`
  color: ${secondaryColor};
  font-size: 40px;
  font-weight: 600;
  margin-left: 10px;
  @import url("https://fonts.googleapis.com/css2?family=Parisienne&display=swap");
  font-family: Parisienne, cursive;
  color: ${secondaryColor} !important;
  text-shadow: 2px 2px 4px #d9c5b4;
`

const HeaderContentWrapper = styled(Row)`
  max-width: 1280px;
  margin: 0px auto;
  @media (min-width: 700px) {
    .menu-icon {
      display: none;
    }
  }
  @media (max-width: 760px) {
    .title {
      display: none;
    }
  }
`

const StyledNavLink = styled(NavLink)`
  color: ${textColor} !important;
  &:hover {
    color: ${secondaryColor} !important;
  }
`

const StyledMenu = styled(AntMenu)`
  border: none;
  background-color: transparent;
  font-size: 20px;
`

const StyledDrawer = styled(Drawer)`
  background: ${primaryColor};
`

const MenuWrapper = styled.div`
  width: 461px;
  @media (max-width: 700px) {
    display: none;
  }
`

const Menu: React.FC<MenuProps> = ({ isInline, onSelect }) => (
  <StyledMenu
    onSelect={onSelect}
    mode={isInline ? "inline" : "horizontal"}
    items={[
      {
        label: <StyledNavLink to={OPENING}>Domov</StyledNavLink>,
        key: "opening",
      },
      {
        label: <StyledNavLink to={ABOUT_US}>O nás</StyledNavLink>,
        key: "about",
      },
      {
        label: <StyledNavLink to={SERVICES}>Služby</StyledNavLink>,
        key: "services",
      },
      {
        label: <StyledNavLink to={PRICE_LIST}>Cenník</StyledNavLink>,
        key: "prices",
      },
      {
        label: <StyledNavLink to={CONTACT}>Kontakt</StyledNavLink>,
        key: "contact",
      },
    ]}
  />
)

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <LayoutHeader>
      <HeaderContentWrapper justify="space-between">
        <NavLink className="logo" to={OPENING}>
          <img src={logo} alt="logo" />
          <StyledText className="title">{name}</StyledText>
        </NavLink>
        <MenuOutlined
          style={{ color: "black", fontSize: "50px" }}
          onClick={() => {
            setOpenMenu(true)
          }}
          className="menu-icon"
        />
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <StyledDrawer
          open={openMenu}
          onClose={() => {
            setOpenMenu(false)
          }}
          closable={false}
          bodyStyle={{ backgroundColor: primaryColor }}
        >
          <Menu
            isInline
            onSelect={() => {
              setOpenMenu(false)
            }}
          />
        </StyledDrawer>
      </HeaderContentWrapper>
    </LayoutHeader>
  )
}
