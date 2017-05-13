import React from 'react'
import classNames from 'classnames'

export default function Thumbnails({pictures, selected, onClick}) {
  return (
    <div className="thumbnails">
      {pictures.map((e, i) => {
        const classSelected = (e === selected) ? 'selected' : ''
        return (
          <div className={classNames(classSelected, 'thumbnail-container')} onClick={onClick} key={i}>
            <img className="thumbnail" src={e}/>
          </div>
        )
      })}
    </div>
  )
}
