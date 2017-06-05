import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

class PagerButtonPrev extends PureComponent {
  render() {
    return (
      <NavLink
        to={`/${this.props.base}/${this.props.category}/${this.props.page}`}
        activeClassName="active"
        activeStyle={{ color: '#be3131' }}
      >
        <i className="material-icons">chevron_left</i>
      </NavLink>
    )
  }
}

PagerButtonPrev.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
}

export default PagerButtonPrev
