import React from 'react'
import propTypes from 'prop-types'
import Thumbnails from '../preview/Thumbnails'

export default function PreviewPane({ pictures, selected, onClick }) {
  return (
    <div className="offer-preview">
      <div className="image-preview-container">
        <img className="image-preview" src={selected} alt={selected} />
      </div>
      <Thumbnails
        pictures={pictures}
        selected={selected}
        onClick={onClick}
      />
    </div>
  )
}

PreviewPane.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selected: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
}
