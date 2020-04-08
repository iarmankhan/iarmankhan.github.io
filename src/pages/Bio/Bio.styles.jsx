import styled from "styled-components";
import {ColumnWrapper} from "../../components/Styling/General-Components.styles";

export const BioWrapper = styled(ColumnWrapper)`
    display: flex;
    align-items: ${({align}) => `${align}`};
    
    @media screen and (max-width: 768px){
        flex-direction: column;
        margin: 20px;
    }
`;

export const BioImageWrapper = styled.div`
    position: relative;
    width: 70%;
     
    img.bio {
        width: 100%;
    }
    
    img.overlay{
       position: absolute;
       top: 9px;
       left: -197px;
       width: 100%;
       
       @media screen and (max-width: 412px){
          left: -115px;
       }
    }
`;

export const BioImageOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    //background-color: #03034a;
    background-color: blue;
    opacity: .15;
`;
