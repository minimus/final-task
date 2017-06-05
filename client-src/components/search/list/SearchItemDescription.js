import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class SearchItemDescription extends PureComponent {
  render() {
    return (
      <div className="item-description">
        <NavLink to={this.props.link}>
          <h1>{this.props.name}</h1>
        </NavLink>
        <p className="item-desc">{this.props.description}</p>
      </div>
    )
  }
}

SearchItemDescription.propTypes = {
  name: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

export default SearchItemDescription
