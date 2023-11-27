import React from 'react'
import { PostItem } from '../hooks/hooksinterface'


interface PostsProps {
  isLoading: boolean
  postDatas: PostItem[]
}

const NewsLists: React.FC<PostsProps> = ({ isLoading, postDatas }: PostsProps) => {

  if (isLoading) {
    return (
    )
  } else {
    return (
      <>
        {postDatas.map((post) => {
          return (
          )
        })}
      </>
    )
  }
}

export default NewsLists