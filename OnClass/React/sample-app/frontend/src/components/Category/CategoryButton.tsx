import React, { useContext } from 'react'
import { handleCategoryContext } from '../../App'


const CategoryButton = ({children}) => {
    const { category , handleCategory } = useContext(handleCategoryContext)
    
  return (
    <div>
      <button onClick={() => handleCategory(children)}>{children}</button>
    </div>
  )
}

export default CategoryButton