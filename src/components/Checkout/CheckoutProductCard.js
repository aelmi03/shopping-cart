import React from "react";
import styled from "styled-components";
import AmountPicker from "../Utils/AmountPicker";
import { FaRegWindowClose } from "react-icons/fa";

const CheckoutProductCard = ({ product }) => {
  return (
    <CheckoutProductCardWrapper>
      <TitleWrapper>
        <NameWrapper>{product.name}</NameWrapper>
        <FaRegWindowClose
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
      </TitleWrapper>
      <ImgWrapper src={product.imgSrc} />
      <AmountsWrapper>
        <AmountPicker value={50} style={{ fontSize: "1.7rem" }} />
        <PriceAmount>$1599.99</PriceAmount>
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
  @media (min-width: 768px) {
  }
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
