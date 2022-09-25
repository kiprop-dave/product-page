import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 5rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        opacity: 0.3;
    }
`
function Thumbnail({ source }) {
    return (
        <>
            <Image src={source} alt='pic' />
        </>
    )
}

export default Thumbnail