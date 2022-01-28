import styled from "styled-components";
import ShopSideBar from "./ShopSideBar";
import allProducts from "../../data/allProducts";
import ProductCard from "./ProductCard";
import { keyframes } from "styled-components";
const Shop = () => {
  return (
    <ShopWrapper>
      <ShopSideBar />
      <CardsWrapper>
        {allProducts.map((card) => (
          <ProductCard
            imgSrc={card.imgSrc}
            name={card.name}
            price={card.price}
          />
        ))}
      </CardsWrapper>
    </ShopWrapper>
  );
};
const appearingAnimation = keyframes`
 0% { opacity:0 }
 100% {opacity:1 }
`;
const ShopWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  width: 100%;
  animation-name: ${appearingAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
  padding: 4rem;
  align-items: center;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.lightGray};
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3rem;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  animation-name: ${appearingAnimation};
  animation-duration: 2.8s;
  animation-iteration-count: 1;
`;

export default Shop;
