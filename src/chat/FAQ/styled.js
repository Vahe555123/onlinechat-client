import styled from "styled-components";
import bgc from "../../img/faq.svg"
import { Link } from "react-router-dom";
export const FAQdiv = styled.div`
    width: 100%;
    max-width: 450px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

`

export const BgcDiv = styled.div`
    width: 98%;
    margin: 0 auto;
    height: 230px;
    background-image: url(${bgc});
    display: flex;
    justify-content: center;
    position: relative;
    img{
        position: absolute;
        bottom: 60px;
        @media(max-height : 668px){
        bottom: 40px;
        height: 40px;
            
    }

    }
    span{
        font-family: 'Inria Sans', sans-serif; 
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    position: absolute;
    bottom: 20px;
    @media(max-height : 668px){
        bottom: 5px;
            
    }
    }
    @media(max-height : 668px){
    height: 200px;
            
    }
`

export const InfoDiv = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    @media(max-height:1400px){
        height: 900px;
    }
    @media(max-height:1300px){
        height: 870px;
    }
    @media(max-height:1200px){
        height: 770px;
    }
    @media(max-height:1100px){
        height: 670px;
    }
    @media(max-height:1000px){
        height: 570px;
    }
    @media(max-height:900px){
        height: 480px;
    }
    @media(max-height:800px){
        height: 380px;
    }
    @media(max-height:700px){
        height: 300px;
    }
    @media(max-height:600px){
        height: 280px;
    }
   

   

`

export const SpanZag = styled.span`
    font-family: 'Inria Sans', sans-serif; 
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        margin-top:40px;
        @media(max-height : 740px){
            font-weight: 600;
        font-size: 16px;
        line-height: 20px;
            
    }
`

export const SpanInfo = styled.span`
    font-family: 'Inria Sans', sans-serif; 
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #979797;
        @media(max-height : 740px){
            font-weight: 300;
        font-size: 12px;
        line-height: 16px;
            
    }
`

export const FootDiv = styled.div`
    width: 100%;
    height: 4000px;
`


export const FooterDiv = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 106px;
    border-radius: 30px 30px 0 0;
    background-color: #F3F3F7;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ButDivs = styled(Link)`
    width: 28%;
    height: 41px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 500;
    font-size: 12px;
    line-height:12px;
    color: #777778;
    text-decoration: none;

`