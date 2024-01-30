import { Typography } from "antd"
import styled from "styled-components"
import config from "../../config.json"

const AntText = Typography.Text

export const Text = styled(AntText)`
  color: ${config.textColor};
  font-size: 15px;
  font-weight: 600;
  // margin-left: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
