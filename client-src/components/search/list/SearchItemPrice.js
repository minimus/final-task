import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SearchItemPrice({ price, url }) {
  return (
    <div className="item-price">
      <span className="search-item-price">{price}</span>
      <span className="purchase-button">
        <Link to={url}>Купить</Link>
      </span>
    </div>
  )
}

SearchItemPrice.propTypes = {
  price: propTypes.number.isRequired,
  url: propTypes.string.isRequired,
}
