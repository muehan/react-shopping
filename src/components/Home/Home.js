import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

const Home = () => (
  <div className="Home" data-testid="Home">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a demo react web shop
        </p>
      </header>
  </div>
);

Home.defaultProps = {};

export default Home;
