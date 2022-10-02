import React from 'react';
import styled from 'styled-components';
import ProductImage from './productImage';
import Thumbnails from './thumbnails';


const Nodal = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(30, 28, 28, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px){
        display: none;
    }
`
const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`
const CloseIcon = styled.img`
    width: 2rem;
    align-self: flex-end;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover{
        filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
    }
`
function LightBox({ close }) {
    return (
        <>
            <Nodal>
                <Container>
                    <CloseIcon src='/icons/icon-close.svg' alt='close'
                        onClick={() => close()} />
                    <ProductImage isShown={true} />
                    <Thumbnails />
                </Container>
            </Nodal>
        </>
    )
}

export default LightBox;