import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PagerButtonFirst({base, category, page}) {
  return (
    <NavLink to={`/${base}/${category}/${page}`} activeClassName="active" activeStyle={{color: '#be3131'}}>
      <i className="material-icons">first_page</i>
    </NavLink>
  )
}
