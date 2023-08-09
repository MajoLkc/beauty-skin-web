import { ContentWrapper } from "../../components/ContentWrapper"
import { Subtitle } from "../../components/Titles"
import { ContactInfo, Map } from "./components"
import { PageName } from "../../components/PageName"
import config from "../../config.json"

const pageName = config.pages.contact

export const Contact: React.FC = () => (
  <ContentWrapper>
    <PageName nameOfPage={pageName} />
    <ContactInfo />
    <Subtitle text="Mapa"/>
    <Map />
  </ContentWrapper>
)
