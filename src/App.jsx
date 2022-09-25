import { useState } from 'react'
import styled from 'styled-components';
import './App.css'
import Navbar from './components/navbar'
import HamburgerMenu from './components/hamburger';
import Product from './components/product';

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
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(true);
  }

  const hideMenu = () => {
    setMenu(false)
  }

  return (
    <Page>
      <AppContainer>
        <Navbar show={showMenu} />
        {
          menu &&
          <HamburgerMenu hide={hideMenu} />
        }
        <Product />
      </AppContainer>
    </Page>
  )

}

export default App
