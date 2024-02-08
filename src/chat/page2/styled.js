import styled from "styled-components";
import bgimage from "../../img/bg2.svg"
export const Page2Div = styled.div`
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

export const BgDiv = styled.div`
    width: 100%;
    height: 290px;
    background-image: url(${bgimage});
    background-position: center;
    margin-top: 20px;

    position: relative;
    span{
        position: absolute;
        bottom: 0;
        font-family: 'Inria Sans', sans-serif; 
        font-size: 20px;
        width: 100%;
        text-align: center;
        background-color: white;
        font-weight: 700;
    }

    @media(max-height: 740px){
            width: 100%;
            height: 273px;
            margin-top: -17px;
            span{
        position: absolute;
        bottom: 0;
        font-family: 'Inria Sans', sans-serif; 
        font-size: 15px;
        width: 100%;
        text-align: center;
        background-color: white;
        font-weight: 700;
    }
    }
`

export const MainDiv = styled.div`
    height: 100%;
    padding: 10px 30px;
    margin-top: 10px;
    @media(max-width: 390px){
        padding: 10px 20px;
    }
    
`
export const InputsDiv = styled.div`
    position: relative;
    @media(max-height: 740px){
            margin-top: -10px;
           
}
`
export const MyInputs = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 15.29px;
    border: 1.27px #979797 solid;
    border-color: ${({ $activ }) => $activ === true ? "black" : "red"};
    color: #979797;
    margin-top: 20px;
    text-align: center;
    outline: none;
    @media(max-height: 740px){
            width: 100%;
            height: 40px;
           
}
    
`
export const MyInputs2 = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 15.29px;
    border: 1.27px #979797 solid;
    border-color: ${({ $activ }) => $activ === true ? "black" : "red"};
    color: #979797;
    margin-top: 26px;
    text-align: center;
    outline: none;
    @media(max-height: 740px){
            width: 100%;
            height: 40px;
           
}
`
export const PlaceInputs = styled.div`
    width: 86px;
    height: 12px;
    position: absolute;
    font-size: 10px;
    border: none;
    background-color: white;
    font-family: 'Inria Sans', sans-serif; 
    bottom: 46px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: ${({ $activ }) => $activ === true ? "black" : "red"};
    @media(max-height: 740px){
        bottom: 37px;

           
}

`

export const ConfirmDiv = styled.div`
    width: 100%;
    font-family: 'Inria Sans', sans-serif; 
    font-size: 16px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    a{

    }

    @media(max-width: 390px){
        font-size: 13px;
    }

`

export const ButDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center ;
    margin-top: 20px;
    @media(max-width: 390px){
        margin-top: 15px;
    }
    @media(max-height: 740px){
        margin-top: 15px;
    }
`

export const ButtonBtn = styled.button`
    background-color: #5074FF;
    width: 249px;
    height: 55px;
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
    margin-top: 10px;
    cursor: ${({ $loading }) => $loading === true ? "pointer" : "not-allowed;"};
    opacity: ${({ $loading }) => $loading === true ? "1" : "0.7"};
    &:hover{
        opacity: 0.8;
    }
    @media(max-height: 740px){
            height: 49px;
    font-size: 13px;  
}
@media(max-width: 390px){
    height: 40px;
    width: 200px;

    }


`

export const FooterDiv = styled.div`
width: 100%;
text-align: center;
margin-top: 30px;
position: absolute;
bottom: 70px;
left: 0;
right: 0;
margin: 0 auto;
@media(max-width: 390px){
        margin-top: 20px;
    }
    @media(max-height: 740px){
        bottom: 60px;
    }

span{
    font-family: 'Inria Sans', sans-serif; 
    font-size: 17.67px;
    text-align: center;
    font-weight: 400;
    line-height: 20px;
    color: #323337;
    @media(max-height: 740px){
    font-size: 14px;

           
}
}
p{
    font-family: 'Inria Sans', sans-serif; 
    font-size: 16px;
    text-align: center;
    color: #979797;
    @media(max-height: 740px){
    font-weight: 300;
    font-size: 13px;
    width: 280px;
    margin: 10px auto;
    


    }
}
@media(max-width: 281px){
    bottom: 50px;
    }
    @media(max-height: 600px){
        bottom: 10px;
 
}
`

export const ConfirmSpan = styled.span`
    a{
        color:#5074FF;
    }
`

