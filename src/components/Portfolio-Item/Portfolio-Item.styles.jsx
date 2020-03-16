import styled from "styled-components";

export const PortfolioItemContainer = styled.li`
     width: 47.99%;
     top: 0;
     left: 0;
     margin: 0 1% 20px;
     list-style: none!important;
     float: left;
     background: none;
     z-index: 2;
     
     @media only screen and (max-width: 479px) {
        width: 100%;
        max-width: 95%;
        margin-left: 10px;
        margin-right: 10px;
     }
     
     & .hover-wrapper {
         position: relative;
         overflow: hidden;
         
         &:hover{
            & .hover-desc{
                opacity: 1;
                visibility: visible;
            }
         }
         
         & .hover-desc {
            background: rgba(0,255,222,0.8);
            transition: all 0.3s ease-in-out;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            padding: 10% 10% 50px;
            box-sizing: border-box;
            z-index: 2;
            
            .desc-inner {
                color: #444;
                height: 100%;
                overflow: hidden;
                
                & .title::after{
                    content: "";
                    display: block;
                    margin: 15px 0;
                    width: 20px;
                    height: 3px;
                    background: #444;
                }
            }
            
            .links {
                box-sizing: border-box;
                padding: 0 7% 0 8%;
                position: relative;
                width: 100%;
                
                .link{
                    font-size: 25px;
                    top: 0;
                    left: 0;
                    position: absolute;
                    transition: all .3s ease-out;
                    
                    &:hover{
                      top: -5px;
                    }
                }
            }
         }
         & .image-wrapper {
            line-height: 0;
            
             img {
                  max-width: 100%;
                  height: auto;
             }
         }
     }
`;