import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../context/context';
import Swipe from './swipe';

const Container = styled.div`
    width: 100%;
    height: 23rem;
    position: relative;
    z-index: 1;
    
    .product-image{
        object-fit: cover;
    }
`
const Image = styled.img`
    width: 100%;
    border-radius: 10px;
    height: inherit;

    @media screen and (max-width: 600px) {
     border-radius: 0;
    }
`

function ProductImage() {

    const { images, imageIndex, swipeRight, swipeLeft } = useContext(Context);
    return (
        <>
            <Container>
                <Image src={images[imageIndex]} alt='sneakers' className='product-image' />
                <Swipe left={'0'} source={'/icons/icon-previous.svg'}
                    action={swipeLeft} />
                <Swipe right={'0'} source={'/icons/icon-next.svg'}
                    action={swipeRight} />
            </Container>
        </>
    )
}

export default ProductImage;