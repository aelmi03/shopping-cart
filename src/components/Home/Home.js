import styled, { keyframes } from "styled-components";

const Home = (props) => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <HomeDescription>#1 RATED STORE IN NORTH AMERICA</HomeDescription>
        <HomeHeader>
          Get these limited time deals before they sell out!
        </HomeHeader>
        <HomeButton>Shop Now</HomeButton>
      </ContentWrapper>
      <HomeImage
        src={
          "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
      ></HomeImage>
    </HomeWrapper>
  );
};
const breatheAnimation = keyframes`
 0% { opacity:0 }
 100% {opacity:1 }
`;
const movingAnimation = keyframes`
 0% { left:100%; }
 100% {left:0%; }
`;
const HomeWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-grow: 1;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  margin-top: 5rem;
  background-image: url("https://static.vecteezy.com/system/resources/previews/004/708/621/non_2x/green-and-white-background-design-simple-and-flat-green-background-design-modern-arrangement-illustration-vector.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (min-width: 1200px) {
    flex-flow: row nowrap;
    justify-content: center;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
  @media (min-width: 1200px) {
    width: 40%;
  }
`;

const HomeDescription = styled.h2`
  font-size: 2.1rem;
  font-family: "Poppins", monospace;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral};
`;

const HomeHeader = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.secondaryText};
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
`;

const HomeButton = styled.button`
  padding: 2rem 8rem;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  border-radius: 50px;
  font-size: 2.7rem;
  transition: all 0.3s ease-in-out;
  animation-name: ${breatheAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

const HomeImage = styled.img`
  position: relative;
  width: 80%;
  min-height: 22rem;
  min-width: 28rem;
  border-radius: 20px;
  animation-name: ${movingAnimation};
  animation-duration: 3.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  left: 100%;
  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export default Home;
