import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import withLoadingBar from '../../WithLoadingBar'
import MenuPane from '../../menu/MenuPane'

class FooterMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.panes = [...props.menu.children]
  }

  render() {
    return (
      <div id="footer-menu">
        {this.panes.map(e => <MenuPane pane={e} key={e.id} />)}
      </div>
    )
  }
}

FooterMenu.propTypes = {
  menu: propTypes.arrayOf(propTypes.object).isRequired,
}

export default FooterMenu

export const FooterMenuWithLoadingBar = withLoadingBar(FooterMenu)
