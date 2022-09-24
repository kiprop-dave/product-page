import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 6rem;
    border-bottom: solid 1px lightgray;

    @media screen and (max-width: 600px) {
        height: 4rem;
    }
`
const MenuIcon = styled.div`
    display: none;
    height: 2rem;
    width: 1.5rem;
    margin-left: 1rem;
    cursor: pointer;
    /* border: solid 1px; */
    
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Bars = styled.div`
    width: 80%;
    border: solid 1px;
    margin-top: 0.4rem;
`
const Logo = styled.div`
    background-image: url(/icons/logo.svg);
    width: 10rem;
    height: 3rem;
    background-repeat: no-repeat;
    background-position: left center;

    @media screen and (max-width: 600px) {
        height: 2rem;
        width: 9rem;
        margin-left: 1rem;
    }
`
const NavLinks = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
    margin-left: 4rem;

    @media screen and (max-width: 600px) {
        display: none;
    }
`
const NavLink = styled.p`
    color: hsl(219, 9%, 45%);
    height: 98%;
    display: flex;
    align-items: center;
    margin-left: ${({ left }) => left ? left : '0'};
    cursor: pointer;
    &:hover{
        border-bottom: solid hsl(26, 100%, 55%);
        color: #0f0e0e;
    }
`
const CartProfile = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    width: 8rem;
    /* border: solid 1px; */

    @media screen and (max-width: 600px) {
     width: 4.5rem;
     right: 1rem;
    }
`
const CartIcon = styled.div`
    position: relative;
    cursor: pointer;
`
const ProfileIcon = styled.div`
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        border: solid 1.2px hsl(26, 100%, 55%);
    }
    @media screen and (max-width: 600px) {
        height: 2rem;
    }
    .profile{
        width: 3rem;

        @media screen and (max-width: 600px) {
            width: 2rem;
        }        
    }
`
export default function Navbar({ show }) {
    return (
        <NavbarContainer>
            <MenuIcon onClick={() => show()}>
                <Bars />
                <Bars />
                <Bars />
            </MenuIcon>
            <Logo />
            <NavLinks>
                <NavLink>Collections</NavLink>
                <NavLink left={'2rem'}>Men</NavLink>
                <NavLink left={'2rem'}>Women</NavLink>
                <NavLink left={'2rem'}>About</NavLink>
                <NavLink left={'2rem'}>Contact</NavLink>
            </NavLinks>
            <CartProfile>
                <CartIcon>
                    <img src="/icons/icon-cart.svg" alt="cart" />
                </CartIcon>
                <ProfileIcon>
                    <img src="/images/image-avatar.png" className='profile' alt="avatar" />
                </ProfileIcon>
            </CartProfile>
        </NavbarContainer>
    )
}