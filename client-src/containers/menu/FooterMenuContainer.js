import React, { Component } from 'react'
import { connect } from 'react-redux'
import FooterMenu from '../../components/footer/menu'

class FooterMenuContainer extends Component {
  render() {
    return (
      <FooterMenu menu={this.props.menu}/>
    )
  }
}

const mapStateToProps = state => ({
  menu: state.menu.menu
})

export default connect(mapStateToProps)(FooterMenuContainer)
