import styled from 'styled-components'
import {CustomButton} from "../Styling/General-Components.styles";

export const ContactContainer = styled.div`
    width: 100%;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
  @media screen and (min-width: 1240px){
    flex-wrap: nowrap;
  }
`;

export const ContactFormButton = styled(CustomButton)`
    margin: 10px;
`;
