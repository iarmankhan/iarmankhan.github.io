import React from "react";
import {
    ColumnWrapper, CustomButton,
    H2, H3,
    Hr,
    SectionContainer,
    SectionWrapper
} from "../../components/Styling/General-Components.styles";
import {Separator} from "../../components/Styling/General-Components.component";
import Portfolio from "../../components/Portfolio/Portfolio.component";
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const seeAllWorks = () => {
        history.push('/work')
    };

    return (
        <div>
            <SectionContainer withPadding pt={160} pb={40}>
                <SectionWrapper>
                    <ColumnWrapper>
                        <H2>Hello!</H2>
                        <Hr/>
                        <H3>
                            I am Arman, an experienced full stack developer based in India. I’m available for freelance
                            work and
                            projects. I specialise in PHP and it's frameworks as well as React, JavaScript, HTML and CSS.
                        </H3>
                        <Hr/>
                        <H3>Have a project, idea or problem you'd like to discuss?</H3>
                        <Hr/>
                        <CustomButton onClick={() => history.push('/hire-me')}>Let's chat!</CustomButton>
                    </ColumnWrapper>
                </SectionWrapper>
            </SectionContainer>
            <SectionContainer withPadding pt={0} pb={20}>
                <SectionWrapper>
                    <ColumnWrapper>
                        <Separator/>
                        <div className="clearfix">
                            <Portfolio count={4}/>
                            <CustomButton onClick={seeAllWorks} style={{float: 'right', margin: '0 2%'}}>See all works</CustomButton>
                        </div>
                    </ColumnWrapper>
                </SectionWrapper>
            </SectionContainer>
        </div>
    )
};

export default Home;
