import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import ItemImage from './Image'

class ImageRow extends PureComponent {
  render() {
    return (
      <div className="images-row">
        <div className="empty-cell" />
        {this.props.items.map((e) => {
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
}

ImageRow.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}

export default ImageRow
