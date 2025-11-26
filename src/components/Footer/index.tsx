import { LayoutFooter } from "../PageLayout"
import styled from "styled-components"
import {
  InstagramFilled,
  FacebookFilled,
  MessageFilled,
} from "@ant-design/icons"
import config from "../../config.json"
import { Space, Typography } from "antd"
import homeIcon from "../../assets/icons/home-icon.png"
import phoneIcon from "../../assets/icons/phone-icon.png"
import mailIcon from "../../assets/icons/mail-icon.png"

type Props = {
  children: any
  link: string
  hasMarginLeft?: boolean
}

const { Text } = Typography
const {
  primaryColor,
  secondaryColor,
  textColor,
  contact: { address, phoneNumber, email },
  links: { facebook, messenger, instagram },
} = config

const StyledText = styled(Text)`
  color: ${textColor};
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`

const FooterWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-right: auto;
  padding-left: auto;
  display: block;
  justify-content: space;
  align-items: center;
  background-color: ${primaryColor};
  box-sizing: border-box;
`
const FlexWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  @media (max-width: 870px) {
    display: block;
  }
`

const Section = styled.div`
  display: flex;
  flex: 0 100%;
  flex-direction: column;
  align-items: flex-start;
  border-left: 2px solid ${secondaryColor};
  @media (max-width: 870px) {
    margin-top: 20px;
  }
`

const SectionRight = styled(Section)`
  align-items: flex-end;
  border-left: none;
  margin-right: 10px;
  @media (max-width: 870px) {
    display: none;
  }
`

const SocialMediaLink = styled.a`
  margin-top: 10px;
  color: ${secondaryColor};
  transition: color 0.3s;
`

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  color: ${secondaryColor};
`

const StyledSpace = styled(Space)`
  margin-top: 8px;
`

const IconWithLink: React.FC<Props> = ({ children, link, hasMarginLeft }) => (
  <SocialMediaLink
    style={{ fontSize: "25px", marginLeft: hasMarginLeft ? "10px" : "0" }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </SocialMediaLink>
)

export const Footer: React.FC = () => (
  <LayoutFooter>
    <FooterWrapper>
      <FlexWrapper>
        <Section>
          <StyledText>Beauty Skin - Varín</StyledText>
          <StyledSpace>
            <IconWithLink link={facebook} hasMarginLeft>
              <FacebookFilled />
            </IconWithLink>
            <IconWithLink link={instagram}>
              <InstagramFilled />
            </IconWithLink>
            <IconWithLink link={messenger}>
              <MessageFilled />
            </IconWithLink>
          </StyledSpace>
        </Section>
        <SectionRight>
          <SocialMediaIcon src={homeIcon} alt="Address" />
          <SocialMediaIcon src={phoneIcon} alt="Phone" />
          <SocialMediaIcon src={mailIcon} alt="Email" />
        </SectionRight>
        <Section>
          <StyledText>{address}</StyledText>
          <StyledText>{phoneNumber}</StyledText>
          <StyledText>{email}</StyledText>
        </Section>
      </FlexWrapper>
    </FooterWrapper>
  </LayoutFooter>
)
