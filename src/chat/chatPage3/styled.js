import styled from "styled-components";

export const ChatDiv = styled.div`
    width: 100%;
    max-width: 450px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
`

export const UserInfoDiv = styled.div`
    width: 100%;
    height: 15%;
    border-radius:0 0 30px 30px;
    background-color:white;
    display: flex;
    align-items: center;
    padding-top: 40px;

`
export const InfoDiv = styled.div`
    width: 60%;
    height: 50px;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 0 20px;
    
`

export const ArrowSpan = styled.span`
    font-size: 32px;
    margin-top: 15px;
`
export const NameSpan = styled.span`
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

`

export const OnlineSpan = styled.div`
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    span{
        margin-left: 7px;
    }
    
`
export const OnlindeDiv = styled.div`
    width: 8px;
    height: 8px;
    background-color: #4B8389;
    border-radius: 50%;
`   

export const ArrowDiv = styled.div`
    display: flex;
    align-items: center;
    width: 80px;
    gap: 20px;
 
`

export const PhoneSpan = styled.span`
        font-size:30px;

`
export const ArrSpan = styled.span`
        font-size: 25px;

`

export const MainDiv = styled.div`
    width: 80%;
    margin: 20px auto;
    min-height: 328px;
    background-color: white;
    padding: 20px 0 0 20px;

`

export const SpanZag = styled.div`
    font-family: 'Inria Sans', sans-serif; 
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
`

export const SpanInfo = styled.div`
    font-family: 'Inria Sans', sans-serif; 
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-top: 5px;
    color: #545454;
`

export const Divs = styled.div`
    width: 95%;
    display: flex;
    margin-top: 20px;
`
export const Div1 = styled.div`
    width: 50%;
`
export const DiscDiv = styled.div`
margin-top: 20px;
padding: 10px;

`
export const ButDivs = styled.div`
    display: flex;
    justify-content: space-around;
`
export const Buttons1 = styled.button`
background-color: #5074FF;
color: white;
border-radius: 50px;
font-weight: 700;
font-size: 12px;
line-height:12px;
width: 145px;
height: 43px;
border: none;
cursor: pointer;
`

export const Buttons2 = styled.button`
background-color: #777777;
color: white;
border-radius: 50px;
font-weight: 700;
font-size: 12px;
line-height:12px;
width: 145px;
height: 43px;
border: none;
cursor: pointer;


`

export const DoneSpan = styled.div`
    color: #347FFE;
    width: 100%;
    font-size: 12px;
    font-family: 'Inria Sans', sans-serif; 
    font-weight: 700;
    text-align: center;
`

export const ChatDivs = styled.div`
    width: 100%;
    

`
export const MessageDiv = styled.div`

`
export const InputDiv = styled.div`
    width: 100%;
    height: 80px;
    background-color: white;
    border-radius: 30px 30px 0 0;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    img{
        position: absolute;
        right: 30px;
    }

`

export const InputChat = styled.input`
    width: 85%;
    height: 50px;
    background-color: #FAFAFA;
    border: none;
    outline: none;
    border-radius: 30px;
    color: #ABABAB;
    font-family: 'Inria Sans', sans-serif; 
    padding: 0 0 0 30px;
    

`
export const MessageZone = styled.div`
    width: 100%;
    height: 200px;
    flex: 1;
    margin-bottom: 100px;
    margin-top: 10px;

    
    
`
export const ScrollDiv = styled.div`
    overflow-y: scroll;
    height: 90vh;
    margin-bottom: 100px;
`
export const AdminChat = styled.div`
    width: 70%;
    margin-left: 20px;
    border-radius: 0 30px 30px 0;
    background-color: white;
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 20px;
    margin-top: 20px;
    span{
        font-family: 'Inria Sans', sans-serif; 
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: #545454;
    }
`

export const UserChat = styled.div`
    width: 70%;
    margin-left: 20px;
    border-radius: 30px 0 0 30px;
    background-color: #347FFE;
    min-height: 50px;
    display: flex;
    align-items: center;
    float: right;
    color: white;
    padding: 10px 20px 10px 20px;
    margin-right: 20px;
    margin-top: 30px;
    font-family: 'Inria Sans', sans-serif; 
    font-size: 14px;
    font-weight: 300;
    line-height: 19px;
    margin-bottom: 20px;
    text-align: right;

    span{
    width: 100%;
    color: white;
    font-weight: 300;

    }
`