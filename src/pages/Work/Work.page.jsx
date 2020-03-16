import React from "react";
import ScrollToTop from "../../components/Styling/ScrollToTop.component";
import {ColumnWrapper, SectionContainer, SectionWrapper, H2} from '../../components/Styling/General-Components.styles'
import Portfolio from "../../components/Portfolio/Portfolio.component";

const Work = () => {
    return (
        <div>
            <ScrollToTop />
            <SectionContainer withPadding pt={160} pb={40}>
                <SectionWrapper>
                    <ColumnWrapper>
                        <H2>Selected Works</H2>
                    </ColumnWrapper>
                </SectionWrapper>
            </SectionContainer>
            <SectionContainer>
                <SectionWrapper>
                    <Portfolio />
                </SectionWrapper>
            </SectionContainer>
        </div>
    )
};

export default Work;