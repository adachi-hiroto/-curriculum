import React, { FC, createContext, useEffect, useState } from 'react';
import './App.css';
import { categories } from './components/Category/categories';
import CategoryList from './components/Category/CategoryList';
import CardList from './components/Main/CardList';
import { Base_Url, HandleCategoryContextType } from './interface';

export const handleCategoryContext = createContext(
  {} as HandleCategoryContextType
)

const App: React.FC = () => {
  // state一覧
  const [category,setCategory] = useState(categories[0]);
  const [newsIDs,setNewsIDs] = useState([]) ;
  const [cards,setCards] = useState([]);

  // カテゴリーのAPIを取得する
  useEffect(() => {
    const Category_Url = (`${Base_Url}/${category}stories.json`);

    fetch(Category_Url)
    .then(resp => resp.json())
    .then(data => {
      // console.log("カテゴリー")
     setNewsIDs(data);
    }).catch(error => {
     console.log(error);
    });
  },[category]);
  
  const newsID = newsIDs.slice(0,1);
  console.log(newsID);

  useEffect(() => {
    const Card_Url = (`${Base_Url}/item/${newsID}.json`);

    // console.log(Card_Url);

    fetch(Card_Url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
     setCards(data);
    }).catch(error => {
     console.log(error);
    });
  },[newsID]);

  // const fetchCard = async () => {
  //   try {
  //     const Card_Url = `${Base_Url}/item/${newsID}.json`
  //     const response = await window.fetch(Card_Url)
  //     const cardData = await response.json()
  //     setCards(cardData.id)

  //   }catch (err) {
  //     console.error(err)
  //     return null
  //   }
  // }

  return (
    <div className="container">
      <h2>NEWS</h2>
      <div>
        <div></div>
        <handleCategoryContext.Provider
          value={{
            category: category,
            handleCategory: (children) => setCategory(children),
          }}>
          <CategoryList></CategoryList>
        </handleCategoryContext.Provider>
        <CardList cards={cards}></CardList>
      </div>
    </div>
  );
}

export default App;