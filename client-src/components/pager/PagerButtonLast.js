import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

class PagerButtonLast extends PureComponent {
  render() {
    return (
      <NavLink
        to={`/${this.props.base}/${this.props.category}/${this.props.page}`}
        activeClassName="active"
        activeStyle={{ color: '#be3131' }}
      >
        <i className="material-icons">last_page</i>
      </NavLink>
    )
  }
}

PagerButtonLast.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
}

export default PagerButtonLast
