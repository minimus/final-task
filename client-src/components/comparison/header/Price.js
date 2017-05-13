import React from 'react'

export default function ({price}) {
  return (
    <div className="price-item-wrapper">
      <span className="price-item">
        {price}
      </span>
    </div>

  )
}
