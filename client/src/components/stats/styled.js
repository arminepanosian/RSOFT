import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const FourParts = styled.div`
    width: 25%;
    height: 150px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Numbers = styled.div`
    width: 100%;
    height: 110px;
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    @media(max-width:755px){
        font-size: 80px;
    }
    @media(max-width:575px){
        font-size: 50px;
        height: 50px;
    }
    @media(max-width:455px){
        font-size: 35px;
        height: 30px;
    }
`

export const Texts = styled.div`
    width: 100%;
    height: 40px;
    text-align: center;
    font-weight: bold;
    @media(max-width:755px){
        font-size: 12px;
    }
    @media(max-width:455px){
        font-size: 9px;
    }
    @media(max-width:365px){
        font-size: 7px;
    }

`



