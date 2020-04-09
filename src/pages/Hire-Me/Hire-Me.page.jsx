import React from "react";
import {
    ColumnWrapper,
    H1, H2, H3,
    Hr, LeftBlock, RightBlock,
    SectionContainer,
    SectionWrapper
} from "../../components/Styling/General-Components.styles";
import Contact from "../../components/Contact/Contact.component";
import miniSeparator from "../../assets/images/separator-mini.png";
import {ContactFormWrapper} from "./Hire-Me.styles";
import {Separator} from "../../components/Styling/General-Components.component";

const HireMe = () => {
    return (
        <div>
            <SectionContainer withPadding pt={160} pb={40}>
                <SectionWrapper>
                    <ColumnWrapper>
                        <H1>Contact me</H1>
                        <Hr/>
                        <H3>Lorem ipsum dolor emit simit!</H3>
                    </ColumnWrapper>
                </SectionWrapper>
            </SectionContainer>
            <SectionContainer withPadding pt={40} pb={40}>
                <SectionWrapper>
                    <Separator />
                    <ContactFormWrapper align='flex-start'>
                        <LeftBlock width={30}>
                            <H1>Say hello!</H1>
                            <div className="image">
                                <img src={miniSeparator}/>
                            </div>
                        </LeftBlock>
                        <RightBlock width={70}>
                            <Contact />
                        </RightBlock>
                    </ContactFormWrapper>
                </SectionWrapper>
            </SectionContainer>
        </div>
    )
};

export default HireMe
