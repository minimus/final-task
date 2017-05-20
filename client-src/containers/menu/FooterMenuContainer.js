/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import FooterMenu from '../../components/footer/menu'

class FooterMenuContainer extends Component {
  render() {
    return (
      <FooterMenu menu={this.props.menu} />
    )
  }
}

FooterMenuContainer.propTypes = {
  menu: propTypes.arrayOf(propTypes.object).isRequired,
}

const mapStateToProps = state => ({
  menu: state.menu.menu,
})

export default connect(mapStateToProps)(FooterMenuContainer)
