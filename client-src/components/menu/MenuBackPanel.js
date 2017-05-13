import React from 'react'
import classNames from 'classnames'

export default function MenuBackItem({main, onClick}) {
  return (
    <li className="back-panel" data-parent={main.parentid}>
      <span onClick={onClick} className="menu-back">
        <i className="material-icons">chevron_left</i> {main.keyValue}
      </span>
      <span onClick={onClick} className="menu-close">
          <i className="material-icons">clear</i>
      </span>
    </li>
  )
}