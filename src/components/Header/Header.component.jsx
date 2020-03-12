import React, {useState} from "react";
import {
    HeaderContainer,
    LogoContainer,
    Logo,
    LogoWrapper,
    MenuWrapper,
    Menu,
    MainMenu,
    MenuItem, TopBar, TopBarLeft, Wrapper, Toggle
} from "./Header.styles";
import {Link} from "react-router-dom";

import LogoImg from '../../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <HeaderContainer>
            <Wrapper>
                <TopBar>
                    <div className='clearfix'>
                        <TopBarLeft>
                            <LogoWrapper>
                                <LogoContainer to='/'>
                                    <Logo src={LogoImg}/>
                                </LogoContainer>
                            </LogoWrapper>
                            <MenuWrapper>
                                <Menu isOpen={isOpen}>
                                    <MainMenu>
                                        <MenuItem><Link to='/'><span>Home</span></Link></MenuItem>
                                        <MenuItem><Link to='/work'><span>Work</span></Link></MenuItem>
                                        <MenuItem><Link to='/bio'><span>Bio</span></Link></MenuItem>
                                        <MenuItem><Link to='/hire'><span>Hire me</span></Link></MenuItem>
                                        <MenuItem><Link to='/blog'><span>Blog</span></Link></MenuItem>
                                    </MainMenu>
                                </Menu>
                                <Toggle onClick={() => setIsOpen(!isOpen)}>
                                    <svg className={`ham hamRotate ham8 ${isOpen ? 'active' : ''}`} viewBox="0 0 100 100" width="35">
                                        <path
                                            className="line top"
                                            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"/>
                                        <path
                                            className="line middle"
                                            d="m 30,50 h 40"/>
                                        <path
                                            className="line bottom"
                                            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"/>
                                    </svg>
                                </Toggle>
                            </MenuWrapper>
                        </TopBarLeft>
                    </div>
                </TopBar>
            </Wrapper>
        </HeaderContainer>
    )
};

export default Header