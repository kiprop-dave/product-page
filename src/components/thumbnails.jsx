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
    const { thumbnails, imageIndex: current } = useContext(Context);
    const thumbnailElements = thumbnails.map((img, index) => {
        return (
            <Thumbnail key={img} source={img} open={open} current={current} index={index} opacity={true} />
        )
    })

    return (
        <>
            <ThumbnailsContainer>
                {thumbnailElements}
            </ThumbnailsContainer>
        </>
    )

}

export default Thumbnails;