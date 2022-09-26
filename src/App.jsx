import { useState } from 'react'
import styled from 'styled-components';
import './App.css'
import Navbar from './components/navbar'
import HamburgerMenu from './components/hamburger';
import Product from './components/product';
import LightBox from './components/lightBox';
import Cart from './components/cart';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AppContainer = styled.div`
  width: 75%;
  min-height: inherit;
  background-color: white;
  position: relative;
  /* border: solid 1px; */

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`


function App() {
  const [menu, setMenu] = useState(false); // state for showing hamburger menu
  const [showNodal, setShowNodal] = useState(false); // state for opening and closing the lightbox gallery
  const [showCart, setShowCart] = useState(false); // state for showing cart

  const openCloseCart = () => setShowCart(prev => !prev);

  const openNodal = () => setShowNodal(true);
  const closeNodal = () => setShowNodal(false);

  const showMenu = () => {
    setMenu(true);
  }

  const hideMenu = () => {
    setMenu(false)
  }

  return (
    <Page>
      <AppContainer>
        <Navbar show={showMenu} cart={openCloseCart} />
        {
          menu &&
          <HamburgerMenu hide={hideMenu} />
        }
        <Product open={openNodal} />
        {
          showCart &&
          <Cart cart={openCloseCart} />
        }
      </AppContainer>
      {
        showNodal &&
        <LightBox close={closeNodal} />
      }
    </Page>
  )

}

export default App
