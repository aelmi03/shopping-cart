import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/shop">Shop</StyledLink>
      <StyledLink to="/checkout">
        <IconWrapper className="icon-wrapper">
          <FaShoppingCart />
          <CartNumberWrapper>100</CartNumberWrapper>
        </IconWrapper>
      </StyledLink>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  > .nav-link {
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
  > a {
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: "Poppins", sans-serif;
    position: relative;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin-top: 50px;
      z-index: 10;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.primaryText};
      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
  @media (min-width: 768px) {
    width: 45%;
  }
`;
const CartNumberWrapper = styled.div`
  font-size: 1.4rem;
  display: flex;
  margin-bottom: 2.2rem;
  justify-content: center;
  background-color: #ffffff;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    59% 75%,
    9% 100%,
    26% 75%,
    0% 75%
  );

  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: "Poppins", sans-serif;
  padding: 0.45rem;
  z-index: 5;
`;
const IconWrapper = styled.div`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  font-size: 2.6rem;
  padding: 1rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  align-items: center;
  clip-path: circle(50% at 50% 50%);
  z-index: 1;
`;
export default Navbar;
