import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ({ category, link, vendor, country }) {
  return (
    <div className="search-item-info">
      <span className="category-info">
        <i className="material-icons">folder_open</i>
        <NavLink to={link}>{category}</NavLink>
      </span>
      {!!vendor &&
        <span className="vendor-info">
          <i className="material-icons">bookmark_border</i>
          {vendor}
        </span>
      }
      {!!country &&
        <span className="country-info">
          <i className="material-icons">build</i>
          {country}
        </span>
      }
    </div>
  )
}
