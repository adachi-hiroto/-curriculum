import React from 'react'
import { PostItem } from '../hooks/hooksinterface'
import "./tsx.css";


interface PostsProps {
  isLoading: boolean
  postDatas: PostItem[]
}

const NewsLists: React.FC<PostsProps> = ({ isLoading, postDatas }: PostsProps) => {

  if (isLoading) {
    return (
      <div className='grid'></div>
    )
  }else{
    return(
      <>
      {postDatas.map((post)=> {
        return(
          <div key={post.id}>
            <div className='card'>
              <h2 className='card_title'>title: {post.title}</h2>
              <div className='card_container'>
                <p>by:{post.by}</p>
                <a href={post.url} target='blank'>詳細</a>
              </div>
            </div>
          </div>
        )
      })}
      </>
    )
  }
}

export default NewsLists