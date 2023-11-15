import React from 'react'
import { categories } from './categories'
import CategoryButton from './CategoryButton'

const CategoryList: React.FC = () => {
  return (
    <div>
      {categories.map((category) => (
        <CategoryButton  key={category}>{category}</CategoryButton>
      ))}
    </div>
  )
}

export default CategoryList