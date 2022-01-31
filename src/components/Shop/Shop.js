import styled from "styled-components";
import ShopSideBar from "./ShopSideBar";
import allProducts from "../../data/allProducts";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { keyframes } from "styled-components";
const Shop = ({ editCartProduct, cartProducts }) => {
  const [products, setProducts] = useState(allProducts);
  const [category, setCategory] = useState("All Products");
  const getProducts = () => {
    return products.map((product) => (
      <ProductCard
        product={product}
        key={product.id}
        id={product.id}
        editCartProduct={editCartProduct}
        cartProducts={cartProducts}
      />
    ));
  };
  const changeCategory = (categoryName, products) => {
    setProducts(products);
    setCategory(categoryName);
  };
  return (
    <ShopWrapper>
      <ShopSideBar category={category} changeCategory={changeCategory} />
      <CardsWrapper>{getProducts()}</CardsWrapper>
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
`;

export default Shop;
