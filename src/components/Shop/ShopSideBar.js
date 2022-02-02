import styled from "styled-components";
import allProducts from "../../data/allProducts";
import computers from "../../data/computers";
import laptops from "../../data/laptops";
import tablets from "../../data/tablets";
import phones from "../../data/phones";
import headphones from "../../data/headphones";

const ShopSideBar = ({ category, changeCategory }) => {
  return (
    <ShopWrapper>
      <ShopHeading>
        <ShopTitle>Shop /</ShopTitle>
        <ShopCategory>{category}</ShopCategory>
      </ShopHeading>
      <ShopCategories>
        <Category onClick={changeCategory.bind(this, "Computers", computers)}>
          Computers
        </Category>
        <Category onClick={changeCategory.bind(this, "Laptops", laptops)}>
          Laptops
        </Category>
        <Category onClick={changeCategory.bind(this, "Tablets", tablets)}>
          Tablets
        </Category>
        <Category onClick={changeCategory.bind(this, "Phones", phones)}>
          Phones
        </Category>
        <Category onClick={changeCategory.bind(this, "Headphones", headphones)}>
          Headphones
        </Category>
        <Category
          onClick={changeCategory.bind(this, "All Products", allProducts)}
        >
          All Products
        </Category>
      </ShopCategories>
    </ShopWrapper>
  );
};

const ShopWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;
  justify-content: center;
  align-items: flex-start;
`;
const ShopHeading = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.2rem;
  width: 28rem;
`;

const ShopTitle = styled.h3`
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ShopCategory = styled.h2`
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 3.8rem;
  }
`;

const ShopCategories = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.9rem;
`;

const Category = styled.li`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-size: 2.4rem;
  transition: all 0.4s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.secondaryDark};
    cursor: pointer;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 10;
    margin-bottom: 4px;
    height: 8px;
    transform-origin: left;
    background-color: ${({ theme }) => theme.colors.neutral};
    opacity: 0.3;
    transition: transform 0.4s ease-in-out;
    transform: scaleX(0);
  }
  &:hover::before {
    transform: scaleX(1);
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default ShopSideBar;
