import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Thumbnails from './Thumbnails'

class Preview extends PureComponent {
  render() {
    return (
      <div className="offer-preview">
        <button className="image-preview-container" onClick={this.props.onOpen}>
          <img className="image-preview" src={this.props.selectedPicture} alt={this.props.selectedPicture} />
        </button>
        <Thumbnails
          pictures={this.props.pictures}
          selected={this.props.selectedPicture}
          onClick={this.props.onClick}
        />
      </div>
    )
  }
}

Preview.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selectedPicture: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  onOpen: propTypes.func.isRequired,
}

export default Preview
