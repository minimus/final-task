import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class SearchItemInfo extends PureComponent {
  render() {
    return (
      <div className="search-item-info">
        <span className="category-info">
          <i className="material-icons">folder_open</i>
          <NavLink to={this.props.link}>{this.props.category}</NavLink>
        </span>
        {!!this.props.vendor &&
        <span className="vendor-info">
          <i className="material-icons">bookmark_border</i>
          {this.props.vendor}
        </span>
        }
        {!!this.props.country &&
        <span className="country-info">
          <i className="material-icons">build</i>
          {this.props.country}
        </span>
        }
      </div>
    )
  }
}

SearchItemInfo.propTypes = {
  category: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  vendor: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
}

export default SearchItemInfo
