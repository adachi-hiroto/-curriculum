import React  from 'react'
import { Category } from '../hooks/hooksinterface'

interface TabProps {
  selectTab: string
  setSelectTab: React.Dispatch<React.SetStateAction<string>>
  tabsCategories: Category
}

const TabsSelect: React.FC<TabProps> = ({ selectTab, setSelectTab, tabsCategories }) => {
  const clickTab = (event: React.MouseEvent<HTMLButtonElement>, newTab: string):void => {
    setSelectTab(newTab)
  }

  return (
    <div className='tabs'>
      {Object.keys(tabsCategories).map(key =>{
        return(
          <button key={key} value={key} onClick={clickTab}>{tabsCategories[key]}</button>
        )
      })}
    </div>
  )
}

export default TabsSelect