import React, { PureComponent } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

class Thumbnails extends PureComponent {
  render() {
    return (
      <div className="thumbnails">
        {this.props.pictures.map((e) => {
          const classSelected = (e === this.props.selected) ? 'selected' : ''
          return (
            <button
              className={classNames(classSelected, 'thumbnail-container')}
              onClick={this.props.onClick}
              key={e}
            >
              <img className="thumbnail" src={e} alt={e} />
            </button>
          )
        })}
      </div>
    )
  }
}

Thumbnails.propTypes = {
  pictures: propTypes.arrayOf(propTypes.string).isRequired,
  selected: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}

export default Thumbnails
