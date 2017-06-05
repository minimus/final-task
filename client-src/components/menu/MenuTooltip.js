import React, { PureComponent } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

class MenuTooltip extends PureComponent {
  render() {
    const tooltipClass = (this.props.shown) ? '' : 'hided'
    return (
      <div className={classNames(tooltipClass, 'menu-tooltip')}>
        <div className="menu-tooltip-arrow" />
        <div className="menu-tooltip-body">
          <span>{this.props.text}</span>
          <button onClick={this.props.onClick}>
            <i className="material-icons md-18">close</i>
          </button>
        </div>
      </div>
    )
  }
}

MenuTooltip.propTypes = {
  text: propTypes.string.isRequired,
  shown: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}

export default MenuTooltip
