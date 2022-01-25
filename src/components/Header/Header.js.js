import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <StyledHeading>Cartmax</StyledHeading>
      <Navbar />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;
const StyledHeading = styled.header`
  font-size: 6rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.secondaryText};
`;

export default Header;
