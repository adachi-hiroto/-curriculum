import React, { useContext } from 'react'
import { handleCategoryContext } from '../../App';
import './category.css';

type Props = {
  children: string
}

const CategoryButton: React.FC<Props> = ( { children } ) => {
  const { category , handleCategory } = useContext(handleCategoryContext)
    
  return (
    <div>
      <button
        className = {category === children ? 'clicked' : 'unclicked'} 
        onClick={() => handleCategory(children as string)}
        >
          {children}
        </button>
    </div>
  )
}

export default CategoryButton