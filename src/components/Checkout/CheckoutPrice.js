import React from "react";
import { FaMoneyCheck } from "react-icons/fa";
import styled from "styled-components";
import { StyledHR } from "../Shop/ProductCard";
import Button from "../Utils/Button";

const CheckoutPrice = (props) => {
  return (
    <CheckoutPriceWrapper>
      <CheckoutContainer>
        <BoldText>SUBTOTAL</BoldText>
        <PriceText>$1000.99 USD</PriceText>
      </CheckoutContainer>
      <CheckoutContainer>
        <BoldText>SHIPPING</BoldText>
        <PriceText>FREE</PriceText>
      </CheckoutContainer>
      <CheckoutContainer>
        <BoldText>TAX</BoldText>
        <PriceText>$0.00</PriceText>
      </CheckoutContainer>
      <StyledHR style={{ marginTop: "1rem" }} />
      <TotalPriceText>Total : $1000.99 USD</TotalPriceText>
      <Button
        style={{ padding: "1rem 3rem", fontSize: "2rem", width: "26rem" }}
      >
        Checkout <FaMoneyCheck />
      </Button>
    </CheckoutPriceWrapper>
  );
};

const CheckoutPriceWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 31rem;
  padding: 0.5rem;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  height: 25rem;
`;

const CheckoutContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

const BoldText = styled.h3`
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

const PriceText = styled.h3`
  font-size: 1.7rem;
  font-family: "Inconsolata", sans-serif;
`;

const TotalPriceText = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;
export default CheckoutPrice;
