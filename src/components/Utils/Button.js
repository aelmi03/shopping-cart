import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  padding: 1.4rem 4rem;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  border-radius: 50px;
  font-size: 1.8rem;
  transition: all 0.3s ease-in-out;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 540px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
`;

export default Button;
