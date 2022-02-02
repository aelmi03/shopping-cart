import styled from "styled-components";
import ShopSideBar from "./ShopSideBar";
import allProducts from "../../data/allProducts";
import ProductCard from "./ProductCard";
import ShopContent from "./ShopContent";
import { useState } from "react";
import { breatheAnimation } from "../Utils/animations";
import { useSearchParams } from "react-router-dom";
const Shop = ({ editCartProduct, cartProducts }) => {
  const [products, setProducts] = useState(allProducts);
  const [category, setCategory] = useState("All Products");
  let [params, setParams] = useSearchParams();
  const getProducts = () => {
    return products
      .filter((product) => {
        const lowerCaseFilter = params.get("filter")?.toLowerCase() || "";
        const lowerCaseProductName = product.name.toLowerCase();
        return lowerCaseProductName.includes(lowerCaseFilter);
      })
      .map((product) => (
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

  const setFilter = (newValue) => {
    if (!newValue.target.value) {
      setParams({});
      return;
    }
    setParams({ filter: newValue.target.value });
  };
  return (
    <ShopContentWrapper>
      <ShopSideBar category={category} changeCategory={changeCategory} />
      <ShopContent getProducts={getProducts} setFilter={setFilter} />
    </ShopContentWrapper>
  );
};

const ShopContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  width: 100%;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
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

export default Shop;
