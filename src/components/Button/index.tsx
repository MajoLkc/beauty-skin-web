import { Button as AntButton } from "antd"
import { Component } from "react"

type Props = {
  type: "primary" | "ghost" | "dashed" | "link" | "text" | "default"
  label: string
  block?: boolean
  icon?: Component
}

export const Button: React.FC<Props> = ({ type, label }) => (
  <AntButton type={type}>{label}</AntButton>
)
