import React from "react";
import {CustomButton, H4, H5, SectionWrapper} from "../Styling/General-Components.styles";
import {Column, FooterColumnWrapper, FooterCopy, P, TextWidget} from "./Footer.styles";
import {Separator} from "../Styling/General-Components.component";

const Footer = () => {

    return (
        <div style={{padding: '15px 0 0'}}>
            <SectionWrapper>
                <Separator mw={98}/>
                <FooterColumnWrapper>
                    <Column>
                        <TextWidget>
                            <H4>Hello!</H4>
                            <div>
                                <H5>Arman Khan</H5>
                                <P>
                                    Surat, India
                                    <br/>
                                    <a href="tel:+918780170890">+91 87 8017 0890</a>
                                    <br/>
                                    <a href="mailto:work.armankhan@gmail.com">work.armankhan@gmail.com</a>
                                </P>
                            </div>
                        </TextWidget>
                    </Column>
                    <Column>
                        <TextWidget>
                            <H4>My Clients</H4>
                            <div>
                                <P>
                                    Be my first client!
                                </P>
                            </div>
                        </TextWidget>
                    </Column>
                    <Column>
                        <TextWidget>
                            <H4>Want to hire me?</H4>
                            <div>
                                <P>I can create you a great website!</P>
                                <CustomButton>Say hello!</CustomButton>
                            </div>
                        </TextWidget>
                    </Column>
                </FooterColumnWrapper>
            </SectionWrapper>
            <FooterCopy>
                <div className="container">
                    <div className="column">
                        <div className="copyright"> © 2020 Arman. All Rights Reserved.</div>
                        {/*<ul className="social"></ul>*/}
                    </div>
                </div>
            </FooterCopy>
        </div>
    )
};

export default Footer