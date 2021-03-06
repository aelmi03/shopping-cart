import styled from "styled-components";
import homeImage from "../../assets/home-image.jpeg";
import Button from "../Utils/Button";
import { useNavigate } from "react-router";
import { breatheAnimation, movingAnimation } from "../Utils/animations";
const Home = () => {
  let navigate = useNavigate();
  return (
    <HomeWrapper>
      <ContentWrapper>
        <HomeDescription>#1 RATED STORE IN NORTH AMERICA</HomeDescription>
        <HomeHeader>
          Get these limited time deals before they sell out!
        </HomeHeader>
        <Button
          style={{ padding: "2rem 6rem", fontSize: "2.7rem", width: "27rem" }}
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </Button>
      </ContentWrapper>
      <HomeImage src={homeImage}></HomeImage>
    </HomeWrapper>
  );
};

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
  @media (max-width: 767px) {
    margin-bottom: 2rem;
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
  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export default Home;
