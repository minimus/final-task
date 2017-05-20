import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuContainer from '../../containers/menu'
import Breadcrumbs from '../../containers/breadcrumbs'
import SearchBar from '../../containers/searchbar'
import './header.css'

export default function () {
  return (
    <header>
      <nav>
        <MenuContainer />
        <SearchBar />
        <span>
          <NavLink exact to="/" id="right-menu">
            <i className="material-icons md-48">home</i>
          </NavLink>
        </span>
      </nav>
      <Breadcrumbs />
    </header>
  )
}
