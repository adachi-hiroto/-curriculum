import React from 'react'
import TabsSelect from './TabsSelect'
import { useGetPosts } from '../hooks/useGetPost'
import NewsLists from './NewsLists'
import "./tsx.css";

const Main: React.FC = () => {
  const { textCategory, categories, postDatas, isLoading, setCategory } = useGetPosts()
  return (
    <div className='box'>
        <TabsSelect selectTab={textCategory} setSelectTab={setCategory} tabsCategories={categories} />
        <NewsLists isLoading={isLoading} postDatas={postDatas} />
    </div>
  )
}

export default Main