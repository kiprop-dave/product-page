import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/context';
import ProductImage from './productImage';
import Thumbnail from './thumbnail';
import ProductDetails from './productDetails';

const Container = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    min-height: 70vh;
    
    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin-top: 0;
    }
`
const Photos = styled.div`
    margin-left: 3%;
    height: 90%;
    width: 40%;
    
    @media screen and (max-width: 600px) {
        margin-left: 0;
        width: 100%;
    }
`
const ThumbnailsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 600px) {
        display: none;
    }
`
const DetailsWrapper = styled.div`
    margin-right: 3%;
    width: 45%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 100%;
        padding-bottom: 2rem;
    }
`
function Product() {
    const { thumbnails } = useContext(Context);

    const thumbnailElements = thumbnails.map(img => <Thumbnail key={img} source={img} />)
    return (
        <>
            <Container>
                <Photos>
                    <ProductImage />
                    <ThumbnailsContainer>
                        {thumbnailElements}
                    </ThumbnailsContainer>
                </Photos>
                <DetailsWrapper>
                    <ProductDetails />
                </DetailsWrapper>
            </Container>
        </>
    )
}

export default Product;