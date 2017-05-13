import React from 'react'
import ItemImage from './Image'
import ItemHeader from './Header'
import ItemPrice from './Price'
import PurchaseButton from './PurchaseButton'

export default function ({item}) {
  const picture = (Array.isArray(item.picture)) ? item.picture[0] : item.picture
  const link = `/offer/${item.id}`
  return (
    <div className="comparison-caption-cell">
      <div className="caption-cell">
        <ItemImage image={picture} link={link}/>
        <ItemHeader text={item.name} link={link}/>
        <ItemPrice price={item.price}/>
        <PurchaseButton link={item.url}/>
      </div>
    </div>
  )
}

