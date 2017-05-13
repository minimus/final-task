import React from 'react'
import {Link} from 'react-router-dom'

export default function ({price, url}) {
  return (
    <div className="item-price">
      <span className="search-item-price">{price}</span>
      <span className="purchase-button">
        <Link to={url}>Купить</Link>
      </span>
    </div>
  )
}
