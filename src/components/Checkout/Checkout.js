import React from "react";
import styled from "styled-components";
import CheckoutProducts from "./CheckoutProducts";
import { FaShoppingBag } from "react-icons/fa";

const Checkout = ({ cartProducts }) => {
  return (
    <CheckoutWrapper>
      <CheckoutTitle>Your Shopping Bag</CheckoutTitle>
      <CheckoutContent>
        <CheckoutProducts cartProducts={cartProducts} />
      </CheckoutContent>
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 4.5rem;
  flex-grow: 1;
`;

const CheckoutTitle = styled.h2`
  font-size: 3.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: center;
`;

const CheckoutContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4.5rem;
`;
export default Checkout;
