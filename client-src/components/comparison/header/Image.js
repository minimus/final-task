import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

class Image extends PureComponent {
  render() {
    return (
      <div className="item-image">
        <NavLink to={this.props.link}>
          <img src={this.props.image} alt={this.props.image} />
        </NavLink>
      </div>
    )
  }
}

Image.propTypes = {
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}

export default Image
