import styled from "styled-components";
import ShopSideBar from "./ShopSideBar";

const Shop = () => {
  return (
    <ShopWrapper>
      <ShopSideBar />
      <h1>Hello</h1>
    </ShopWrapper>
  );
};

const ShopWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  width: 100%;
  padding: 3rem;
  align-items: center;
  flex-grow: 1;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default Shop;
