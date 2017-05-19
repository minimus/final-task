import React from 'react'
import propTypes from 'prop-types'
import Thumbnails from './Thumbnails'
// import noPicture from '../../../category/no_photo.png'

export default function Preview({ pictures, selectedPicture, onClick, onOpen }) {
  // const picture = selectedPicture || noPicture
  // const pics = pictures || [noPicture]
  return (
    <div className="offer-preview">
      <div className="image-preview-container" onClick={onOpen}>
        <img className="image-preview" src={selectedPicture} alt={selectedPicture} />
      </div>
      <Thumbnails pictures={pictures} selected={selectedPicture} onClick={onClick} />
    </div>
  )
}

Preview.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selectedPicture: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  onOpen: propTypes.func.isRequired,
}
