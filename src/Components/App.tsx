import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import HomeGuest from './HomeGuest/HomeGuest';
import Footer from './Footer/Footer';
import About from './About/About';
import Terms from './Terms/Terms';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomeGuest />
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
