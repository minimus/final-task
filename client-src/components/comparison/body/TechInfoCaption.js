import React from 'react'
import propTypes from 'prop-types'

export default function TechInfoCaption({ text }) {
  return <div className="tech-info-cell info-caption">{text}</div>
}

TechInfoCaption.propTypes = {
  text: propTypes.string.isRequired,
}
