import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Thumbnails from '../preview/Thumbnails'

class PreviewPane extends PureComponent {
  render() {
    return (
      <div className="offer-preview">
        <div className="image-preview-container">
          <img className="image-preview" src={this.props.selected} alt={this.props.selected} />
        </div>
        <Thumbnails
          pictures={this.props.pictures}
          selected={this.props.selected}
          onClick={this.props.onClick}
        />
      </div>
    )
  }
}

PreviewPane.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selected: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
}

export default PreviewPane
