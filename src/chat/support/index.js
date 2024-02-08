import React from "react";
import { AllDiv, BgcDiv, InfoDiv, SpanDiv, SpanInfo, SpanZag, SupportDiv, UserIcon, ButDivs, FooterDiv } from "./styled";
import user from "../../img/user.svg"

export const SupportPage = () => {
    return (
        <>
            <SupportDiv>
                <BgcDiv>
                    <UserIcon src={user} />
                    <span>Support </span>
                </BgcDiv>
                <AllDiv>


                    <InfoDiv>
                        <SpanZag>
                            Email
                        </SpanZag>
                        <SpanInfo>
                            TaskHub@gmail.com
                        </SpanInfo>
                    </InfoDiv>
                    <InfoDiv>
                        <SpanZag>
                            Number
                        </SpanZag>
                        <SpanInfo>
                            +1 316 307 5509
                        </SpanInfo>
                    </InfoDiv>
                    <InfoDiv>
                        <SpanZag>
                            Address
                        </SpanZag>
                        <SpanInfo>
                            Coral Tower East 14th Street, New York, NY 10003, United States
                        </SpanInfo>
                    </InfoDiv>
                </AllDiv>
                <SpanDiv>
                For immediate help, check our FAQ page. If you still have questions, contact our support team below. Thank you for choosing us!
                </SpanDiv>
                <FooterDiv>
                <ButDivs to="/page3">Tasks</ButDivs>
                <ButDivs to="/faq">FAQ</ButDivs>
                   <ButDivs to="/support"   style={{backgroundColor:"#5074FF" , color:"white"}}>Support</ButDivs>
                </FooterDiv>
            </SupportDiv>
        </>
    )
}