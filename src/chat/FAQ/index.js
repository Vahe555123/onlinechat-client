import React from "react";
import { BgcDiv, FAQdiv,  InfoDiv, SpanInfo, SpanZag , ButDivs , FooterDiv} from "./styled";
import user from "../../img/user.svg"

export const FaqPage = () => {
    return (
        <>
            <FAQdiv>
                <BgcDiv>
                    <img src={user} />
                    <span>FAQ</span>
                </BgcDiv>

                <InfoDiv>
                    <SpanZag>
                        How often is the list of available tasks updated?
                    </SpanZag><br />
                    <SpanInfo>
                        Tasks appear as soon as employers post them. Users who complete at least one task receive more high-paying task offers.
                    </SpanInfo>
                    <SpanZag>
                        Can I participate in multiple tasks simultaneously?
                    </SpanZag><br />
                    <SpanInfo>
                        Yes, but the limit is three tasks at a time.
                    </SpanInfo>
                    <SpanZag>
                        How is payment handled for completed tasks?
                    </SpanZag><br />
                    <SpanInfo>
                        Payment occurs directly between the employer and the task performer. Payment is transferred by the employer after task completion, using your preferred method.
                    </SpanInfo>
                    <SpanZag>
                        How frequently are payments made for completed tasks?
                    </SpanZag><br />
                    <SpanInfo>
                        Payments are made immediately after the employer verifies the task completion.
                    </SpanInfo>
                    <SpanZag>
                        How long does the verification of completed tasks take?
                    </SpanZag><br />
                    <SpanInfo>
                        Typically within 24 hours.
                    </SpanInfo>
                    <SpanZag>
                        Can I decline a task after accepting it?
                    </SpanZag><br />
                    <SpanInfo>
                        Yes, you can. Just communicate your decision to the employer.
                    </SpanInfo>
                    <SpanZag>
                        How to subscribe to notifications for new tasks?
                    </SpanZag><br />
                    <SpanInfo>
                        If you receive a new job offer, we'll notify you through a push notification.
                    </SpanInfo>
                    <SpanZag>
                        What information can other users see on my profile?
                    </SpanZag><br />
                    <SpanInfo>
                        You remain completely anonymous, and you decide what information to share with the employer.
                    </SpanInfo>
                    <SpanZag>
                        How does communication take place between the task performer and the client?
                    </SpanZag><br />
                    <SpanInfo>
                        You can communicate with the employer through an online chat.
                    </SpanInfo>


                </InfoDiv>

                <FooterDiv>
                    <ButDivs to="/page3">Tasks</ButDivs>
                    <ButDivs to="/faq" style={{backgroundColor:"#5074FF" , color:"white"}}>FAQ</ButDivs>
                    <ButDivs to="/support">Support</ButDivs>
                </FooterDiv>
            </FAQdiv>
        </>
    )
}