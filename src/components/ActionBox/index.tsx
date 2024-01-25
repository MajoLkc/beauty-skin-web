import styled from "styled-components"
import { Subtitle, SmallTitle } from "../Titles"
import config from "../../config.json"

const StyledDiv = styled.div`
  background-size: cover;
  background-position: center center;
//   background-image: url($);
  height: 240px;
  max-width: 500px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: ${config.tertiaryColor} 7px 7px 20px;
  @media (max-width: 1120px) {
    width: 100%;
  }
  // h3 {
  //   font-size: 45px;
  //   font-weight: 600;
  //   margin-top: 20px;
  //   margin-left: 10px;
  //   line-height: 20px;
  // }
  // h4 {
  //   line-height: 20px;
  //   font-size: 25px;
  //   margin-left: 10px;
  //   margin-top: 40px !important;
  //   margin-bottom: 20px !important;
  //   font-weight: 400;
  // }
`

const ButtonsWrapper = styled.div`
  // display: block;
  margin-left: 10px;
  margin-bottom: 20px;
  float: left;
  margin-top: 20px;
  a {
    margin-right: 20px;
  }
`

export const Box: React.FC = () => (
  <StyledDiv>
    <Subtitle text="Objednávka" />
    <SmallTitle text="Objednajte sa jednoducho" />
    {/* <Text>
      Objednajte sa z pohodlia vášho domova. Zavolajte alebo nám napíšte.
    </Text>
    <ButtonsWrapper>
      <Link href="tel:+421905916124">
        <Button type="primary" label="Objednávka telefonicky" />
      </Link>
      <Link
        href="https://www.messenger.com/t/105804119129178"
        target="_blank"
        rel="noreferrer"
      >
        <Button type="primary" label="Objednávka online" />
      </Link>
    </ButtonsWrapper> */}
  </StyledDiv>
)
