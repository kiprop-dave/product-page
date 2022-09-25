import React, { useContext } from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    right: ${({ right }) => right ? right : 'auto'};
    left: ${({ left }) => left ? left : 'auto'};
    top: 45%;
    background-image: url(${({ source }) => source});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`

function Swipe({ left, right, source, action }) {
    return (
        <>
            <Arrow left={left} right={right} source={source}
                onClick={() => action()} />
        </>
    )
}

export default Swipe