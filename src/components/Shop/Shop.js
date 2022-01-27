import styled from "styled-components";
import ShopSideBar from "./ShopSideBar";

const Shop = () => {
  return (
    <ShopWrapper>
      <ShopSideBar />
    </ShopWrapper>
  );
};

const ShopWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  width: 100%;
  margin-top: 7rem;
`;

export default Shop;
