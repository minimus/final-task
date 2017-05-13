import React from 'react'
import Offer from './Offer'
import WithLoadingBar from '../../WithLoadingBar'

export default function OffersList({items, selected, onSelect}) {
  return (
    <div id="category-list">
      {items.map(item => {
        return (
          <Offer item={item} selected={selected} onSelect={onSelect} key={item.id} />
        )
      })}
    </div>
  )
}

export const OffersListWithLoadingBar = WithLoadingBar(OffersList)
