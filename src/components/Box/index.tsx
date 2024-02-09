import { Typography } from "antd"
import styled from "styled-components"
import pictureBox1 from "../../assets/images/creams-op_03-640.jpg"
import pictureBox2 from "../../assets/images/woman_mask-op_03-640.jpg"
import { Button } from "../Button"
import config from "../../config.json"
import { NavLink } from "react-router-dom"
import * as routes from "../../routes"
import { SmallTitle, Subtitle } from "../Titles"

const { Link, Paragraph } = Typography

const AntText = Typography.Text

const StyledParagraph = styled(Paragraph)`
  margin-left: 10px;
`

const StyledDiv = styled.div`
  background-size: cover;
  background-position: center center;
  background-image: url(${pictureBox2});
  overflow: auto;
  min-height: 240px;
  width: 500px;
  margin-bottom: 30px;
  // margin-right: 30px;
  border-radius: 20px;
  box-shadow: ${config.tertiaryColor} 7px 7px 20px;
  @media (max-width: 1120px) {
    width: 100%;
  }
`

const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  // justify-content: center;
  justify-content: space-around;
  @media (max-width: 1120px) {
    display: block;
  }
`

// const Text = styled(AntText)`
//   color: ${config.secondaryColor} !important;
// `

const Text = styled(AntText)`
  color: ${config.textColor};
  font-size: 15px;
  font-weight: 600;
  // margin-left: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`

const ButtonsWrapper = styled.div`
  margin-left: 10px;
  a {
    margin-right: 20px;
  }
  @media (max-width: 480px) {
    button {
      margin: 0 auto 15px auto;
    }
  }
`

export const Box: React.FC = () => (
  <BoxWrapper>
    <StyledDiv style={{ backgroundImage: `url(${pictureBox1})` }}>
      <Subtitle text="Objednávka" />
      <SmallTitle text="Objednajte sa jednoducho" />
      <StyledParagraph>
        <Text>
          Objednajte sa z pohodlia vášho domova. Zavolajte alebo nám napíšte.
        </Text>
      </StyledParagraph>
      <ButtonsWrapper>
        <Link href={`tel:${config.contact.internationalNumber}`}>
          <Button type="primary" label="Objednávka telefonicky" />
        </Link>
        <Link
          href={config.links.messenger}
          target="_blank"
          rel="noreferrer"
        >
          <Button type="primary" label="Objednávka online" />
        </Link>
      </ButtonsWrapper>
    </StyledDiv>
    <StyledDiv>
      <Subtitle text="Služby" />
      <SmallTitle text="Zistite, aké služby ponúkame" />
      <StyledParagraph>
        <Text>Vyberte si z našej širokej ponuky profesionálnych služieb.</Text>
      </StyledParagraph>
      <ButtonsWrapper>
        <NavLink to={routes.SERVICES}>
          <Button type="primary" label="Zobraziť služby" />
        </NavLink>
      </ButtonsWrapper>
    </StyledDiv>
  </BoxWrapper>
)
