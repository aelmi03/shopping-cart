import React from "react";
import styled from "styled-components";
import allProducts from "../../data/allProducts";
import ProductSideBar from "./ProductSidebar";
import { useParams } from "react-router";
import ProductDescription from "./ProductDescription";

const ProductDisplay = (props) => {
  const { id } = useParams();
  const { name, description, price, imgSrc } = allProducts.find(
    (product) => product.id === id
  );
  return (
    <ProductDisplayWrapper>
      <ProductHeader>{name}</ProductHeader>
      <ProductContentWrapper>
        <ProductImage src={imgSrc} />
        <ProductSideBar price={price} />
      </ProductContentWrapper>
      <ProductDescription description={description} />
    </ProductDisplayWrapper>
  );
};

const ProductDisplayWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5.5rem;
  padding: 2.5rem 1.5rem;
  width: 100%;
`;

const ProductHeader = styled.h2`
  text-align: center;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.3rem;
  }
`;

const ProductContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
`;

const ProductImage = styled.img`
  width: 30rem;
  height: 30rem;
  @media (min-width: 768px) {
    width: 35rem;
    height: 35rem;
  }
  @media (min-width: 1024px) {
    width: 45rem;
    height: 45rem;
  }
  @media (min-width: 1440px) {
    width: 55rem;
    height: 55rem;
  }
`;

export default ProductDisplay;
