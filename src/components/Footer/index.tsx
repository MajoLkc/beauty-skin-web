import { LayoutFooter } from "../PageLayout"
import styled from "styled-components"
import config from "../../config.json"
import { Space, Typography } from "antd"
import fbLogo from "../../assets/images/fb-logo.png"
import messengerLogo from "../../assets/icons/messenger-pink.png"
import homeIcon from "../../assets/icons/home-icon.png"
import phoneIcon from "../../assets/icons/phone-icon.png"
import mailIcon from "../../assets/icons/mail-icon.png"

const { Text } = Typography

const StyledText = styled(Text)`
  color: ${config.textColor};
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
  background-color: ${config.primaryColor};
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
  border-left: 2px solid ${config.secondaryColor};
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
  color: ${config.secondaryColor};
  transition: color 0.3s;
  &:hover {
    color: ${config.primaryColor};
  }
`

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  color: ${config.secondaryColor};
`

const StyledSpace = styled(Space)`
  margin-top: 8px;
`

export const Footer: React.FC = () => (
  <LayoutFooter>
    <FooterWrapper>
      <FlexWrapper>
        <Section>
          <StyledText>Beauty Skin - Varín</StyledText>
          <StyledSpace>
            <SocialMediaLink
              href="https://www.facebook.com/profile.php?id=100090645713719"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon src={fbLogo} alt="Facebook page" />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.facebook.com/profile.php?id=100090645713719"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon src={messengerLogo} alt="Facebook page" />
            </SocialMediaLink>
          </StyledSpace>
        </Section>
        <SectionRight>
          <SocialMediaIcon src={homeIcon} alt="Address" />
          <SocialMediaIcon src={phoneIcon} alt="Phone" />
          <SocialMediaIcon src={mailIcon} alt="Email" />
        </SectionRight>
        <Section>
          <StyledText> Jozefa Martinčeka 116, 013 03, Varín </StyledText>
          <StyledText> +421 905 916 124 </StyledText>
          <StyledText> beautyskinvarin@gmail.com </StyledText>
        </Section>
      </FlexWrapper>
    </FooterWrapper>
  </LayoutFooter>
)
