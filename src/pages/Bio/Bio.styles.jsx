import styled from "styled-components";
import {ColumnWrapper} from "../../components/Styling/General-Components.styles";

export const BioWrapper = styled(ColumnWrapper)`
    display: flex;
    align-items: ${({align}) => `${align}`};
    
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const LeftBlock = styled.div`
    width: ${({width}) => `${width}%`};
    
    img.bio {
        width: 100%;
    }
    
    @media screen and (max-width: 768px){
        width: 90%;
    }
`;

export const RightBlock = styled.div`
    width: ${({width}) => `${width}%`};
    padding: 50px 0 0 5%;
    padding-top: ${({pt}) => `${pt}`};
    
    @media screen and (max-width: 768px){
        width: 90%;
    }
`;
