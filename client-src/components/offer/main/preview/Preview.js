import React from 'react'
import Thumbnails from './Thumbnails'
//import noPicture from '../../../category/no_photo.png'

export default function Preview({pictures, selectedPicture, onClick, onOpen}) {
  //const picture = selectedPicture || noPicture
  //const pics = pictures || [noPicture]
  return (
    <div className="offer-preview">
      <div className="image-preview-container" onClick={onOpen}>
        <img className="image-preview" src={selectedPicture}/>
      </div>
      <Thumbnails pictures={pictures} selected={selectedPicture} onClick={onClick} />
    </div>
  )
}
