import React from 'react'
import classNames from 'classnames'

export default function ({text, shown, onClick}) {
  const tooltipClass = (shown) ? '' : 'hided'
  return (
    <div className={classNames(tooltipClass, "menu-tooltip")}>
      <div className="menu-tooltip-arrow"/>
      <div className="menu-tooltip-body">
        <span>{text}</span>
        <span>
          <i className="material-icons md-18" onClick={onClick}>close</i>
        </span>
      </div>
    </div>
  )
}
