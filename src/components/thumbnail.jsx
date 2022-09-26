import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: ${({ width }) => width ? width : '5rem'};
    border-radius: ${({ radius }) => radius ? radius : '8px'};
    cursor: pointer;

    &:hover{
        opacity: 0.3;
    }
`
function Thumbnail({ source, open, width, radius }) {
    return (
        <>
            <Image src={source} alt='pic' width={width} radius={radius}
                onClick={() => open && open()} />
        </>
    )
}

export default Thumbnail