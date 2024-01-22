import styled from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TestImonialsHeading = styled.div`
  letter-spacing: 1px;
  margin: 30px 0;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TestImonialHeadingH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  background-color: black;
  color: white;
  padding: 10px 20px;
`;
export const TestImonialHeadingSpan = styled.span`
  font-size: 1.3rem;
  color: black;
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 500px;
  box-shadow: 2px 2px 30px black;
  background-color: white;
  padding: 20px;
  margin: 15px;
  cursor: pointer;
`;

export const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Reviews = styled.div`
  color: yellow;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNameStrong = styled.strong`
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  color: #296ebd;
`;

export const UserNameSpan = styled.span`
  font-size: 0.8rem;
`;

export const ClientComments = styled.div``;

export const ClientCommentsP = styled.p`
  font-size: 0.9rem;
`;
