import React , {useEffect} from "react";
import { ButText, ButtonBtn, HomeDiv, ImgDiv, MainDiv } from "./styled";
import { Link } from "react-router-dom"
import gambar from "../../img/gambar.svg"
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const redirect = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("id") || localStorage.getItem("token")){
        
            redirect('/page3')
    
        }
    } , [])
    return (
        <>
            <HomeDiv>
                <ImgDiv>
                    <img src={gambar} />
                </ImgDiv>
                <MainDiv>
                    <span>
                        Let Employers Compete for You <br />
                        Your Personal Task Marketplace!
                    </span>
                    <p>
                        Experience a unique twist – employers vying for your skills, offering paid tasks.
                    </p>
                    <Link to={"page2"}><ButtonBtn >
                        Start Now
                    </ButtonBtn></Link>
                    <ButText>
                        Your next paycheck is just a tap away!
                    </ButText>
                </MainDiv>

            </HomeDiv>
        </>
    )
}