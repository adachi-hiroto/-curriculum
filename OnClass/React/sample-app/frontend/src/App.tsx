import React from 'react';
import './App.css';
import CardList from './CardList';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <h2>NEWS</h2>
      <Header></Header>
      <CardList/>
    </div>
  );
}

export default App;