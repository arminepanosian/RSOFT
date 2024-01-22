import styled from "styled-components"
import { Link } from 'react-router-dom'

export const FooterDiv = styled.div`
    width:100%;
    background-color:black;
    z-index: 999999999;
`

export const FooterMenu = styled.div`
    width: 80%;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media(max-width:600px){
        display: inline;
    }
    
`
export const FooterMenuDiv = styled.div`
    height: 30px;
    text-align: center;
    padding: 0 5px 0 5px;
    @media(max-width:600px){
        width: 100%;
        border-bottom: 1px solid #9ba49b ;


    }
`
export const FooterLinks = styled(Link)`
text-decoration:none;
`

export const FooterMenuText = styled.span`
    color: silver;
    font-size: 18px;
    cursor: pointer;
    
    &:hover{
        color:white;
    }
    @media(max-width:837px){
        font-size: 14px;
        margin-left: 10px;
    }
    @media(max-width:600px){
        font-size: 22px;
    }
    @media(max-width:300px){
        font-size: 17px;
    }

`

export const FooterMenuHr = styled.div`
    background-color: #9ba49b;
    width: 100%;
    height: 1px;
`


export const FooterInfo = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    @media(max-width: 600px){
        display: inline;
    }
`

export const FooterInfoDivs = styled.div`
    width: 20%;
    height: auto;
    margin-left: 30px;
    @media(max-width: 600px){
        width: 95%;
        display: flex;
        height: 60px;
        margin-top: 30px;

        
    }
`
export const FooterInfoIconDiv = styled.div`
    width: 100%;
    height: 50px;
    @media(max-width: 600px){
        width: 50px;
        
    }
    
    
`
export const FooterInfoDiv = styled.div`
    width: 75%;
    height: auto;
    @media(max-width: 600px){
        margin-left: 20px;
        
    }

`
export const FooterInfoIcon = styled.span`
    color:white;
    font-size: 30px;
`

export const InfoTitle = styled.span`
    font-size: 12px;
    color:white;
    @media(max-width:275px){
        font-size: 9px;
    }
`
export const Info = styled.span`
    color:#9ba49b;
    font-size: 12px;
`


export const FooterBottom = styled.div`
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-around;
`
export const FooterBottomDivs = styled.div`
    width:33%;
    height:70px;
    text-align:center;
    background-color: black;
`
export const PayDiv = styled.div`
    width:100%;
    height:70px;
`

export const PayImg = styled.img`
    margin-top:20px;
    float:left;
    @media(max-width:1178px){
        width:300px;
    }
    @media(max-width:918px){
        width:200px;
    }
    @media(max-width:600px){
        width:150px;
    }
    @media(max-width:460px){
        width:100px;
    }
    @media(max-width:300px){
        width:80px;
    }
`

export const TitleFooter = styled.div`
    color:#9ba49b;
    padding-top:45px;
    @media(max-width:600px){
        font-size:11px;
    }
    @media(max-width:400px){
        font-size:8px;
    }

`
export const FooterIconDiv = styled.div`
    width:180px;
    margin-left:40px;
    margin-top: 20px;

`

export const FooterIcon = styled.span`
    color:#9ba49b;
    font-size:29px;
    padding-left:10px;
    cursor:pointer;
    transition:0.2s;
    float:left;
    &:hover{
         color:white;
    }
    @media(max-width:600px){
        font-size:23px;
    }
    @media(max-width:438px){
        font-size:15px;
    }

`