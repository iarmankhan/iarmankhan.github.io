import React from 'react'
import {
    H2,
    RightBlock,
    SectionContainer,
    SectionWrapper
} from "../../components/Styling/General-Components.styles";
import {LinkTreeLeftBlock, LinkTreeLI, LinkTreeUL, LinkTreeWrapper} from "./LinkTree.styles";

const LinkTree = () => {
    return (
        <div>
            <SectionContainer withPadding pt={160} pb={80}>
                <SectionWrapper>
                    <LinkTreeWrapper>
                        <LinkTreeLeftBlock width={40}>
                            <H2>Link Tree</H2>
                        </LinkTreeLeftBlock>
                        <RightBlock width={60}>
                            <LinkTreeUL>
                                <LinkTreeLI><a
                                    href="https://www.instagram.com/codingwitharman/">Instagram</a></LinkTreeLI>
                                <LinkTreeLI><a href="https://github.com/iarmankhan">Github</a></LinkTreeLI>
                                <LinkTreeLI><a href="https://codepen.io/iarman">Codepen</a></LinkTreeLI>
                                <LinkTreeLI><a
                                    href="https://drive.google.com/open?id=1xUwXUqFqshs3da1ppzOfecJM55AEhBxH">Wallpapers</a></LinkTreeLI>
                                <LinkTreeLI><a href="https://www.instagram.com/iarman.khan/">Instagram -
                                    Personal</a></LinkTreeLI>
                                <LinkTreeLI><a href="https://www.linkedin.com/in/iarmankhan/">LinkedIn</a></LinkTreeLI>
                                <LinkTreeLI><a
                                    href="https://www.facebook.com/codingwitharman/">Facebook</a></LinkTreeLI>
                            </LinkTreeUL>
                        </RightBlock>
                    </LinkTreeWrapper>
                </SectionWrapper>
            </SectionContainer>
        </div>
    )
};

export default LinkTree
