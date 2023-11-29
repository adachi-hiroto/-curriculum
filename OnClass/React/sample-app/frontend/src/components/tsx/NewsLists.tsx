import React from 'react'
import { PostItem } from '../hooks/hooksinterface'


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
              <div className='card_container'>
                <h2 className='card_title'>{post.title}</h2>
                <p>by:{post.by}</p>
              </div>
              <a href={post.url} target='blank'>詳細</a>
            </div>
          </div>
        )
      })}
      </>
    )
  }
}

export default NewsLists