import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class ComparePaneButton extends PureComponent {
  render() {
    if (this.props.disabled) {
      return (
        <div className="compare-pane-button disabled">
          Сравнить
        </div>
      )
    }
    return (
      <div className="compare-pane-button">
        <NavLink to={this.props.link}>Сравнить</NavLink>
      </div>
    )
  }
}

ComparePaneButton.propTypes = {
  disabled: propTypes.bool.isRequired,
  link: propTypes.string.isRequired,
}

export default ComparePaneButton
