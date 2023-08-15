import { Button as AntButton } from "antd"
import { Component } from "react"
import styled from "styled-components"

type Props = {
  type: "primary" | "ghost" | "dashed" | "link" | "text" | "default"
  label: string
  block?: boolean
  icon?: Component
}

const StyledButton = styled(AntButton)`
  font-size: 17px;
  height: 50px;
`

export const Button: React.FC<Props> = ({ type, label }) => (
  <StyledButton type={type}>{label}</StyledButton>
)
