import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuContainer from '../../containers/menu/MenuContainer'
import Breadcrumbs from '../../containers/breadcrumbs/BreadcrumbsContainer'
import SearchBar from '../../containers/searchbar/SearchBarContainer'
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
