import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { FooterMenuWithLoadingBar } from './FooterMenu'
import './FooterMenu.css'

class FooterMenuBar extends PureComponent {
  render() {
    return (
      <FooterMenuWithLoadingBar
        isLoading={!this.props.menu}
        menu={this.props.menu}
      />
    )
  }
}

FooterMenuBar.propTypes = {
  menu: propTypes.arrayOf(propTypes.object).isRequired,
}

export default FooterMenuBar
