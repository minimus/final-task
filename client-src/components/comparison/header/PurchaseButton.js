import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function PurchaseButton({ link }) {
  return (
    <span className="purchase-button">
      <Link to={link}>Купить</Link>
    </span>
  )
}

PurchaseButton.propTypes = {
  link: propTypes.string.isRequired,
}
