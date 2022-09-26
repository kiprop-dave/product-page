import React, { useContext } from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnail';
import { Context } from '../context/context';

const ThumbnailsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 600px) {
        display: none;
    }
`

function Thumbnails({ open }) {
    const { thumbnails } = useContext(Context);
    const thumbnailElements = thumbnails.map(img => <Thumbnail key={img} source={img} open={open} />)

    return (
        <>
            <ThumbnailsContainer>
                {thumbnailElements}
            </ThumbnailsContainer>
        </>
    )

}

export default Thumbnails;