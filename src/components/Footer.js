import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import StyledInput from "./Utils/StyledInput";
const Footer = (props) => {
  const removeDefault = (e) => {
    e.preventDefault();
  };
  return (
    <FooterWrapper>
      <FooterContent>
        <LinksSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink onClick={removeDefault} href="">
            FAQ
          </FooterLink>
          <FooterLink onClick={removeDefault} href="">
            Shipping
          </FooterLink>
          <FooterLink onClick={removeDefault} href="">
            Return Policies
          </FooterLink>
          <FooterLink onClick={removeDefault} href="">
            Contact us
          </FooterLink>
        </LinksSection>
        <LinksSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterLink onClick={removeDefault} href="">
            Our Goals
          </FooterLink>
          <FooterLink onClick={removeDefault} href="">
            Store Locations
          </FooterLink>
          <FooterLink onClick={removeDefault} href="">
            Apply here
          </FooterLink>
          <FooterLink onClick={removeDefault} href="">
            Promotions
          </FooterLink>
        </LinksSection>
        <EmailSection
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you so much for signing up!");
          }}
        >
          <FooterTitle style={{ fontWeight: "400", fontFamily: "Poppins" }}>
            Join Us
          </FooterTitle>
          <EmailText>Sign up now for the latest updates and deals!</EmailText>
          <StyledInput
            placeholder={"Email Address"}
            aria-required
            type="email"
          />
        </EmailSection>
      </FooterContent>
      <GithubLinkContainer>
        Copyright © 2021 aelmi03
        <a href="https://github.com/aelmi03/shopping-cart">
          <FaGithub />
        </a>
      </GithubLinkContainer>
    </FooterWrapper>
  );
};

const FooterContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;
`;

const EmailSection = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;
const EmailText = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryLight};
`;
const LinksSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

const FooterTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const FooterLink = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  &:hover {
    text-decoration: underline;
  }
`;
const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  width: 100%;
  max-width: 100%;
  justify-content: space-evenly;
  padding: 2rem 0rem 0rem 0rem;
  height: 320px;
  bottom: 0;
`;

const GithubLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryText};
  height: 50px;
  border: none;
  width: 100%;
  margin-top: 2rem;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export default Footer;
