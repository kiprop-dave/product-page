import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(36, 35, 35, 0.4);

  @media screen and (max-width: 600px) {
    display: block;
  }  
`

const Container = styled.div`
    width: 70%;
    height: 100vh;
    background-color: white;
    padding-left: 1rem;
`
const Separator = styled.div`
    height: 1.5rem;
`
const CloseMenu = styled.div`
    width: 10%;
    display: flex;
    align-items: center;

    .close-icon{
        cursor: pointer;
    }
`
const MenuLinks = styled.div`
    margin-top: 3rem;
`
const MenuLink = styled.h3`
    color: #0c0b0b;
    margin-top: 2rem;
    cursor: pointer;
`
function HamburgerMenu({ hide }) {
    return (
        <Menu>
            <Container>
                <Separator />
                <CloseMenu>
                    <img src="/icons/icon-close.svg" alt="close" className='close-icon'
                        onClick={() => hide()} />
                </CloseMenu>
                <MenuLinks>
                    <MenuLink>Collections</MenuLink>
                    <MenuLink>Men</MenuLink>
                    <MenuLink>Women</MenuLink>
                    <MenuLink>About</MenuLink>
                    <MenuLink>Contact</MenuLink>
                </MenuLinks>
            </Container>
        </Menu>
    )
}

export default HamburgerMenu