import React, { useEffect, useState } from 'react'
import './Header.css';

const Header = () => {
    // const[news,setNews] = useState('');
    const[id,setid] = useState('topstories'); 
    
    const getTopId = () => {
        setid('topstories') ;
    };

    const getNewId = () => {
        setid('newstories') ;
    };

    const getBestId = () => {
        setid('beststories') ;
    };

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/${id}`,{
            mode:'cors'
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    },[id]);

  return (
    <div className='header-wrapper'>
        <p>{id}です</p>
        <button onClick={getTopId}>TOP</button>
        <button onClick={getNewId}>NEW</button>
        <button onClick={getBestId}>BEST</button>
    </div>
  )
};

export default Header