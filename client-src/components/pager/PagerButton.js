import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PagerButton({base, category, page}) {
  return (
    <NavLink to={`/${base}/${category}/${page}`} activeClassName="active" activeStyle={{color: '#be3131'}}>
      {page}
    </NavLink>
  )
}
