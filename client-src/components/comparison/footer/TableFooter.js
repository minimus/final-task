import React from 'react'
import PurchaseButton from '../header/PurchaseButton'

export default function ({items}) {
  return (
    <div className="purchase-row">
      <div className="empty-cell"/>
      {items.map((e, i) =>
        <div className="footer-cell" key={i}>
          <PurchaseButton link={e.url}/>
        </div>)}
    </div>
  )
}
