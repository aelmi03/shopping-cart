import styled from "styled-components";
const StyledHR = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  width: 100%;
`;
export default StyledHR;
