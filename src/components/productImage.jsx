import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/context';
import Swipe from './swipe';

const Container = styled.div`
    width: 100%;
    height: 23rem;
    position: relative;
    z-index: 1;
    cursor: pointer;
    
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

function ProductImage({ isShown, open }) {

    const { images, imageIndex, swipeRight, swipeLeft } = useContext(Context);
    return (
        <>
            <Container onClick={() => open && open()}>
                <Image src={images[imageIndex]} alt='sneakers' className='product-image' />
                <Swipe left={'0'} source={'/icons/icon-previous.svg'}
                    action={swipeLeft} isShown={isShown} />
                <Swipe right={'0'} source={'/icons/icon-next.svg'}
                    action={swipeRight} isShown={isShown} />
            </Container>
        </>
    )
}

export default ProductImage;