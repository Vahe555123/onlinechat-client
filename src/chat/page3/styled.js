import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page3Div = styled.div`
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

export const InfoDiv = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;


`

export const NameDiv = styled.div`
    height: 43px;
    padding: 0 15px;
    border-radius: 85px;
    background-color: #F6F6F6;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 400;
    font-size: 17px;
    line-height: 20.38px;
    color: black;
    display: flex;
    justify-content: center;
    span{
    align-items: center;
    display: flex;
    }
    div{
        width: 8px;
        height: 8px;
        background-color: #4B8389;
        border-radius: 50%;
        margin-left: 10px;

    }
    img{
        width: 17px;
        margin-right: 10px;
    }

`

export const Departaments = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
`
export const AllDiv = styled.div`
    width: 100px;
    height: 37.98px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 400;
    font-size: 17px;
    line-height: 20.38px;
    background-color: ${({ $activ }) => $activ === true ? "#347FFE" : "white"};
    color: ${({ $activ }) => $activ === true ? "white" : "#777777"};

    border-radius: 40px;
    cursor: pointer;
`

export const ActivDiv = styled.div`
    width: 101px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 400;
    font-size: 17px;
    line-height: 20.38px;
    background-color: ${({ $activ }) => $activ === true ? "#347FFE" : "white"};
    color: ${({ $activ }) => $activ === true ? "white" : "#777777"};
        cursor: pointer;
        border-radius: 40px;

`

export const CompletedDiv = styled.div`
    width: 136px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 400;
    font-size: 17px;
    line-height: 20.38px;
    border-radius: 40px;
    background-color: ${({ $activ }) => $activ === true ? "#347FFE" : "white"};
    color: ${({ $activ }) => $activ === true ? "white" : "#777777"};
        cursor: pointer;


`


export const Message = styled(Link)`
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 20px 0 10px;
    margin-top: 40px;
    justify-content: space-around;
    cursor: pointer;
    text-decoration: none;

    img{
        width: 50px;
        height: 50px;
    }
`

export const InfoMessageDiv = styled.div`
    width: 203px;
    height: 50px;
    padding: 0 15px;
`

export const NameOrMessage = styled.div`
    height: 50px;
    display: flex;
  flex-direction: column;
  gap : 8px;
    
`

export const NameSpan = styled.span`
    color: black;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`

export const MessageSpan = styled.span`
color:#545454;
font-family: 'Inria Sans', sans-serif; 
font-weight: 300;
font-size: 14px;
line-height: 16.49px;

`
export const TimeDiv = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
  flex-direction: column;
  gap : 8px;
  float: right;
  @media(max-width: 281px){
        margin-right: 15px;
    }
  div{
    background-color: #5074FF;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
    width: 14px;
    height: 14px;
  }
  }
  
`


export const InfoText = styled.div`
    width: 90%;
    font-family: 'Inria Sans', sans-serif; 
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    color: #979797;
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;    
    

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
    height: 37px;
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

export const MessageDiv = styled.div`
    width: 100%;
    height: 50%;
    overflow-y: scroll;
    overflow-x: hidden;
    
`
export const TimeSpan = styled.span`
        font-family: 'Inria Sans', sans-serif; 
        margin-left: -10px;

`