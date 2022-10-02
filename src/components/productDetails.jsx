import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/context';

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 600px) {
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`
const Title = styled.h3`
    color: hsl(26, 100%, 55%);
    font-size: 14px;
`
const Name = styled.h1`
    margin-top: 0.5rem;
    color: black;
    letter-spacing: 2px;
`
const Description = styled.p`
    margin-top: 1rem;
    line-height: 25px;
    color: hsl(219, 9%, 45%);
`
const PriceContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 4rem;
`
const Price = styled.h3`
    color: black;
`
const Discount = styled.div`
    background-color: hsl(220, 14%, 75%);
    margin-left: 1rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 2px 7px 2px 7px;

`
const NoDiscount = styled.p`
    color: hsl(219, 9%, 45%);
    text-decoration: line-through;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 600px) {
     right: 1rem;
     bottom: auto;
    }
`
const Cart = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        height: 6rem;
    }
`
const Amount = styled.div`
    background-color: hsl(220, 14%, 75%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    width: 45%;
    height: inherit;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`
const AddButton = styled.button`
    background-color: hsl(26, 100%, 55%);
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: inherit;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 0.5rem;
    }
`

function ProductDetails() {
    const { name, price, discount, buyMore, buyLess,
        discountPrice, description, amountBought,
        addToCart
    } = useContext(Context);

    const itemToAdd = {
        name: name,
        price: discountPrice,
        amount: amountBought
    }

    function addItem() {
        if (amountBought > 0) {
            addToCart(itemToAdd)
        }
        return;
    }
    return (
        <>
            <DetailsContainer>
                <Title>SNEAKER COMPANY</Title>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <PriceContainer>
                    <Price>${discountPrice}.00</Price>
                    <Discount>
                        <Title>{discount}</Title>
                    </Discount>
                    <NoDiscount>${price}.00</NoDiscount>
                </PriceContainer>
                <Cart>
                    <Amount>
                        <img src="/icons/icon-minus.svg" alt="remove"
                            style={{ marginLeft: '0.5rem', cursor: 'pointer' }}
                            onClick={() => buyLess()} />
                        <h3>{amountBought}</h3>
                        <img src="/icons/icon-plus.svg" alt="add" style={{ marginRight: '0.5rem', cursor: 'pointer' }}
                            onClick={() => buyMore()} />
                    </Amount>
                    <AddButton onClick={() => addItem()}>
                        <img src="/icons/icon-cart.svg" alt="cart" />
                        <h4 style={{ marginLeft: '1rem' }}>Add to cart</h4>
                    </AddButton>
                </Cart>
            </DetailsContainer>
        </>
    )
}

export default ProductDetails