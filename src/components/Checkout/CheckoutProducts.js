import React from "react";
import styled from "styled-components";
import CheckoutProductCard from "./CheckoutProductCard";

const CheckoutProducts = ({ cartProducts }) => {
  return (
    <CheckoutProductsWrapper>
      {cartProducts.map((product) => (
        <CheckoutProductCard product={product} key={product.id} />
      ))}
    </CheckoutProductsWrapper>
  );
};

const CheckoutProductsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 2.5rem;
  width: 100%;
  height: 65vh;
  overflow: scroll;
`;
export default CheckoutProducts;
