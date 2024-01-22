import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainMenu = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
`;

export const LogoDiv = styled(Link)`
  width: 130px;
  height: 60px;
  float: left;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  padding-top: 14px;
  text-align: center;
  color: #296ebd;
`;

export const SpanR = styled.span`
  color: white;
`;

export const DepartmentsContainer = styled.div`
  width: 400px;
  height: 60px;
  @media (max-width: 665px) {
    display: none;
  }
`;

export const Departments = styled(Link)`
  width: 25%;
  height: 60px;
  float: left;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: bold;
  text-decoration: none;
  padding-top: 24px;
  text-align: center;
  color: ${({ $active }) => ($active === true ? "white" : "silver")};
  &:hover {
    color: white;
  }
`;

export const LanguageRamka = styled.div`
  width: 70px;
  height: 37px;
  background-color: silver;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 12px;
  padding-top: 4px;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: bold;
  margin-right: 20px;
  @media(max-width: 675px){
    position: absolute;
    right: 70px;
    z-index: 20;
  }

`;

export const LanguageDiv = styled.div`
  width: 70px;
  height: 105px;
  background-color: #edebeb;
  cursor: pointer;
  border-radius: 7px;
  padding-top: 2px;
`;

export const HeaderLanguage = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 5px;
  padding-left: 5px;
`;
export const LangImg = styled.img`
  width: 20px;
  float: left;
  height: 20px;
  margin-left: 4px;
  border-radius: 50%;
`;
export const LangText = styled.span`
  width: 17px;
  float: left;
  margin-left: 10px;
`;


export const ResMenuIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-top: 5px;
  cursor: pointer;
  @media(min-width: 675px){
    display: none;
  }
`

export const IconSpan = styled.span`
  color: white;
  font-size: 55px;
`

export const ResDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 60px;
  transition:  height 0.5s, opacity 0.5s;
  height: ${({$resMenu}) => $resMenu ? "400px" : 0};
  opacity: ${({$resMenu}) => $resMenu ? 1 : 0};
  background-color: white;
  z-index: 16;
  padding: 10px;

`;



export const RamkaDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 60px;
  background-color: black;
  opacity: 0.7;
  position: fixed;
  z-index: 15;
  opacity: ${({$resMenu}) => $resMenu ? 0.7 : 0 };
  transition: 1s;



`

export const MenuLinks = styled.div`
  width: 100%;
  height: 60px;
  border: none;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    color: #007aff;
    opacity: 0.7;
  }
`