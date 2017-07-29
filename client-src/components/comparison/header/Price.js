import React from 'react'
import propTypes from 'prop-types'

export default function Price({ price }) {
  return (
    <div className="price-item-wrapper">
      <span className="price-item">{price}</span>
    </div>
  )
}

Price.propTypes = {
  price: propTypes.number.isRequired,
}
