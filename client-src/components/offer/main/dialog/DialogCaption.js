import React from 'react'
import propTypes from 'prop-types'

export default function DialogCaption({ onClose }) {
  return (
    <div id="dialog-caption">
      <i className="material-icons md-36 close-button" onClick={onClose}>close</i>
    </div>
  )
}

DialogCaption.propTypes = {
  onClose: propTypes.func.isRequired,
}
