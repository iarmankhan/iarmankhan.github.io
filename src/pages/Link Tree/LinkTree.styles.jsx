import styled from "styled-components";
import {LeftBlock} from "../../components/Styling/General-Components.styles";

export const LinkTreeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  @media screen and (min-width: 1024px){
      flex-wrap: nowrap;
  }
`;

export const LinkTreeLeftBlock = styled(LeftBlock)`
  display: flex;
  justify-content: center; 
  align-items: center;
   margin-right: 20px;
`;

export const LinkTreeUL = styled.ul`

`;

export const LinkTreeLI = styled.li`
    display: block;
    text-align: center;
    margin: 10px;
    border: 1px solid;
    font-size: 18px;
    font-weight: 600;
    transition: .3s all;
    
    a{
      color: white;
      display: block;
      padding: 20px 50px;
    }
    
    &:hover{
      background-color: white;
      
      a{
        color: black;
      }
    }
`;

