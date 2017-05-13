import React from 'react'
import {Link} from 'react-router-dom'

export default function ({link}) {
  return (
    <span className="purchase-button">
      <Link to={link}>
        Купить
      </Link>
    </span>
  )
}
