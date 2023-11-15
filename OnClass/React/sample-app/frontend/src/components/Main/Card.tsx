import React from 'react'
import { CardItem } from '../../interface'

type Props = {
  cardItem: CardItem
}

const Card: React.FC<Props> = ({cardItem}) => {
  return (
    <div>
      <div className='title'>
        <a href={cardItem.url} target='_blank' rel='noopener noreferrer'>
          {cardItem.title.slice(0,50)}...
        </a>
      </div>
      <div className='time'>
        <time>{cardItem.time}</time>
      </div>
      <div className='by'>
        <p>{cardItem.by}</p>
      </div>
      <div className='id'>
        <p>{cardItem.id}</p>
      </div>
      <div>
        <time></time>
      </div>
    </div>
  )
}

export default Card