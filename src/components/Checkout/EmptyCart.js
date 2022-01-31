import Button from "../Utils/Button";
import { FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <EmptyCartWrapper>
      <FaShoppingBag
        style={{
          width: "20rem",
          height: "20rem",
        }}
      />
      <EmptyContentContainer>
        <EmptyItemsText>
          Your shopping cart is empty, please browse through our items in the
          shop.
        </EmptyItemsText>
        <Button
          onClick={() => {
            navigate("/shop");
          }}
          style={{ padding: "2rem 5rem" }}
        >
          Browse Products
        </Button>
      </EmptyContentContainer>
    </EmptyCartWrapper>
  );
};

const EmptyCartWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 5rem;
`;
const EmptyItemsText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 2.4rem;
  text-align: center;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.7rem;
  }
`;

const EmptyContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3.9rem;
`;

export default EmptyCart;
