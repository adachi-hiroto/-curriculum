import React, { useEffect, useState } from 'react'
import './Header.css';

const Header = () => {
    // const[newsId,setNewsID] = useState([]);
    const[category,setcategory] = useState('topstories'); 
    
    const getTopCategory = () => {
        setcategory('topstories') ;
    };

    const getNewCategory = () => {
        setcategory('newstories') ;
    };

    const getBestCategory = () => {
        setcategory('beststories') ;
    };

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/${category}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            // setNewsId(data);
        })
        .catch(error => {
            console.log(error);
        });
    },[category]);

  return (
    <div className='header-wrapper'>
        <p>{category}です</p>
        <button onClick={getTopCategory}>TOP</button>
        <button onClick={getNewCategory}>NEW</button>
        <button onClick={getBestCategory}>BEST</button>
    </div>
  )
};

export default Header