import React from "react";
import styled from "styled-components";
import CheckoutProducts from "./CheckoutProducts";
import CheckoutPrice from "./CheckoutPrice";
import { FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
const Checkout = ({ cartProducts }) => {
  return (
    <CheckoutWrapper>
      <CheckoutTitle>
        Your Shopping Bag <FaShoppingBag />
      </CheckoutTitle>
      <CheckoutContent>
        <CheckoutProducts cartProducts={cartProducts} />
        <CheckoutPrice />
      </CheckoutContent>
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  gap: 4.5rem;
  flex-grow: 1;
  padding: 2rem;
`;

const CheckoutTitle = styled.h2`
  font-size: 3.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3.9rem;
  }
`;

const CheckoutContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4.5rem;
  align-items: center;
  @media (min-width: 768px) {
    flex-flow: row nowrap;
  }
`;
export default Checkout;
