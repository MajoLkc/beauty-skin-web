import { Helmet } from "react-helmet"
import config from "../../config.json"

type Props = {
  page?: string
}

export const DocumentHead: React.FC<Props> = ({ page }) => (
  <Helmet>
    <title>
      {page === undefined ? `${config.name}` : `${config.name} | ${page}`}
    </title>
  </Helmet>
)
