import React from "react";
import styled from "styled-components";
import CheckoutProducts from "./CheckoutProducts";
import CheckoutPrice from "./CheckoutPrice";
import EmptyCart from "./EmptyCart";

const Checkout = ({ cartProducts, editCartProduct, totalValue }) => {
  return (
    <CheckoutWrapper>
      <CheckoutTitle>Your Shopping Bag</CheckoutTitle>
      {cartProducts.length !== 0 ? (
        <React.Fragment>
          <CheckoutContent>
            <CheckoutProducts
              cartProducts={cartProducts}
              editCartProduct={editCartProduct}
            />
            <CheckoutPrice totalValue={totalValue} />
          </CheckoutContent>
        </React.Fragment>
      ) : (
        <EmptyCart />
      )}
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 4.5rem;
  flex-grow: 1;
  padding: 2rem;
`;

const CheckoutTitle = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 6rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3.4rem;
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
