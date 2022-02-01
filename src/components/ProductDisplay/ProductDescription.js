import React from "react";
import styled from "styled-components";
import StyledHR from "../Utils/StyledHR";
const ProductDescription = ({ description }) => {
  return (
    <DescriptionWrapper>
      <DescriptionTitle>Description</DescriptionTitle>
      <StyledHR />
      <DescriptionContent>{description}</DescriptionContent>
    </DescriptionWrapper>
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 90%;
  }
`;

const DescriptionTitle = styled.h2`
  font-size: 2.9rem;
  font-weight: bold;
  font-family: "Montserrat";
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const DescriptionContent = styled.p`
  font-size: 2.2rem;
  font-family: "Poppins";
  @media (min-width: 768px) {
    font-size: 2.35rem;
  }
`;

export default ProductDescription;
