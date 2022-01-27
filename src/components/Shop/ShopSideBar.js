import styled from "styled-components";

const ShopSideBar = (props) => {
  return (
    <ShopWrapper>
      <ShopHeading>
        <ShopTitle>Shop /</ShopTitle>
        <ShopCategory>All Products</ShopCategory>
      </ShopHeading>
      <ShopCategories>
        <Category>Computers</Category>
        <Category>Laptops</Category>
        <Category>Tablets</Category>
        <Category>Phones</Category>
        <Category>Headphones</Category>
        <Category>All Products</Category>
      </ShopCategories>
    </ShopWrapper>
  );
};

const ShopWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;
const ShopHeading = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.2rem;
`;

const ShopTitle = styled.h3`
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
`;

const ShopCategory = styled.h2`
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

const ShopCategories = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.9rem;
`;

const Category = styled.li`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2.4rem;
`;

export default ShopSideBar;
