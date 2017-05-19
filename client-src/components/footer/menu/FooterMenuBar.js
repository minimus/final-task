import React from 'react'
import propTypes from 'prop-types'
import { FooterMenuWithLoadingBar } from './FooterMenu'
import './FooterMenu.css'

export default function FooterMenuBar({ menu }) {
  return (
    <FooterMenuWithLoadingBar
      isLoading={!menu}
      menu={menu}
    />
  )
}

FooterMenuBar.propTypes = {
  menu: propTypes.arrayOf(propTypes.object).isRequired,
}
