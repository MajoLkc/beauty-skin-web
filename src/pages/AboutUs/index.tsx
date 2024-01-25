import { List, Typography } from "antd"
import { PageName } from "../../components/PageName"
import config from "../../config.json"
import { ContentWrapper } from "../../components/ContentWrapper"
import { Subtitle } from "../../components/Titles"
import { sliderImages } from "./sliderImages"
import { ImageSlider } from "../../components/ImageSlider"
import styled from "styled-components"
import { Paragraph } from "../../components/Paragraph"

const { Text } = Typography
const pageName = config.pages.aboutUs

const adventages = [
  "Na medzinárodnom trhu pôsobí úspešne už 40 rokov",
  "CHRISTINA vlastní špičkovo vybavené laboratórium a vedecko-výskumné centrum",
  "Jedinečné receptúry profesionálnych ošetrení a následnej domácej starostlivosti od skutočných profesionálov",
  "Inovácia a modernizácia zloženia prípravkov, podliehajúca novým trendom a potrebám profesionálnych kozmetičiek a požiadaviek EÚ",
]

const lines = [
  "• jednotlivé rady sa od seba líšia technikou výroby, počtom a skladbou jednotlivých krokov",
  "• každá rada pracuje na inom princípe, obsahuje rôzne ingrediencie ",
  "• korektívna rada - riešenie konkrétnej estetickej vady alebo problému pleti • ošetrujúca rada - ošetrujúca a skrášľujúca starostlivosť všetkých typov pleti ",
  "• každá rada obsahuje produkty aj pre domácu starostlivosť ",
]

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1060px) {
    display: block;
    margin-bottom: -120px;
  }
`

const TextWrapper = styled.div`
  width: 700px;
  @media (max-width: 1060px) {
    width: 100%;
  }
`

export const AboutUs: React.FC = () => (
  <ContentWrapper>
    <PageName nameOfPage={pageName} />
    <Wrapper>
      <TextWrapper>
        <Paragraph
          text="
            V našom kozmetickom salóne používame dermokozmetiku CHRISTINA. Ide o
            korektívnu kozmetiku, ktorá rieši rôzne estetické problémy pleti ako
            je akné, post-akné, suchá a mastná seborea, cievne defekty,
            hyperpigmentácia, podráždená a citlivá pleť, predčasné starnutie
            pleti a vrásky."
        />
        <List
          header={<Subtitle text="Výhody kozmetiky CHRISTINA" />}
          dataSource={adventages}
          renderItem={(item) => (
            <List.Item>
              <Text>{item}</Text>
            </List.Item>
          )}
        />
      </TextWrapper>
      <ImageSlider dots={false} autoplay images={sliderImages} />
    </Wrapper>
    <List
      header={<Subtitle text="11 PROFESIONÁLNYCH RÁD" />}
      dataSource={lines}
      renderItem={(item) => (
        <List.Item>
          <Text>{item}</Text>
        </List.Item>
      )}
    />
    <Paragraph
      text="
        Vďaka vysokej účinnosti prípravkov používajú niektoré rady aj v
        dermatologických klinikách."
    />
    <Paragraph
      text="
        Kozmetické prípravky sú vyrábané z vysoko kvalitných surovín, bez obsahu
        alergénov, ingrediencie sú starostlivo testované. Obsahujú prírodné
        konzervačné látky."
    />
  </ContentWrapper>
)
