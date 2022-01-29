import React from "react";
import styled from "styled-components";

const ProductDescription = ({ description }) => {
  return (
    <DescriptionWrapper>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionHR />
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
`;

const DescriptionTitle = styled.h2`
  font-size: 2.9rem;
  font-weight: bold;
  font-family: Inconsolata;
  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`;

const DescriptionHR = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  width: 97vw;
`;

const DescriptionContent = styled.p`
  font-size: 2.2rem;
  font-family: "Inconsolata", sans-serif;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default ProductDescription;
