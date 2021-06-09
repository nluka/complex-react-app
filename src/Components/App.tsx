import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Terms from './Terms/Terms';
import Home from './Home/Home';
import HomeGuest from './HomeGuest/HomeGuest';
import CreatePost from './CreatePost/CreatePost';
import axios from 'axios';
import ViewSinglePost from './ViewSinglePost/ViewSinglePost';
import FlashMessages from './FlashMessages/FlashMessages';

axios.defaults.baseURL = 'http://localhost:8080';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('token') !== null ? true : false
  );
  const [flashMessages, setFlashMessages] = useState<string[]>([]);

  const addFlashMessage = (message: string) => {
    setFlashMessages((prev) => prev.concat(message));
  };

  return (
    <BrowserRouter>
      <FlashMessages messages={flashMessages} />
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path='/' exact>
          {isLoggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path='/create-post'>
          <CreatePost addFlashMessage={addFlashMessage} />
        </Route>
        <Route path='/post/:id'>
          <ViewSinglePost />
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
