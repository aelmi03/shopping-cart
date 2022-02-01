import React from "react";
import styled from "styled-components";
import StyledHR from "../Utils/StyledHR";
import SectionHeader from "../Utils/SectionHeader";
const ProductDescription = ({ description }) => {
  return (
    <DescriptionWrapper>
      <SectionHeader>Description</SectionHeader>
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

const DescriptionContent = styled.p`
  font-size: 1.9rem;
  font-family: "Poppins";
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default ProductDescription;
