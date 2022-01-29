import React from "react";
import styled from "styled-components";
import { ButtonWrapper } from "../Shop/ProductCard";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

const ProductSideBar = (props) => {
  return (
    <SideBarWrapper>
      <PriceHeading>Price : $1999.99</PriceHeading>
      <ButtonsContainer>
        <ButtonWrapper>
          Add To Cart <FaShoppingCart />
        </ButtonWrapper>
        <ButtonWrapper>
          Go To Checkout <FaShoppingBag />
        </ButtonWrapper>
      </ButtonsContainer>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  height: 50rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  padding: 4rem;
`;

const PriceHeading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2.9rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
`;
export default ProductSideBar;
