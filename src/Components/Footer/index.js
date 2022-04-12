import React from 'react'
import{FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems
,FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, 
SocialLogo, WebsiteRight, SocialIcons, SocialIconLink} from './FooterElements'

import {FaDiscord} from 'react-icons/fa'

import {animateScroll as scroll} from 'react-scroll'

function Footer() {

    const toggleHome= () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to='/signin'> How it works</FooterLink>
                            <FooterLink to='/signin'> Careers</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About usa </FooterLinkTitle>
                            <FooterLink to='/signin'> How it works</FooterLink>
                            <FooterLink to='/signin'> Careers</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About usaaaaaa </FooterLinkTitle>
                            <FooterLink to='/signin'> How it works</FooterLink>
                            <FooterLink to='/signin'> Careers</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About usaaaaaaa </FooterLinkTitle>
                            <FooterLink to='/signin'> How it works</FooterLink>
                            <FooterLink to='/signin'> Careers</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                            <FooterLink to='/signin'> About us</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    ZKLANDS
                </SocialLogo>
                <WebsiteRight> zklands copyright {new Date().getFullYear()} All rights reserved. </WebsiteRight>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Discord"> 
                        <FaDiscord/>
                    </SocialIconLink>

    
                    
                </SocialIcons>
            </SocialMediaWrap>
            </SocialMedia>  
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer