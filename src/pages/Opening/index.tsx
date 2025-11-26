import { ContentWrapper } from "../../components/ContentWrapper"
import config from "../../config.json"
import backgroundImage_1 from "../../assets/images/rita_treat_close_eyes_op_03_640.jpg"
import backgroundImage_2 from "../../assets/images/serums_op_03_640.jpg"
import backgroundImage_3 from "../../assets/images/rita_treat_brash_2_op_03.jpg"
import { ContentWithImage } from "../../components/ContentWithImage"
import { Box } from "../../components/Box"
import { PageName } from "../../components/PageName"
import { Space } from "antd"
import styled from "styled-components"

const Wrapper = styled.div`
  @media (min-width: 1120px) {
    border-radius: 20px;
    box-shadow: ${config.tertiaryColor} 7px 7px 20px;
    background-color: white;
    margin-bottom: 40px;
    margin-left: 70px;
    margin-right: 70px;
    width: 1140px;
  }
`

const SubWrapper = styled.div`
  @media (min-width: 1120px) {
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
`

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
  "Biomicroneedling",
  "Líčenie",
  "Mikrodermabrázia",
  "Kozmetika Esthemax",
]

export const Opening: React.FC = () => (
  <ContentWrapper>
    <PageName nameOfPage={`Kozmetický salón - ${pageName}`} isOpening />
    <Box />
    <Wrapper>
      <SubWrapper>
        <Space direction="vertical">
          <ContentWithImage
            texts={expectations}
            subtitle="Čo môžete u nás očakávať"
            bgImage={backgroundImage_1}
            width={420}
          />
          <ContentWithImage
            texts={cosmeticTexts}
            subtitle="Kozmetika CHRISTINA"
            bgImage={backgroundImage_2}
            width={420}
          />
        </Space>
        <ContentWithImage
          texts={offers}
          subtitle="Čo ponúkame"
          bgImage={backgroundImage_3}
          width={300}
        />
      </SubWrapper>
    </Wrapper>
  </ContentWrapper>
)
