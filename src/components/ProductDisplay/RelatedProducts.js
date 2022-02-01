import React from "react";
import SectionHeader from "../Utils/SectionHeader";
import styled from "styled-components";
import StyledHR from "../Utils/StyledHR";
import phones from "../../data/phones";
import tablets from "../../data/tablets";
import laptops from "../../data/laptops";
import headphones from "../../data/headphones";
import computers from "../../data/computers";
import { getSimiliarItems } from "../Utils/utils";
import ProductCard from "../Shop/ProductCard";
const RelatedProducts = ({ product }) => {
  const getCategoryArrayOfProduct = () => {
    if (phones.some((item) => item.id === product.id)) {
      return phones;
    } else if (tablets.some((item) => item.id === product.id)) {
      return tablets;
    } else if (laptops.some((item) => item.id === product.id)) {
      return laptops;
    } else if (headphones.some((item) => item.id === product.id)) {
      return headphones;
    } else {
      return computers;
    }
  };
  const getRelatedProducts = () => {
    const categoryArray = getCategoryArrayOfProduct();
    return getSimiliarItems(product, categoryArray, 6).map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        id={product.id}
        isRelatedProduct={true}
      />
    ));
  };
  return (
    <RelatedProductsWrapper>
      <SectionHeader>Related Products</SectionHeader>
      <StyledHR />
      <RelatedProductsContainer>
        {getRelatedProducts()}
      </RelatedProductsContainer>
    </RelatedProductsWrapper>
  );
};

const RelatedProductsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  gap: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const RelatedProductsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 2.4rem;
  margin-top: 3.5rem;
`;
export default RelatedProducts;
