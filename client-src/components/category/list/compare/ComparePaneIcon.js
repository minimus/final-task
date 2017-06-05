import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

class ComparePaneIcon extends PureComponent {
  render() {
    return (
      <NavLink to={this.props.link} data-id={this.props.id} title={this.props.name}>
        <img src={this.props.image} alt={this.props.name} />
      </NavLink>
    )
  }
}

ComparePaneIcon.propTypes = {
  id: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
}

export default ComparePaneIcon
