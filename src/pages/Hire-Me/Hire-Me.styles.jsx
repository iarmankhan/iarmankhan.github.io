import styled from "styled-components";
import {ColumnWrapper} from "../../components/Styling/General-Components.styles";

export const ContactFormWrapper = styled(ColumnWrapper)`
    display: flex;
    align-items: ${({align}) => `${align}`};
    
    h1{
       font-size: 50px;
    }
    
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`;
