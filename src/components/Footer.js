import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Footer = (props) => {
  return (
    <FooterWrapper>
      Copyright © 2021 aelmi03
      <a href="https://github.com/aelmi03/shopping-cart">
        <FaGithub />
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  padding: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export default Footer;
