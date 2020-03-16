import React from "react";
import {
    ColumnWrapper, CustomButton,
    H2,
    Hr,
    SectionContainer,
    SectionWrapper
} from "../../components/Styling/General-Components.styles";
import {Separator} from "../../components/Styling/General-Components.component";
import Portfolio from "../../components/Portfolio/Portfolio.component";
import ScrollToTop from "../../components/Styling/ScrollToTop.component";

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <SectionContainer withPadding pt={160} pb={40}>
                <SectionWrapper>
                    <ColumnWrapper>
                        <H2>Hello!</H2>
                        <Hr/>
                        <H2>
                            I am Arman, an experienced full stack developer based in India. I’m available for freelance work and
                            projects. I specialise in PHP and it's frameworks as well as JavaScript, HTML and CSS.
                        </H2>
                        <Hr />
                        <H2>More info and contact here</H2>
                        <Hr/>
                        <CustomButton>Say hello!</CustomButton>
                    </ColumnWrapper>
                </SectionWrapper>
            </SectionContainer>
            <SectionContainer withPadding pt={0} pb={20}>
                <SectionWrapper>
                    <ColumnWrapper>
                       <Separator/>
                        <Portfolio count={4} />
                    </ColumnWrapper>
                </SectionWrapper>
            </SectionContainer>
        </div>
    )
};

export default Home;