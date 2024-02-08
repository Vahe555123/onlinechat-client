import React, { useState, useEffect } from "react";
import { ActivDiv, AllDiv, TimeSpan, ButDivs, CompletedDiv, Departaments, FooterDiv, InfoDiv, InfoMessageDiv, InfoText, Message, MessageDiv, MessageSpan, NameDiv, NameOrMessage, NameSpan, Page3Div, TimeDiv } from "./styled";
import user from "../../img/group.jpg"
import userImg from "../../img/user.png"
import jingle from "../../img/jingle.png"
import { FootDiv } from "../FAQ/styled";
import { useNavigate } from 'react-router-dom';

export const Page3 = () => {
    const [allDiv, setAllDiv] = useState((!localStorage.getItem("activ") ? true : false) || localStorage.getItem("activ") === "all" ? true : false)
    const [activDiv, setActivDiv] = useState(localStorage.getItem("activ") === "activ" ? true : false)
    const [completedDiv, setCompletedDiv] = useState(localStorage.getItem("activ") === "completed" ? true : false)
    const redirect = useNavigate();
    const [count, setCount] = useState()
    const [userName, setUserName] = useState("")
    const [value , setValue] = useState(true)
    useEffect(() => {
        if (!localStorage.getItem("id") || !localStorage.getItem("token")) {

            redirect('/home')
        }
        const fetchData = async () => {
            try {
                const req = await fetch("http://103.35.191.123:3001/getUser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: localStorage.getItem("id") })
                });
                const res = await req.json();
                setCount(res.count)

                setUserName(res.name)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
        localStorage.setItem("count", count)
        if(!localStorage.getItem("messTimer")){
            setTimeout(() => {

                localStorage.setItem("messTimer" , true)
                redirect("/page3")
            } , 10000)
        }
        

    }, [])
    const closeAll = () => {
        setAllDiv(false);
        setActivDiv(false)
        setCompletedDiv(false)
    }
    const funcAll = () => {
        closeAll()
        setAllDiv(true)
        localStorage.removeItem('activ')
        localStorage.setItem("activ", "all")
    }
    const funcActiv = () => {
        closeAll()
        setActivDiv(true)
        localStorage.removeItem('activ')
        localStorage.setItem("activ", "activ")

    }
    const funcCompleted = () => {
        closeAll()
        setCompletedDiv(true)
        localStorage.removeItem('activ')
        localStorage.setItem("activ", "completed")

    }
    const [message, setMessage] = useState([
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("1") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("2") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("3") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("4") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("5") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("6") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("7") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("8") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("9") },
        { name: "Xavier Collins", img: userImg, message: "Hi, Gandi, I got your number from", data: localStorage.getItem("10") },
    ])



    return (
        <>
            <Page3Div>
                <InfoDiv>
                    <NameDiv>
                        <span>
                            <img src={user} />
                            {userName}
                        </span>
                    </NameDiv>
                    <NameDiv>
                        <span>
                            Online
                            <div>

                            </div>
                        </span>
                    </NameDiv>
                </InfoDiv>
                <Departaments>
                    <AllDiv onClick={funcAll} $activ={allDiv}>
                        All
                    </AllDiv>
                    <ActivDiv onClick={funcActiv} $activ={activDiv}>
                        Activ
                    </ActivDiv>
                    <CompletedDiv onClick={funcCompleted} $activ={completedDiv}>
                        Completed
                    </CompletedDiv>
                </Departaments>
                {allDiv && <>
                    <MessageDiv>
                        { localStorage.getItem("messTimer") && message ? message.slice(0, count || localStorage.getItem(count)  || 0).map((e, i) => {
                            return (

                                <Message to={`/chat/${i + 1}`} onClick={() => {
                                    const index = i.toString();
                                    if (!localStorage.getItem(index + "1")) {
                                        localStorage.setItem(index + "1", true);
                                    }
                                }} key={e + i}>
                                    <img src={e.img} />
                                    <InfoMessageDiv>
                                        <NameOrMessage>
                                            <NameSpan>{e.name}</NameSpan>
                                            <MessageSpan>{e.message}</MessageSpan>
                                        </NameOrMessage>
                                    </InfoMessageDiv>
                                    <TimeDiv>
                                        <TimeSpan style={{ color: "black" }}>{e.data}</TimeSpan>
                                        {!localStorage.getItem(i.toString() + "1") && <div><img src={jingle} /></div>}
                                    </TimeDiv>
                                </Message>
                            )
                        }) : null}
                    </MessageDiv>
                    {(count > 1) ? null : <InfoText>
                        Complete at least one task to unlock a wave of new opportunities with higher pay and favorable terms.
                    </InfoText>}
                </>}

                {activDiv && localStorage.getItem("question") && <MessageDiv>



                    <Message to={`/chat/${count}`} onClick={() => {
                        const index = count.toString();

                    }} >
                        <img src={message[count]?.img} />
                        <InfoMessageDiv>
                            <NameOrMessage>
                                <NameSpan>{message[count]?.name}</NameSpan>
                                <MessageSpan>{message[count]?.message}</MessageSpan>
                            </NameOrMessage>
                        </InfoMessageDiv>
                        <TimeDiv>
                            <TimeSpan style={{ color: "black" }}>{message[count].data}</TimeSpan>
                        </TimeDiv>
                    </Message>

                </MessageDiv>}
                {completedDiv && null}
                <FooterDiv>
                    <ButDivs to="page3" style={{ backgroundColor: "#5074FF", color: "white" }}>Tasks</ButDivs>
                    <ButDivs to="/faq">FAQ</ButDivs>
                    <ButDivs to="/support">Support</ButDivs>
                </FooterDiv>
                <FootDiv></FootDiv>
            </Page3Div>
        </>
    )
}