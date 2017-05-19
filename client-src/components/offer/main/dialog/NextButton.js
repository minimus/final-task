import React from 'react'
import propTypes from 'prop-types'

export default function NextButton({ onClick }) {
  return (
    <div id="show-right" onClick={onClick}>
      <i className="material-icons md-48">chevron_right</i>
    </div>
  )
}

NextButton.propTypes = {
  onClick: propTypes.func.isRequired,
}
