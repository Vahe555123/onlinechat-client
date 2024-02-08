import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import user from "../../img/usericon.svg";
import icons from "../../img/icons.svg";
import addicon from "../../img/addicon.svg";
import { useNavigate , useLocation } from 'react-router-dom';

import {
  ChatDiv,
  UserInfoDiv,
  InfoDiv,
  ArrowSpan,
  OnlindeDiv,
  ArrowDiv,
  NameSpan,
  OnlineSpan,
  MainDiv,
  SpanZag,
  SpanInfo,
  Divs,
  Div1,
  DiscDiv,
  ButDivs,
  Buttons1,
  Buttons2,
  DoneSpan,
  MessageZone,
  ChatDivs,
  MessageDiv,
  InputDiv,
  InputChat,
  AdminChat,
  UserChat,
  ScrollDiv
} from "./styled";

export const ChatPage2 = () => {
    const [value, setValue] = useState(true)
    const [message, setMessage] = useState()
    const [myMessage, setMyMessage] = useState()
    const divRef = useRef(null);
    const [state , setState] = useState(true)
    const redirect = useNavigate();
    const rec = useLocation()
    const path = rec.pathname.split('/')
    const [but , setBut] = useState(false)
    useEffect(() => {
        if(!localStorage.getItem("id") || !localStorage.getItem("token")){
        
            redirect('/home')
    
        }
    } , [])
  const sendMessage = async () => {

    if (divRef.current) {
        divRef.current.scrollTop = divRef.current.scrollHeight;
      }
      if(!message){
        return;
      }

    try {
        const data = {
            message: message,
            id: localStorage.getItem("id") || null,
            task : path[2]

        }
      
        const req = await fetch("http://103.35.191.123:3001/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        setState((e) => !e)
        setMessage("")

    }
    catch (err) {
        console.log(err);
    }
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        if (!id) {
          return;
        }
        const req = await fetch("http://103.35.191.123:3001/get-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ id: id })
        });
        const res = await req.json();
        if(res?.length === myMessage?.length ){
          return;
        }
        setMyMessage(res);
      } catch (err) {
        console.log(err);
      }
    }
  
    const interval = setInterval(() => {
      fetchData();
      console.log(3);
    }, 3000); // Запрос каждые 3 секунды
  
    // Вызываем fetchData при монтировании компонента
    fetchData();
  
    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (localStorage.getItem("question") && divRef.current && !(parseInt(localStorage.getItem("count")) > 2)) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [myMessage]);

  const changeCount = async() => {
    try {
      localStorage.setItem("3" , new Date().toLocaleTimeString().slice(0 , 5))

      setBut(true)
      const req = await fetch("http://103.35.191.123:3001/change-count" , {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id : localStorage.getItem("id")})
      })
      localStorage.setItem("count" , 3)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ChatDiv>
      <UserInfoDiv>
        <InfoDiv>
          <Link to="/page3">
            <ArrowSpan>
              <IoIosArrowRoundBack />
            </ArrowSpan>
          </Link>
          <img src={user} alt="user" />
          <div>
            <NameSpan>Rio Sanjaya</NameSpan>
            <OnlineSpan>
              <OnlindeDiv />
              <span>Online</span>
            </OnlineSpan>
          </div>
        </InfoDiv>
        <ArrowDiv>
          <img src={icons} alt="icons" />
        </ArrowDiv>
      </UserInfoDiv>
      <ScrollDiv  ref={divRef}>
      <MainDiv>
      <SpanZag>
                        Mobile Application Tester
                    </SpanZag>
                    <SpanInfo>
                        Finflow Software Solutions
                    </SpanInfo>
                    <Divs>
                        <Div1>
                            <SpanZag>
                                Apply Before
                            </SpanZag>
                            <SpanInfo>
                                25 January, 2024
                            </SpanInfo>
                        </Div1>
                        <Div1>
                            <SpanZag>
                                Job Nature
                            </SpanZag>
                            <SpanInfo>
                                Online
                            </SpanInfo>
                        </Div1>
                    </Divs>
                    <Divs>
                        <Div1>
                            <SpanZag>
                                Salary Range
                            </SpanZag>
                            <SpanInfo>
                                $500 - $1000/Daily
                            </SpanInfo>
                        </Div1>
                        <Div1>
                            <div>
                                <SpanZag>
                                    Job Location
                                </SpanZag>
                                <SpanInfo>
                                    Work from anywhere
                                </SpanInfo>
                            </div>
                        </Div1>
                    </Divs>

                    <DiscDiv>
                        <SpanZag>
                            Job Description
                        </SpanZag>
                        <SpanInfo>
                            We invite new candidates to join our friendly team as Mobile App Testers. We have no strict experience requirements, as we are prepared to provide training for a single day. Payment is made daily based on the work completed. No need for financial investments or other expenses on your part – we provide everything you need. We welcome anyone interested to join our team!
                        </SpanInfo>
                    </DiscDiv>      </MainDiv>
                    {(parseInt(localStorage.getItem("count")) > 2) ? <DoneSpan>task canceled</DoneSpan>
                    :
                    localStorage.getItem("question") ? (
                      <DoneSpan>Task accepted</DoneSpan>
                    ) : (
                      <ButDivs>
              <Buttons1 disabled={but} onClick={() => {
                return (
                localStorage.setItem("question", true),
                  
                setTimeout(() => {
                localStorage.setItem("questionTimer", true)
                  
                  setBut(true)
                } , 10000)
                 )
              }}>
                ACCEPT
              </Buttons1>
              <Buttons2 disabled={but} onClick={changeCount}>REFUSE</Buttons2>
            </ButDivs>
                    )
                    }
      <MessageZone>
        
      {!(parseInt(localStorage.getItem("count")) > 1) && localStorage.getItem("question") && localStorage.getItem("questionTimer") && myMessage?.map((e, i) => {
          if (e.type === "admin") {
            return (
              <AdminChat key={i}>
                <span>{e.message}</span>
              </AdminChat>
            );
          } else {
            return (
              <UserChat key={i}>
                {e.message}
              </UserChat>
            );
          }
        })}
      </MessageZone>
      </ScrollDiv>
      
      {localStorage.getItem("question") && !(parseInt(localStorage.getItem("count")) > 2) ? (
        <ChatDivs>
          <MessageDiv />
          <InputDiv>
            <InputChat
              placeholder="Type Here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <img
              src={addicon}
              style={{ cursor: "pointer" }}
              onClick={sendMessage}
              alt="addicon"
            />
          </InputDiv>
        </ChatDivs>
      ) : null}
    </ChatDiv>
  );
}
