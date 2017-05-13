import React from 'react'
import ItemImage from './Image'

export default function ({items}) {
  return (
    <div className="images-row">
      <div className="empty-cell"/>
      {items.map((e, i) => {
          const pic = (Array.isArray(e.picture)) ? e.picture[0] : e.picture
          return (
            <div className="image-cell" key={i}>
              <ItemImage image={pic} link={`/offer/${e.id}`}/>
            </div>
          )
        }
      )}
    </div>
  )
}
