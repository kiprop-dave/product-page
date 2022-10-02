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
    display: ${({ isShown }) => isShown ? 'inline' : 'none'};

    @media screen and (max-width: 600px){
        display: ${({ isShown }) => isShown ? 'none' : 'inline'};
    }
`

function Swipe({ left, right, source, action, isShown }) {
    return (
        <>
            <Arrow left={left} right={right} source={source}
                onClick={() => action()} isShown={isShown} />
        </>
    )
}

export default Swipe