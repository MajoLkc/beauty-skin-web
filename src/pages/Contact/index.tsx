import { ContentWrapper } from "../../components/ContentWrapper"
import { Subtitle } from "../../components/Titles"
import { ContactInfo, Map, PageName } from "./components"

export const Contact: React.FC = () => (
  <ContentWrapper>
    <PageName />
    <ContactInfo />
    <Subtitle text="Mapa"/>
    <Map />
  </ContentWrapper>
)
