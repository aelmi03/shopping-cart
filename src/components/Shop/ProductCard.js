import React from "react";
import styled, { css } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import Button from "../Utils/Button";

const ProductCard = ({
  product,
  editCartProduct,
  id,
  cartProducts,
  isRelatedProduct,
}) => {
  const { name, price, imgSrc } = product;
  const navigate = useNavigate();
  return (
    <ProductWrapper
      onClick={() => navigate(`/shop/${id}`)}
      isRelatedProduct={isRelatedProduct}
      style={
        isRelatedProduct
          ? { height: "38rem", padding: "0.5rem", width: "32rem" }
          : {}
      }
    >
      <ImgWrapper src={imgSrc} isRelatedProduct={isRelatedProduct}></ImgWrapper>
      <StyledHR></StyledHR>
      <NameWrapper>{name}</NameWrapper>
      <PriceWrapper>${price}</PriceWrapper>
      {!isRelatedProduct && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            const productItemAmount =
              cartProducts.find((product) => product.id === id)?.amount + 1 ||
              1;
            if (productItemAmount >= 99) return;

            editCartProduct(product, productItemAmount);
          }}
        >
          Add To Cart <FaShoppingCart />
        </Button>
      )}
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
  ${(props) =>
    props.isRelatedProduct &&
    css`
      border: 0.5px solid ${({ theme }) => theme.colors.primary};
      gap: 0rem;
    `}
`;

const ImgWrapper = styled.img`
  width: 20rem;
  height: 20rem;
  ${(props) =>
    props.isRelatedProduct &&
    css`
      width: 15rem;
      height: 15rem;
    `}
`;

const NameWrapper = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  @media (min-width: 768px) {
  }
`;

const PriceWrapper = styled.h4`
  font-size: 2.7rem;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.colors.secondaryText};
  @media (min-width: 768px) {
    font-size: 2.9rem;
  }
`;

export const StyledHR = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  width: 100%;
`;

export default ProductCard;
