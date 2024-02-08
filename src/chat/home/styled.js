import styled from "styled-components";
import bgimage from "../../img/bg.svg"
export const HomeDiv = styled.div`
    max-width: 450px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

`

export const ImgDiv = styled.div`
    width: 100%;
    height: 60%;
    position: relative;
    background-image: url(${bgimage});
    img{
        width: 90%;
        height: 90%;
        position: absolute;
        right: 0;
        top: 37px;
        @media(max-height: 668px){
            width: 100%;
            height: 100%;
            top: -55px;
    }
    @media(max-width: 281px){
        width: 90%;
        height: 90%;
        top: 70px;

    }
    }

    @media(max-height: 741px){
    height: 55%;
    top: -40px;

    

    }
    
`

export const MainDiv = styled.div`
    margin-top: 20px;
    height: 100%;
    text-align: center;
    font-family: 'Inria Sans', sans-serif; 
    padding: 20px;
    border-radius: 50px 50px 0 0;
    background-color: #FAFAFA;
    span{
        font-weight: 700;
        font-size:22px;
        line-height: 26px;
        @media(max-height: 741px){
        font-size:18px;
        line-height: 21px;
    }
    @media(max-height: 741px){
        font-size:15px;
        line-height: 15px;
    }
    }
    p{
        font-size: 16px;
        margin-top: 22px;
        font-weight: 300;
        line-height: 19px;
        @media(max-height: 741px){
        font-size:13px;
        line-height: 15px;
    }
    @media(max-width: 281px){
        font-size:11px;
        line-height: 15px;
    }
    }
    @media(max-height: 741px){
    margin-top: -35px;

    }

`


export const ButtonBtn = styled.button`
    background-color: #5074FF;
    width: 257px;
    height: 50px;
    border-radius: 50px;
    padding: 18px, 52px, 18px, 52px;
    gap:10px;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #F3F3F7;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    @media(max-width: 376px){
        margin-top: 30px;
        }
        @media(max-height: 600px){
        margin-top: 5px;
        }
        @media(max-height: 741px){
        width: 221px;
        height: 45px;
        font-size: 13px;
    }
    @media(max-height: 741px){
        width: 180px;
        height: 38px;
        font-size: 12px;
    }


`

export const ButText = styled.div`
     font-family: 'Inria Sans', sans-serif; 
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 20px;
    @media(max-height: 741px){
        font-size: 13px;
        line-height: 15px;

    }

`