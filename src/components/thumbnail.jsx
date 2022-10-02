import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: ${({ width }) => width ? width : '5rem'};
    border-radius: ${({ radius }) => radius ? radius : '8px'};
    cursor: pointer;
    opacity: ${({ active, opacity }) => active && opacity ? '0.5' : 1};
    border: ${({ active }) => active ? 'solid 2px red' : 'none'};

    &:hover{
        opacity: 0.3;
    }
`
function Thumbnail({ source, current, index, open, opacity, width, radius }) {

    const active = () => current === index ? true : false; // checks for the current image on the product image

    return (
        <>
            <Image src={source} alt='pic' width={width} radius={radius} active={active()}
                opacity={opacity} onClick={() => open && open()} />
        </>
    )
}

export default Thumbnail