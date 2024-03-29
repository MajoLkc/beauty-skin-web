import styled from "styled-components"
import config from "../../config.json"
import { Subtitle } from "../../components/Titles"
import { Typography } from "antd"
import { editPhoneNumber } from "../../utils/dataTransform"

const { Paragraph, Link, Text } = Typography

const {
  googleMapUrl,
  googleMapFrameUrl,
  tertiaryColor,
  contact: { address, phoneNumber, email },
} = config
const facebookPageName = config.socialMedia.facebook
const facebookUrl = config.links.facebook
const messengerUrl = config.links.messenger
const phoneNumberToCall = editPhoneNumber(phoneNumber)

type IframeProps = {
  title: string
  sourceUrl: string
  loadingType?: "lazy" | "eager"
}

type InfoProps = {
  name: string
  value: string
  link: string
  target?: "_blank"
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 760px) {
    display: block;
  }
`

const StyledBox = styled.div`
  border-radius: 20px;
  box-shadow: ${tertiaryColor} 7px 7px 20px;
  height: 200px;
  width: 45%;
  @media (max-width: 760px) {
    width: 100%;
  }
`

const StyledMap = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  border-radius: 20px !important;
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 20px !important;
    border: none;
    box-shadow: ${tertiaryColor} 7px 7px 20px;
  }
`

const StyledParagraph = styled(Paragraph)`
  margin-left: 10px;
`

const Iframe: React.FC<IframeProps> = ({ title, sourceUrl, loadingType }) => (
  <iframe title={title} src={sourceUrl} loading={loadingType} />
)

const Info: React.FC<InfoProps> = ({ name, value, link, target }) => (
  <StyledParagraph>
    <Text strong>{`${name}: `}</Text>
    <Link target={target} href={link}>
      {value}
    </Link>
  </StyledParagraph>
)

export const ContactInfo: React.FC = () => (
  <StyledWrapper>
    <StyledBox>
      <Subtitle text="Kontaktné informácie" />
      <Info link={googleMapUrl} name="Adresa" value={address} target="_blank" />
      <Info
        link={`tel:${phoneNumberToCall}`}
        name="Telefón"
        value={phoneNumber}
      />
      <Info link={`mailto:${email}`} name="Email" value={email} />
    </StyledBox>
    <StyledBox>
      <Subtitle text="Sociálne siete" />
      <Info
        link={facebookUrl}
        name="Facebook"
        value={facebookPageName}
        target="_blank"
      />
      <Info
        link={messengerUrl}
        name="Messenger"
        value={facebookPageName}
        target="_blank"
      />
    </StyledBox>
  </StyledWrapper>
)

export const Map: React.FC = () => (
  <StyledMap>
    <Iframe title="adresa" sourceUrl={googleMapFrameUrl} loadingType="lazy" />
  </StyledMap>
)
