import React from "react";
import SectionHeader from "../Utils/SectionHeader";
import styled from "styled-components";
import StyledHR from "../Utils/StyledHR";
import { getSimiliarItems } from "../Utils/utils";
const RelatedProducts = (props) => {
  return (
    <RelatedProductsWrapper>
      <SectionHeader>Related Products</SectionHeader>
      <RelatedProductsContainer>
        <StyledHR />
      </RelatedProductsContainer>
    </RelatedProductsWrapper>
  );
};

const RelatedProductsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  gap: 2.5rem;
  margin-top: 6.5rem;
`;

const RelatedProductsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1.6rem;
`;
export default RelatedProducts;
