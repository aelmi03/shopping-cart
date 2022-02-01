import React from "react";
import styled from "styled-components";
import AmountPicker from "../Utils/AmountPicker";
import { FaRegWindowClose } from "react-icons/fa";

const CheckoutProductCard = ({ product, editCartProduct }) => {
  const { imgSrc, amount, name, price } = product;
  return (
    <CheckoutProductCardWrapper>
      <TitleWrapper>
        <NameWrapper>{name}</NameWrapper>
        <FaRegWindowClose
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
          onClick={() => editCartProduct(product, 0)}
        />
      </TitleWrapper>
      <ImgWrapper src={imgSrc} />
      <AmountsWrapper>
        <AmountPicker
          value={amount}
          style={{ fontSize: "1.8rem", distance: "1rem" }}
          onAdd={() => {
            if (product.amount >= 99) return;
            editCartProduct(product, product.amount + 1);
          }}
          onMinus={editCartProduct.bind(this, product, product.amount - 1)}
          onChangeValue={(newAmount) => editCartProduct(product, newAmount)}
        />
        <PriceAmount>{`$${price}`}</PriceAmount>
      </AmountsWrapper>
    </CheckoutProductCardWrapper>
  );
};

const CheckoutProductCardWrapper = styled.div`
  width: 32rem;
  display: flex;
  padding: 0.5rem;
  gap: 2rem;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral};
`;

const ImgWrapper = styled.img`
  width: 14rem;
  height: 14rem;
`;

const NameWrapper = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 1.7rem;
  width: 80%;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const AmountsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const PriceAmount = styled.h4`
  font-size: "Montserrat", sans-serif;
  font-size: 1.5rem;
`;
export default CheckoutProductCard;
