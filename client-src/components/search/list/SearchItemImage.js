import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class SearchItemImage extends PureComponent {
  render() {
    const picture = (Array.isArray(this.props.image)) ? this.props.image[0] : this.props.image
    return (
      <NavLink to={this.props.link} className="image-link">
        <img className="search-item-image" src={picture} alt={this.props.image} />
      </NavLink>
    )
  }
}

SearchItemImage.propTypes = {
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}

export default SearchItemImage
