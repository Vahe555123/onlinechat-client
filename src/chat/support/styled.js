import styled from "styled-components";
import support from "../../img/support.svg"
import { Link } from "react-router-dom";
export const SupportDiv = styled.div`
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
    width: 100%;
    
    margin: 10px auto;
    height: 200px;
    background-image: url(${support});
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    span{
        font-family: 'Inria Sans', sans-serif; 
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    position: absolute;
    bottom: -20px;
    }
    
`

export const UserIcon = styled.img`
    width: 49px;
    height: 49px;
    position: absolute;
    bottom: 15px;
    @media(max-height:668px){
        
    }
`
export const AllDiv = styled.div`
    margin-top:70px;
    @media(max-height:668px){
        margin-top:50px;

    }
`
export const InfoDiv = styled.div`
    width: 70%;
    margin: 30px auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media(max-height:668px){
    margin: 20px auto;

    }
    
`

export const SpanZag = styled.span`
    font-family: 'Inria Sans', sans-serif; 
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        @media(max-height : 668px){
            font-weight: 600;
        font-size: 19px;
        line-height: 18px;
            
    }
`

export const SpanInfo = styled.span`
    font-family: 'Inria Sans', sans-serif; 
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        @media(max-height : 668px){
            font-weight: 300;
        font-size: 14px;
        line-height: 18px;
            
    }
`

export const SpanDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #979797;
    position: absolute;
    bottom: 150px;
    left: 0;
    right: 0;
    @media(max-height : 668px){
            font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        bottom: 120px;
            
    }
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