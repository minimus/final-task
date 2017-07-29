import React from 'react'
import propTypes from 'prop-types'

export default function NextButton({ onClick }) {
  return (
    <button id="show-right" onClick={onClick}>
      <i className="material-icons md-48">chevron_right</i>
    </button>
  )
}

NextButton.propTypes = {
  onClick: propTypes.func.isRequired,
}
