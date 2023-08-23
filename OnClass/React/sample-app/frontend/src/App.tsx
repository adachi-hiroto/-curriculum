import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';

function App() {
  return (
    <div className="container">
      <h2>NEWS</h2>
      <form>
        <input type="text" placeholder='記事を探す'/>
      </form>
      <CardList/>
    </div>
  );
}

export default App;
