import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import BaseComponent from './components/base-component/BaseComponent';
import Header from './components/header/Header';
import Products from './components/products/Products.jsx';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Route path='/' exact component={BaseComponent} />
        <Route path='/Home' component={BaseComponent} />
        <Route path='/Products' component={Products} />
        <Route path='/ContactUs' />
      </Router>
    </div>
  );
}

export default App;
