import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import CPMM from './CPMM';
import styled from 'styled-components';

const Nav = styled.div`
  
`

const NavLink = styled(Link)`

`

const NavTitle = styled.h3`

`

const NavDescription = styled.p`
`

function App() {
  const nav = (
    <Nav>
      <NavLink to="/CPMM">
        <NavTitle>CPMM (Constant Product Market Maker)</NavTitle>
        <NavDescription>An automated market maker that works similar to how Uniswap and Balancer operate where LP's can dynamically pool liquidity to match with traders. This is used by for example Poly Market (https://poly.market) </NavDescription>
      </NavLink>
      <NavLink to="/LMSR">
        <NavTitle>LMSR (Hanson's Logarithmic Market Scoring Rule)</NavTitle>
        <NavDescription>Coming soon...</NavDescription>
      </NavLink>
      <NavLink to="/LS-LMSR">
        <NavTitle>CPMM (Liquidity Sensative Logarithmic Market Scoring Rule)</NavTitle>
        <NavDescription>Coming soon...</NavDescription>
      </NavLink>
    </Nav>
  )
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component = { () => nav}/>
        <Route path="/CPMM" component={CPMM}/>
        <Route path="/LMSR" component={() => <div>coming soon</div>}/>
        <Route path="/LS-LMSR" component={() => <div>coming soon</div>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
