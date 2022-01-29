import React from "react";
import styled from "styled-components";
import Button from "../Utils/Button";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import AmountPicker from "../Utils/AmountPicker";

const ProductSideBar = ({
  price,
  amountInCart,
  onAdd,
  onMinus,
  onChangeValue,
  editCartProduct,
  cartProducts,
  id,
  product,
}) => {
  const getCorrectAmount = () => {
    let number = cartProducts.find((product) => product.id === id)?.amount || 0;
    console.log(number);
    return number + amountInCart;
  };
  return (
    <SideBarWrapper>
      <PriceHeading>Price : ${price}</PriceHeading>
      <AmountPicker
        value={amountInCart}
        onAdd={onAdd}
        onMinus={onMinus}
        onChangeValue={onChangeValue}
      />
      <ButtonsContainer>
        <GreenButton
          onClick={(e) => {
            e.stopPropagation();
            if (amountInCart === 0) return;
            editCartProduct(product, getCorrectAmount());
          }}
        >
          Add To Cart <FaShoppingCart />
        </GreenButton>
        <WhiteButton>
          Go To Checkout <FaShoppingBag />
        </WhiteButton>
      </ButtonsContainer>
    </SideBarWrapper>
  );
};

const GreenButton = styled(Button)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  color: ${({ theme }) => theme.colors.secondaryText};
  transition: all 0.5s ease-in-out;
  text-shadow: 0 0 2px ${({ theme }) => theme.colors.secondaryText};
  border-radius: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleX(0);
    border-radius: 20px;
    transition: transform 0.5s ease-in-out;
    z-index: -1;
    transform-origin: left;
    background-color: ${({ theme }) => theme.colors.secondaryText};
  }
  &:hover::before {
    transform: scaleX(1);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondaryLight};
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.secondary};
  }
`;

const WhiteButton = styled(GreenButton)`
  background-color: ${({ theme }) => theme.colors.secondaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  transition: all 0.5s ease-in-out;
  text-shadow: 0 0 2px ${({ theme }) => theme.colors.primaryText};
  &:before {
    background-color: ${({ theme }) => theme.colors.primaryText};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryText};
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.secondaryText};
  }
`;

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
  @media (min-width: 1024px) {
    height: 45rem;
  }
  @media (min-width: 1440px) {
    height: 55rem;
  }
`;

const PriceHeading = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
`;
export default ProductSideBar;
