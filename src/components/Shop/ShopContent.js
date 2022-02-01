import React from "react";
import styled from "styled-components";
import StyledInput from "../Utils/StyledInput";
const ShopContent = ({ getProducts, setFilter }) => {
  return (
    <ShopContentWrapper>
      <InputWrapper>
        <SearchText>Search: </SearchText>
        <StyledInput onChange={setFilter} />
      </InputWrapper>
      <CardsWrapper>
        {getProducts().length > 0 ? (
          getProducts()
        ) : (
          <SearchText
            style={{
              fontFamily: "Poppins",
              fontWeight: "400",
              marginTop: "5rem",
            }}
          >
            There are no products that match your filter :(
          </SearchText>
        )}
      </CardsWrapper>
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
  text-align: center;
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
