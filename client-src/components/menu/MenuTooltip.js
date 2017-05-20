import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

export default function MenuTooltip({ text, shown, onClick }) {
  const tooltipClass = (shown) ? '' : 'hided'
  return (
    <div className={classNames(tooltipClass, 'menu-tooltip')}>
      <div className="menu-tooltip-arrow" />
      <div className="menu-tooltip-body">
        <span>{text}</span>
        <button onClick={onClick}>
          <i className="material-icons md-18">close</i>
        </button>
      </div>
    </div>
  )
}

MenuTooltip.propTypes = {
  text: propTypes.string.isRequired,
  shown: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
}
