import React from "react";
import {
    CustomButton,
    H1, H2,
    H4, H5, Hr,
    SectionContainer,
    SectionWrapper, LeftBlock, RightBlock
} from "../../components/Styling/General-Components.styles";

import bio from '../../assets/images/bio.jpg'
// import overlay from '../../assets/images/overlay.png'
import miniSeparator from '../../assets/images/separator-mini.png'
import {BioImageOverlay, BioImageWrapper, BioWrapper} from "./Bio.styles";
import {Link} from "react-router-dom";

const Bio = ({history}) => {
    return (
        <div>
            <SectionContainer withPadding pt={160} pb={40}>
                <SectionWrapper>
                    <BioWrapper align='center'>
                        <LeftBlock width={50} style={{display: 'flex', justifyContent: 'center'}}>
                            <BioImageWrapper>
                                <BioImageOverlay />
                                <img className='bio' src={bio} alt="Bio"/>
                                {/*<img className='overlay' src={overlay} alt="Bio"/>*/}
                            </BioImageWrapper>
                        </LeftBlock>
                        <RightBlock>
                            <H1>I'm Arman</H1>
                            <Hr/>
                            <div className="image">
                                <img src={miniSeparator} alt="Person"/>
                            </div>
                            <Hr/>
                            <H4>During the day I’m the lead developer at a local agency. During the evenings I spend my time working on freelance projects and building my own products.</H4>
                            <Hr/>
                            <H4>My most recent project is <Link to='/work'>Clover Clothing.</Link> It's an E-commerce app in React with firebase backend.</H4>
                        </RightBlock>
                    </BioWrapper>
                </SectionWrapper>
            </SectionContainer>
            <SectionContainer withPadding pt={40} pb={40}>
                <SectionWrapper>
                    <BioWrapper align='flex-start'>
                        <LeftBlock width={30}>
                            <H2>Why Work With Me</H2>
                            <div className="image">
                                <img src={miniSeparator}/>
                            </div>
                        </LeftBlock>
                        <RightBlock width={70} pt={0} pl={5}>
                            <H5>There’s nothing I enjoy more than designing and developing good websites for nice people. It really is that simple.</H5>
                            <Hr/>
                            <H5>I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</H5>
                            <Hr/>
                            <H5>If you’ve got a project you’d like to work on with me just <Link to='/hire-me'>get in touch</Link> and we can get to work!</H5>
                            <Hr/>
                            <CustomButton onClick={() => history.push('/hire-me')}>Hire me</CustomButton>
                        </RightBlock>
                    </BioWrapper>
                </SectionWrapper>
            </SectionContainer>
        </div>
    )
};

export default Bio;
