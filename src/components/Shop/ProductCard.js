import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";

const ProductCard = ({ product, editCartProduct, id, cartProducts }) => {
  const { name, price, imgSrc } = product;
  const navigate = useNavigate();
  return (
    <ProductWrapper onClick={() => navigate(`/shop/${id}`, { replace: true })}>
      <ImgWrapper src={imgSrc}></ImgWrapper>
      <StyledHR></StyledHR>
      <NameWrapper>{name}</NameWrapper>
      <PriceWrapper>${price}</PriceWrapper>
      <ButtonWrapper
        onClick={(e) => {
          e.stopPropagation();
          editCartProduct(
            product,
            cartProducts.find((product) => product.id === id)?.amount + 1 || 1
          );
        }}
      >
        Add To Cart <FaShoppingCart />
      </ButtonWrapper>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2.5rem;
  width: 30rem;
  gap: 2rem;
  height: 60rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primaryText};
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 35%) 3px 3px 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    width: 40rem;
    height: 55rem;
    justify-content: space-evenly;
  }
`;

const ImgWrapper = styled.img`
  width: 20rem;
  height: 20rem;
`;

const NameWrapper = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  @media (min-width: 768px) {
  }
`;

const PriceWrapper = styled.h4`
  font-size: 2.4rem;
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.colors.secondaryText};
  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  padding: 1.4rem 4rem;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  border-radius: 50px;
  font-size: 1.8rem;
  transition: all 0.3s ease-in-out;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const StyledHR = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  width: 100%;
`;

export default ProductCard;
