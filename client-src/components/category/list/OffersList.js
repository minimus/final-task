import React from 'react'
import propTypes from 'prop-types'
import Offer from './Offer'
import WithLoadingBar from '../../WithLoadingBar'

export default function OffersList({ items, selected, onSelect }) {
  return (
    <div id="category-list">
      {items.map(item => (
        <Offer item={item} selected={selected} onSelect={onSelect} key={item.id} />
        ))}
    </div>
  )
}

OffersList.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  selected: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
}

export const OffersListWithLoadingBar = WithLoadingBar(OffersList)
