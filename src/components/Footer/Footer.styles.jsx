import styled from "styled-components";
import {ColumnWrapper} from "../Styling/General-Components.styles";

export const FooterColumnWrapper = styled(ColumnWrapper)`
    display: flex;
    margin: 0 auto;
    max-width: 98%;
    flex-direction: column;
    
    @media screen and (min-width: 1240px){
        flex-direction: row;
    }
`;

export const Column = styled.div`
    width: 98%;
    margin: 0 2% 5px;
    
    @media screen and (min-width: 1240px){
      width: 31.333%;
      margin-bottom: 40px;
    }
`;

export const TextWidget = styled.div`
    padding: 15px 0;
    margin-bottom: 0;
    
    a{
       color: white;
    }
    a:hover{
      text-decoration: underline;
    }
`;

export const P = styled.p`
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    letter-spacing: 0px;
`;

export const FooterCopy = styled.div`
    border-top: 1px solid rgba(255,255,255,.1);
    text-align: center;
    
    & .container {
        margin: 20px;
        
        .column {
          display: flex;
          flex-wrap: wrap;  
          align-items: center;
          justify-content: center;
          
          @media screen and (min-width: 1240px){
            justify-content: space-between;
          }
          
          .social {
              display: flex;
              margin: 10px;
              
              li {
                 margin: 10px;
                 
                 svg{
                    width: 25px;
                    fill: white;
                 }
              }
          }
        }
    }
`;
