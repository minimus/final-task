/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function MenuItem({ item, onClick }) {
  const dataCat = (item.children.length) ? '#' : `/category/${item.id}/1`
  if (item.children.length) {
    return (
      <li
        key={item.id}
        data-category={dataCat}
        data-id={item.id}
      >
        <span onClick={onClick} className="menu-forward">
          {item.keyValue}
        </span>
        <span
          className="has-children menu-forward"
          onClick={onClick}
        >{item.children.length} <i
          className="material-icons"
        >chevron_right</i></span>
      </li>
    )
  }
  return (
    <li
      key={item.id}
      data-category={dataCat}
      data-id={item.id}
    >
      <span onClick={onClick}>
        <NavLink exact to={dataCat}>
          {item.keyValue}
        </NavLink>
      </span>
    </li>
  )
}

MenuItem.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  onClick: propTypes.func.isRequired,
}
