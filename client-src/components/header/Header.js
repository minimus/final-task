import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import MenuContainer from '../../containers/menu'
import Breadcrumbs from '../../containers/breadcrumbs'
import SearchBar from '../../containers/searchbar'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <MenuContainer />
          <SearchBar/>
          <span>
            <NavLink exact to="/" id="right-menu">
              <i className="material-icons md-48">home</i>
            </NavLink>
          </span>
        </nav>
        <Breadcrumbs/>
      </header>
    )
  }
}

export default Header
