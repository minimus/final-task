import React from 'react'
import propTypes from 'prop-types'
import ItemImage from './Image'

export default function ImageRow({ items }) {
  return (
    <div className="images-row">
      <div className="empty-cell" />
      {items.map((e) => {
        const pic = (Array.isArray(e.picture)) ? e.picture[0] : e.picture
        return (
          <div className="image-cell" key={e.id}>
            <ItemImage image={pic} link={`/offer/${e.id}`} />
          </div>
        )
      },
      )}
    </div>
  )
}

ImageRow.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}
