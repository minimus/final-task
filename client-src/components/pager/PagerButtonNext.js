import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

class PagerButtonNext extends PureComponent {
  render() {
    return (
      <NavLink
        to={`/${this.props.base}/${this.props.category}/${this.props.page}`}
        activeClassName="active"
        activeStyle={{ color: '#be3131' }}
      >
        <i className="material-icons">chevron_right</i>
      </NavLink>
    )
  }
}

PagerButtonNext.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
}

export default PagerButtonNext
