import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

export default function Thumbnails({ pictures, selected, onClick }) {
  return (
    <div className="thumbnails">
      {pictures.map((e, i) => {
        const classSelected = (e === selected) ? 'selected' : ''
        return (
          <div className={classNames(classSelected, 'thumbnail-container')} onClick={onClick} key={i}>
            <img className="thumbnail" src={e} alt={e} />
          </div>
        )
      })}
    </div>
  )
}

Thumbnails.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selected: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}
