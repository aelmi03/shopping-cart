import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/shop">Shop</StyledLink>
      <StyledLink to="/checkout">
        <IconWrapper className="icon-wrapper">
          <FaCartArrowDown />
        </IconWrapper>
      </StyledLink>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  > .nav-link {
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
  > a {
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: "Poppins", sans-serif;
  }
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(50% at 50% 50%);
`;
export default Navbar;
