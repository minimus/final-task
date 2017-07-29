import React from 'react'
import propTypes from 'prop-types'

export default function OfferDescription({ description }) {
  return (
    <section id="description">
      <h1>Описание</h1>
      <p>{description}</p>
    </section>
  )
}

OfferDescription.propTypes = {
  description: propTypes.string.isRequired,
}
