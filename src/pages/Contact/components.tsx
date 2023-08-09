import styled from "styled-components"
import config from "../../config.json"
import { Subtitle } from "../../components/Titles"
import { Typography } from "antd"

const { Paragraph, Link, Text } = Typography

const { googleMapUrl, googleMapFrameUrl } = config
const facebookPageName = config.socialMedia.facebook
const facebookUrl = config.links.facebook
const messengerUrl = config.links.messenger
const { address, phoneNumber, email } = config.contact

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
  justify-content: space-between;
  @media (max-width: 760px) {
    display: block;
  }
`

const StyledBox = styled.div`
  border-radius: 20px;
  box-shadow: ${config.tertiaryColor} 7px 7px 20px;
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
    box-shadow: ${config.tertiaryColor} 7px 7px 20px;
  }
`

const Iframe: React.FC<IframeProps> = ({ title, sourceUrl, loadingType }) => (
  <iframe title={title} src={sourceUrl} loading={loadingType} />
)

const Info: React.FC<InfoProps> = ({ name, value, link, target }) => (
  <Paragraph>
    <Text strong>{`${name}: `}</Text>
    <Link target={target} href={link}>
      {value}
    </Link>
  </Paragraph>
)

export const ContactInfo: React.FC = () => (
  <StyledWrapper>
    <StyledBox>
      <Subtitle text="Kontaktné informácie" />
      <Info link={googleMapUrl} name="Adresa" value={address} target="_blank" />
      <Info link={`tel:${phoneNumber}`} name="Telefón" value={phoneNumber} />
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
