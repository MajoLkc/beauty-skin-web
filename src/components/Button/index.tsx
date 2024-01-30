import { Button as AntButton } from "antd"
import { Component } from "react"
import styled from "styled-components"
import config from "../../config.json"

type Props = {
  type: "primary" | "ghost" | "dashed" | "link" | "text" | "default"
  label: string
  block?: boolean
  icon?: Component
}

const StyledButton = styled(AntButton)`
  font-size: 17px;
  height: 50px;
  &:hover {
    color: ${config.secondaryColor} !important;
  }
`

export const Button: React.FC<Props> = ({ type, label }) => (
  <StyledButton type={type}>{label}</StyledButton>
)
