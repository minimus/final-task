import React, {Component} from 'react'
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
        {this.panes.map((e, i) => <MenuPane pane={e} key={i}/>)}
      </div>
    )
  }
}

export default HomeMenu

export const HomeMenuWithLoadingBar = withLoadingBar(HomeMenu)
