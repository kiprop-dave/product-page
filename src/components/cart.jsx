import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/context';
import Thumbnail from './thumbnail';

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 6.2rem;
    z-index: 2;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 13rem;
    width: 35%;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
        width: 95%;
        top: 4.5rem;
        right: 2.5%;
    }
`
const Header = styled.div`
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px lightgray;
`
const CartTitle = styled.h3`
    color: black;
    margin-left: 1rem;
`
const CloseIcon = styled.img`
    height: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;

    &:hover{
        filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
    }
`
const Empty = styled.div`
    color: hsl(219, 9%, 45%);
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FullCart = styled.div`
    height: 8.5rem;
    margin: 1rem 0.5rem 0 0.5rem;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Details = styled.div`
    color: hsl(219, 9%, 45%);
    margin-left: 1rem;
    height: 3.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .price{
        margin-bottom: 0.5rem;
    }

    .total{
        color: black;
        font-weight: 600;
        margin-left: 1rem;
    }
`
const Remove = styled.img`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
`
const Checkout = styled.button`
    background-color: hsl(26, 100%, 55%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: none;
    margin-top: 1rem;
    font-weight: 600;
    cursor: pointer;
`
function Cart({ cart }) {
    const { cartItems, thumbnails, imageIndex, removeFromCart
    } = useContext(Context);

    const totalPrice = () => cartItems.price * cartItems.amount

    return (
        <>
            <Container>
                <Header>
                    <CartTitle>Cart</CartTitle>
                    <CloseIcon src='/icons/icon-close.svg' alt='close'
                        onClick={() => cart()} />
                </Header>
                {
                    cartItems.name ?
                        <FullCart>
                            <Item>
                                <Thumbnail source={thumbnails[imageIndex]} width={'4rem'} radius={'5px'} />
                                <Details>
                                    <p>{cartItems.name}</p>
                                    <p className='price'>{cartItems.price}.00 x {cartItems.amount}
                                        <span className='total'>${totalPrice()}.00</span>
                                    </p>
                                </Details>
                                <Remove src='/icons/icon-delete.svg' alt='delete' onClick={() => removeFromCart()} />
                            </Item>
                            <Checkout>
                                Checkout
                            </Checkout>
                        </FullCart> :
                        <Empty>
                            <h4>Your cart is empty.</h4>
                        </Empty>
                }
            </Container>
        </>
    )
}

export default Cart;