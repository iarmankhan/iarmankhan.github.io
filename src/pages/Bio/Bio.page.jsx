import React from "react";
import {
    CustomButton,
    H1, H2,
    H3, H4, H5, Hr,
    SectionContainer,
    SectionWrapper
} from "../../components/Styling/General-Components.styles";

import bio from '../../assets/images/bio.png'
import miniSeparator from '../../assets/images/separator-mini.png'
import {BioWrapper, LeftBlock, RightBlock} from "./Bio.styles";

const Bio = () => {
    return (
        <div>
            <SectionContainer withPadding pt={160} pb={80}>
                <SectionWrapper>
                    <BioWrapper align='center'>
                        <LeftBlock width={50}>
                            <img className='bio' src={bio} alt="Bio"/>
                        </LeftBlock>
                        <RightBlock width={50}>
                            <H1>I'm Arman</H1>
                            <Hr/>
                            <div className="image">
                                <img src={miniSeparator}/>
                            </div>
                            <Hr/>
                            <H4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore ma.</H4>
                            <Hr/>
                            <H5>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</H5>
                        </RightBlock>
                    </BioWrapper>
                </SectionWrapper>
            </SectionContainer>
            <SectionContainer withPadding pt={40} pb={40}>
                <SectionWrapper>
                    <BioWrapper align='flex-start'>
                        <LeftBlock width={30}>
                            <H2>My Bio</H2>
                            <div className="image">
                                <img src={miniSeparator}/>
                            </div>
                        </LeftBlock>
                        <RightBlock width={70} pt={0}>
                            <H4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore ma.</H4>
                            <Hr/>
                            <H5>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</H5>
                            <Hr/>
                            <CustomButton>Hire me</CustomButton>
                        </RightBlock>
                    </BioWrapper>
                </SectionWrapper>
            </SectionContainer>
        </div>
    )
};

export default Bio;
