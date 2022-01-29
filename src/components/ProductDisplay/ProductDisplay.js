import React from "react";
import styled from "styled-components";
import allProducts from "../../data/allProducts";
import { useParams } from "react-router";

const ProductDisplay = (props) => {
  const { id } = useParams();
  const { name, description, price, imgSrc } = allProducts.find(
    (product) => product.id === id
  );
  return (
    <ProductDisplayWrapper>
      <ProductHeader>{name}</ProductHeader>
    </ProductDisplayWrapper>
  );
};

const ProductDisplayWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const ProductHeader = styled.h2`
  text-align: center;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
`;

export default ProductDisplay;
