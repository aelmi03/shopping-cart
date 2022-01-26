import styled from "styled-components";

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
          "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Old_Electronics_hero_1.jpg"
        }
      ></HomeImage>
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
  gap: 3rem;
  width: 100%;
  margin-top: 2rem;
  background-image: url("https://t4.ftcdn.net/jpg/01/72/31/87/360_F_172318701_44RdLwqTq3xs3NGHpCvcBfI588kdsPon.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
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
`;

const HomeButton = styled.button`
  padding: 2rem 8rem;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  border-radius: 50px;
  font-size: 2.3rem;
`;

const HomeImage = styled.img`
  width: 80%;
  min-height: 22rem;
  min-width: 28rem;
  border-radius: 12px;
`;

export default Home;
