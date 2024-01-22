import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 330px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  font-family: Roboto, Helvetica, sans-serif;
  @media (max-width: 716px) {
    width: 351px;
  }
  @media (max-width: 360px) {
    width: 280px; 
    height: 380px;
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`;

export const PosterOverlay = styled.div`
  content: "";
  position: absolute;
  bottom: -180px;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #1064a6, 50%, transparent);
  transition: 0.5s;
  z-index: 1;
`;

export const PosterImage = styled.img`
  width: 100%;
  transition: 0.5s;

  ${CardContainer}:hover & {
    transform: translateY(-50px);
    filter: blur(5px);
  }
`;

export const DetailsContainer = styled.div`
  position: absolute;
  bottom: -75px;
  left: 0;
  padding: 20px;
  width: 100%;
  z-index: 1;
  transition: 0.5s;
  ${CardContainer}:hover & {
    bottom: -20px;
  } 
`;

export const InfoContainer = styled.div`
  color: white;
  opacity: 0;
  height: 50px;
  ${CardContainer}:hover & {
    transition: 1s;
    opacity: 1;
  }
`;

export const RatingContainer = styled.div`
  position: relative;
  padding: 5px 0;
`;

export const RatingSpan = styled.span`
  color: #296ebd;
  font-size: 1em;
  font-weight: bold;
`;

export const DepartmenTitle = styled.h1`
  text-align: center;
  height: 110px;
  padding-top: 45px;
  /* color: white; */
`;

export const MembersDiv = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1066px) {
    height: 1100px;
  }
  @media (max-width: 716px) {
    height: 1400px;
  }
`;

export const MainSTaff = styled.div`
  width: 100%;
  height: 500px;
  @media (max-width: 1066px) {
    height: 1100px;
  }
  @media (max-width: 716px) {
    height: 1360px;
  }
`;
