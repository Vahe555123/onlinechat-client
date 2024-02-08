import React, { useState, useEffect } from "react";
import { ConfirmSpan, BgDiv, MyInputs, MainDiv, Page2Div, PlaceInputs, InputsDiv, ConfirmDiv, ButtonBtn, FooterDiv, ButDiv, MyInputs2 } from "./styled";
import "./style.css"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export const Page2 = () => {
    const [data, setData] = useState({
        name: '',
        number: '',
    });
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [confirm, setConfirm] = useState(false)
    const [loading, setLoading] = useState(true)
    const [input1, setInput1] = useState(true)
    const [input2, setInput2] = useState(true)
    const [input3, setInput3] = useState(true)
    const [state, setState] = useState(false)
    const [numberModified, setNumberModified] = useState(false);

    const myOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });
    };
    const handleNameChange = (event) => {
        const inputValue = event.target.value;
        const onlyLetters = /^\p{L}+$/u
        if (onlyLetters.test(inputValue) || inputValue === '') {
            setName(inputValue);
        }
    };

 const myOnChangeNumber = (e) => {
    if (!numberModified) {
        if(/^\d*$/.test(e.target.value)){
            setNumber("+1" + e.target.value);
            setNumberModified(true);
        }
        
      } else {
        if(/\d+/.test(Number(e.target.value)) ? e.target.value : null){
            setNumber(e.target.value);
        }
      }
    };
    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("id") || localStorage.getItem("token")) {

            redirect('/page3')

        }
    }, [])

    const addData = async () => {
        try {
            if (name.length === 0) {
                setInput1(false)
                setTimeout(() => {
                    setInput1(true)

                }, 2000)
            }
            if (number.length === 0) {
                setInput2(false)
                setTimeout(() => {
                    setInput2(true)

                }, 2000)
            }
            if (!confirm) {
                setInput3(false)
                setTimeout(() => {
                    setInput3(true)

                }, 2000)
                return;
            }
            const data = {
                name:name,
                number:number
            }
            setLoading(false)
            const req = await fetch("http://103.35.191.123:3001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setLoading(true)
            if (req.ok) {
                redirect('/page3')
            }
            const res = await req.json()
            console.log(res);
            if (req.ok) {
                localStorage.setItem('token', res.token)
                localStorage.setItem('id', res.id)
                localStorage.setItem("1", new Date().toLocaleTimeString().slice(0, 5))

            } else return;

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <Page2Div>
                <BgDiv>
                    <span>
                        Contact Form
                    </span>
                </BgDiv>
                <MainDiv>
                    <InputsDiv>
                        <MyInputs placeholder="Name, Surname" onChange={handleNameChange} name="name" value={name} $activ={input1} />
                        <PlaceInputs $activ={input1}>Name, Surname</PlaceInputs>

                    </InputsDiv>
                    <InputsDiv>
                        <MyInputs2 type="text" placeholder="+1 xxx xxx xxx" onChange={myOnChangeNumber} name="number" value={number} $activ={input2} />
                        <PlaceInputs $activ={input2}>Phone number</PlaceInputs>

                    </InputsDiv>
                    <ConfirmDiv>
                        <ConfirmSpan $confirm={confirm}>
                            I agree to the <Link to="/politic">privacy policy </Link>
                        </ConfirmSpan>
                        <label class="round-checkbox" >
                            <input type="checkbox" onClick={() => setConfirm((e) => !e)} />
                            <span class="checkmark" style={{ borderColor: state ? "#24A0ED" : input3 ? "#808080" : "red" }} onClick={() => setState((e) => !e)}></span>
                        </label>
                    </ConfirmDiv>
                    <ButDiv>
                        <ButtonBtn disabled={!loading} $loading={loading} onClick={addData} >
                            {loading ? "Start now" : "Loading..."}
                        </ButtonBtn>
                    </ButDiv>

                    <FooterDiv>
                        <span>
                            Sign up with confidence, it's easy and secure.
                        </span>
                        <p>
                            By pressing the 'Start Now' button, I authorize the processing of my personal information.
                        </p>
                    </FooterDiv>
                </MainDiv>
            </Page2Div>
        </>
    )
}