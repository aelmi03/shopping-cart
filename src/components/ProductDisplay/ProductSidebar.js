import React from "react";
import styled from "styled-components";
import Button from "../Utils/Button";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import AmountPicker from "../Utils/AmountPicker";

const ProductSideBar = (props) => {
  return (
    <SideBarWrapper>
      <PriceHeading>Price : $1999.99</PriceHeading>
      <AmountPicker />
      <ButtonsContainer>
        <Button>
          Add To Cart <FaShoppingCart />
        </Button>
        <Button>
          Go To Checkout <FaShoppingBag />
        </Button>
      </ButtonsContainer>
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  height: 40rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  border: 1px solid black;
  padding: 3rem;
`;

const PriceHeading = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
`;
export default ProductSideBar;
