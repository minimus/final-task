import React from 'react'
import Thumbnails from '../preview/Thumbnails'

export default function ({pictures, selected, onClick}) {
  return (
    <div className="offer-preview">
      <div className="image-preview-container">
        <img className="image-preview" src={selected}/>
      </div>
      <Thumbnails pictures={pictures} selected={selected} onClick={onClick} />
    </div>
  )
}
