import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Terms from './Terms/Terms';
import Home from './Home/Home';
import HomeGuest from './HomeGuest/HomeGuest';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('token') !== null ? true : false
  );

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path='/' exact>
          {isLoggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/terms'>
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
