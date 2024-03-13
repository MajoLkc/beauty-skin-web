import { Helmet } from "react-helmet"
import config from "../../config.json"

const { name } = config

type Props = {
  page?: string
}

export const DocumentHead: React.FC<Props> = ({ page }) => (
  <Helmet>
    <title>{page === undefined ? `${name}` : `${name} | ${page}`}</title>
  </Helmet>
)
