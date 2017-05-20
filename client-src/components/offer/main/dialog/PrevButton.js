import React from 'react'
import propTypes from 'prop-types'

export default function PrevButton({ onClick }) {
  return (
    <button id="show-left" onClick={onClick}>
      <i className="md-48 material-icons">chevron_left</i>
    </button>
  )
}

PrevButton.propTypes = {
  onClick: propTypes.func.isRequired,
}
