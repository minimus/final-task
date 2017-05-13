import React from 'react'
import Price from './Price'

export default function ({items}) {
  return (
    <div className="price-row">
      <div className="empty-cell"/>
      {items.map((e, i) =>
        <div className="price-cell" key={i}>
          <Price price={e.price}/>
        </div>)}
    </div>
  )
}
