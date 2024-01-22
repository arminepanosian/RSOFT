import styled from "styled-components";

export const ServicesMain = styled.div`
  width: 100%;
  height: 520px;
  @media (max-width: 1100px) {
    height: 850px;
  }
  @media (max-width: 736px) {
    height: 1100px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 100px;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  padding-top: 25px;
`;

export const Part2 = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 1100px) {
    height: 700px;
  }
  @media (max-width: 736px) {
    height: 900px;
  }
`;
export const Card = styled.div`
  width: 350px;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const CardIcon = styled.h1`
  text-align: center;
  color: #296ebd;  
  font-size: 100px;
  padding-top: 60px;
`

export const CardTitle = styled.h2`
  text-align: center;
`

export const CardAbout = styled.p`
  text-align: center;
  padding-top: 15px;
`

