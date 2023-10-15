import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { categories } from './components/Header/Category/categories';
import CardList from './components/M/CardList';
import CategoryList from './components/Header/Category/CategoryList';

export const handleCategoryContext = createContext();

function App() {
  const [category,setCategory] = useState(categories[0])

  useEffect(() => {

  })

  return (
    <div className="container">
      <h2>NEWS</h2>
      <div>
        <handleCategoryContext.Provider
        value={{
          category: category,
          hadleCategory: (children) => setCategory(children),
        }}>
          <CategoryList></CategoryList>
        </handleCategoryContext.Provider>
      <CardList></CardList>
      </div>
    </div>
  );
}

export default App;