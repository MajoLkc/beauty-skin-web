import { ContentWrapper } from "../../components/ContentWrapper"
import { DocumentHead } from "../../components/DocumentHead"
import config from "../../config.json"
import image_1 from "../../assets/images/rita_treat_close_eyes_640.jpg"
import image_2 from "../../assets/images/serums_640.jpg"
import image_3 from "../../assets/images/rita_mask_brash_1_640.jpg"
import { Title } from "../../components/Titles"
import { ContentWithImage } from "../../components/ContentWithImage"
import { Box } from "../../components/Box"
import { PageName } from "../../components/PageName"

const pageName = config.name

const expectations = [
  "príjemné čisté prostredie",
  "relax a uvoľnenie",
  "odbornú diagnostiku pleti",
  "poradenstvo na domácu starostlivosť",
  "profesionálny prístup",
  "efekt už po prvom ošetrení",
  "doplnkové služby",
]
const cosmeticTexts = [
  "Izraelská korektívna kozmetika",
  "profesionálna kozmetika",
  "rieši estetické problémy pleti",
  "domáce prípravky pre kompletnú starostlivosť o pleť",
]
const offers = [
  "Úpravu a farbenie obočia",
  "Farbenie rias",
  "Henna styling",
  "Lash lifting",
  "Lamináciu obočia",
  "Hĺbkové čistenie pleti",
  "Skin scrubber",
  "Mikromasáž očného okolia",
  "Masáž tváre, krku a dekoltu",
  "Depiláciu",
  "Ošetrenia pleti kozmetikou Christina",
  "Prístrojové ošetrenie",
  "Líčenie",
]

export const Opening: React.FC = () => (
  <ContentWrapper>
    <PageName nameOfPage={`Kozmetický salón - ${pageName}`} isOpening/>
    <Box/>
    <ContentWithImage
      subtitle="Čo môžete u nás očakávať"
      texts={expectations}
      name="expectation"
      imageSrc={image_1}
      imageAlt="Masáž krku"
      imageHeight={350}
    />
    <ContentWithImage
      viceVersa={true}
      subtitle="Kozmetika CHRISTINA"
      texts={cosmeticTexts}
      name="cosmetic"
      imageSrc={image_2}
      imageAlt="kozmetika"
      imageHeight={300}
    />
    <ContentWithImage
      subtitle="Čo ponúkame"
      texts={offers}
      name="offer"
      imageSrc={image_3}
      imageAlt="Pleťová maska na tvári"
      imageHeight={440}
    />
  </ContentWrapper>
)
