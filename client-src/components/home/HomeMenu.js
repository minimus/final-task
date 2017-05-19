import React, { Component } from 'react'
import propTypes from 'prop-types'
import withLoadingBar from '../WithLoadingBar'
import MenuPane from '../menu/MenuPane'

class HomeMenu extends Component {
  constructor(props) {
    super(props)
    this.panes = [...props.menu.children]
  }

  render() {
    return (
      <div id="home-menu">
        {this.panes.map(e => <MenuPane pane={e} key={e.id} />)}
      </div>
    )
  }
}

HomeMenu.propTypes = {
  menu: propTypes.arrayOf(propTypes.object).isRequired,
}

export default HomeMenu

export const HomeMenuWithLoadingBar = withLoadingBar(HomeMenu)
