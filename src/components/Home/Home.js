import styled, { keyframes } from "styled-components";
import homeImage from "../../assets/home-image.jpeg";
import Button from "../Utils/Button";
const Home = (props) => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <HomeDescription>#1 RATED STORE IN NORTH AMERICA</HomeDescription>
        <HomeHeader>
          Get these limited time deals before they sell out!
        </HomeHeader>
        <Button>Shop Now</Button>
      </ContentWrapper>
      <HomeImage src={homeImage}></HomeImage>
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
  width: 80%;
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
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.neutral};
  @media (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

const HomeHeader = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.secondaryText};
  @media (min-width: 1024px) {
    font-size: 5rem;
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
