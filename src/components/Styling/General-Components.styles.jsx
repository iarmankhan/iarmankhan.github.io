import styled from "styled-components";
import separatorImage from '../../assets/images/separator.png'

export const CustomButton = styled.button`
    border: 2px solid #00ffde;
    border-radius: 3px;
    background-color: transparent;
    box-shadow: inset 0 0 0 0;
    background-image: none;
    font-size: 18px;
    cursor: pointer;
    padding: 15px 25px;
    transition: all .3s;
    color: #fff;
    
    &:hover{
        background-color: #00ffde;
        color: #696969;
    }
`;

export const Hr = styled.hr`
    background: none;
    border: none;
    margin: 0 auto 35px;
    clear: both;
`;

export const SeparatorContainer = styled.div`
    margin: 10px 0 40px;
    .separator {
        margin: 0 auto;
        max-width: 90%;
        background: url(${separatorImage}) no-repeat center center;
        height: 36px;
        
        @media screen and (min-width: 1240px){
            max-width: 100%;
        }
    }
ℹ ｢wds｣: Content not from webp
`;

export const BackToTop = styled.a`

`;


export const H1 = styled.h1`
    font-size: 70px;
    line-height: 70px;
    font-weight: 700;
    letter-spacing: 1px;
    
    @media only screen and (max-width: 479px) {
        font-size: 42px;
        line-height: 42px;
        letter-spacing: 1px;
    }
`;

export const H2 = styled.h2`
    font-size: 50px;
    line-height: 55px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0 0 15px 0;
    
    &.sub-text{
        font-weight: 400;
    }
    
    @media only screen and (max-width: 479px) {
        font-size: 30px;
        line-height: 30px;
    }
`;

export const H3 = styled.h3`
    font-size: 28px;
    line-height: 30px;
    font-weight: 700;
    letter-spacing: 1px;
`;


export const SectionContainer = styled.div`
    position: relative;
    ${({withPadding, pb, pt}) => withPadding ?
        `   padding-top: ${pt}px;
            padding-bottom: ${pb}px;`
        : ''
    };
    padding-left: 10px;
    padding-right: 10px;
    
    @media screen and (min-width: 1240px){
        padding-left: 0;
        padding-right: 0;
    }
`;

export const SectionWrapper = styled.div`
    margin: 0 auto;
    max-width: 1220px;
    position: relative;
        
    & .content {
        margin: 0 1% 40px;
        max-width: 100%;
        padding-right: 2%;
    }
    
    @media screen and (min-width: 1240px){
        margin: 0 auto;
        max-width: 1102px;
        
        & .content {
            max-width: 98%;
            padding-right: 10%;
        }
    }
    
    
`;

export const ColumnWrapper = styled.div`
    margin: 0 1% 40px;
    max-width: 100%;
    //padding-right: 2%;
    
    ${({mt}) => mt ? `margin-top: ${mt}px` : ''};
    
    @media screen and (min-width: 1240px){
        & .content {
            max-width: 98%;
            padding-right: 10%;
        }
    }
`;