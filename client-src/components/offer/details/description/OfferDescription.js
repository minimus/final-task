import React from 'react'
import propTypes from 'prop-types'

export default function OfferDescription({ description }) {
  return (
    <div id="description">
      <h3>Описание</h3>
      <p>{description}</p>
    </div>
  )
}

OfferDescription.propTypes = {
  description: propTypes.string.isRequired,
}
