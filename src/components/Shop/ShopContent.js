import React from "react";
import styled from "styled-components";

const ShopContent = ({ getProducts, setFilter }) => {
  return (
    <ShopContentWrapper>
      <InputWrapper>
        <SearchText>Search: </SearchText>
        <StyledInput onChange={setFilter} />
      </InputWrapper>
      <CardsWrapper>{getProducts()}</CardsWrapper>
    </ShopContentWrapper>
  );
};

const ShopContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  gap: 4rem;
  margin-top: 4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
  @media (min-width: 540px) {
    flex-flow: row nowrap;
  }
`;

const SearchText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 2.25rem;
`;

const StyledInput = styled.input`
  outline: none;
  box-shadow: rgb(0 0 0 / 35%) 3px 3px 12px;
  padding: 0.4rem 0.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  border-radius: 10px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3rem;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export default ShopContent;
