import styled from "styled-components";
import headerImg from '../../assets/images/header.jpg'
import {Link} from "react-router-dom";

export const HeaderContainer = styled.header`
    background-color: #03034a;
    position: static;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1001;
    
    @media only screen and (min-width: 768px){
        background-color: transparent;
        transition: left .5s ease-in-out, right .5s ease-in-out, background-color .5s ease-in-out;
    }

    @media only screen and (min-width: 1240px){
        left: 0;
        background-image: url("${headerImg}");
        background-position: left top;
        background-repeat: no-repeat;
        position:fixed;
        width: 250px;
        top: 0;
        height: 100%;
        z-index: 9000;
        -webkit-box-shadow: 2px 0 4px 2px rgba(0,0,0,.15);
        box-shadow: 2px 0 4px 2px rgba(0,0,0,.15);
    }
`;

export const Wrapper = styled.div`
    display: block!important;
    opacity: 1!important;
    
    @media only screen and (min-width: 1240px){
        opacity: 1;
        margin: 0;
        transition: opacity .5s ease-in-out, margin 0s ease-in-out .5s;
    }
`;

export const TopBar = styled.div`
    position: static;
    left: 0;
    top: 61px;
    z-index: 30;
    width: 100%;
    
    @media only screen and (max-width: 1239px) {
        position: static;
        width: 100%;
    }
    
    @media only screen and (max-width: 767px) {
        background-color: #03034a !important;
    }
`;

export const TopBarLeft = styled.div`
    margin-top: 0;
    overflow: visible;
    float: none;
    width: 100%;
    position:relative;
    
    @media only screen and (min-width: 1240px){
        float: none;
        margin: 15px 0;
        width: 100%!important;
    }
`;

export const LogoWrapper = styled.div`
    position: static;
    float: left;
    width: 100%;
    text-align:center;
    margin: 0;
    background-color: #03034a;
    
    @media only screen and (min-width: 1240px){
        float: none;
        margin: 15px 0 40px;
        background-color: transparent;
    } 
`;

export const LogoContainer = styled(Link)`
    display: block;
    padding: 0;
    margin: 10px 50px;
    
    @media only screen and (min-width: 1240px){
        //padding: 40px 30px;
    }
`;

export const Logo = styled.img`
    height: 100%;
    max-height: 50px;
    display: inline-block;
    vertical-align: middle;
    
    @media only screen and (min-width: 1240px){
        width: 90%;
        max-height: none;
    }
`;

export const MenuWrapper = styled.div`
    float: left;
    width: 100%;
    margin: 0;
    background-color: #03034a;  
    
    @media only screen and (min-width: 1240px){
        float: none;
        margin: 0 0 30px;
        z-index: 201;
    }
`;

export const Menu = styled.nav`
    z-index: 201;
    transition: all 0.5s cubic-bezier(0.17, 0.04, 0.03, 0.94);
    ${({isOpen}) => 
        isOpen ? 
            `visibility: visible;
            opacity: 1` :
            `visibility: hidden;
            opacity: 0`
    };
    position: absolute;
    width: 100%;
    height: auto;
    bottom: auto;
    top: 70px;
    background-color: #03034a;  
    padding-bottom: 10px;
    
    @media only screen and (min-width: 1240px){
        background-color: transparent;
        padding-bottom: 0;
        display: block;
        visibility: visible;
        opacity: 1;
        position: static;
    }
`;

export const MainMenu = styled.ul`
    width: 100%;
    float: left;
    z-index: 202;
    padding: 0;
    list-style: none outside;
`;

export const MenuItem = styled.li`
    margin: 0;
    z-index: 203;
    display: block;
    float: left;
    width: 100%;
    padding-bottom: 0;
    border-right: 0;
    
    a{
        padding: 0 25px;
        display: block;
        height: auto;
        line-height: normal;
        border: none;
        color: #fff;
        transition: all .3s ease-in-out;
        position: relative;
        font-size: 13px;
      
        span{
            border: none;
            line-height: 44px;
            display: inline;
            padding: 0;
            white-space: nowrap;
        }
    }
    
    @media only screen and (min-width: 1240px){
        width: 100%;
        float: none;
        position: relative;
        
        a{
            padding: 0;
            text-align: center;
            font-size: 20px;
            
            span{
                border-right: 0;
                border-bottom-width: 1px;
                line-height: 38px;
                display: block;
                padding: 0 20px;
                white-space: nowrap;
            }
        }
    }
`;

export const Toggle = styled.span`
    display: none;
    position: absolute;
    right: 20px;
    top: 35px;
    margin-top: -17px;
    width: 34px;
    height: 34px;
    text-align: center;
    border-radius: 3px;
    z-index: 200;
    
    @media only screen and (max-width: 767px){
        top: 35px;
        right: 10px;
    }
    @media only screen and (max-width: 1239px){
        display: block;
    }
    
    .ham {
        fill: #fff;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .line {
        fill:none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke:#fff;
        stroke-width:5.5;
        stroke-linecap:round;
    }
    .hamRotate.active {
        transform: rotate(45deg);
    }
    .ham8 .top {
        stroke-dasharray: 40 160;
    }
    .ham8 .middle {
        stroke-dasharray: 40 142;
        transform-origin: 50%;
        transition: transform 400ms;
    }
    .ham8 .bottom {
        stroke-dasharray: 40 85;
        transform-origin: 50%;
        transition: transform 400ms, stroke-dashoffset 400ms;
    }
    .ham8.active .top {
        stroke-dashoffset: -64px;
    }
    .ham8.active .middle {
        transform: rotate(90deg);
    }
    .ham8.active .bottom {
        stroke-dashoffset: -64px;
    }
`;