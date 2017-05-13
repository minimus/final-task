import React, {Component} from 'react'
import withLoadingBar from '../../WithLoadingBar'
import MenuPane from '../../menu/MenuPane'

class FooterMenu extends Component {
  constructor(props) {
    super(props)
    this.panes = [...props.menu.children]
  }

  render() {
    return (
      <div id="footer-menu">
        {this.panes.map((e, i) => <MenuPane pane={e} key={i}/>)}
      </div>
    )
  }
}

export default FooterMenu

export const FooterMenuWithLoadingBar = withLoadingBar(FooterMenu)
