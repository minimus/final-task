import React from 'react'
import propTypes from 'prop-types'

export default function DialogCaption({ onClose }) {
  return (
    <div id="dialog-caption">
      <button className="close-button" onClick={onClose}>
        <i className="material-icons md-36">close</i>
      </button>
    </div>
  )
}

DialogCaption.propTypes = {
  onClose: propTypes.func.isRequired,
}
