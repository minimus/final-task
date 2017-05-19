import React from 'react'
import propTypes from 'prop-types'
import { HomeMenuWithLoadingBar } from './HomeMenu'
import './HomeMenu.css'

export default function HomeMenuBar({ menu }) {
  return (
    <HomeMenuWithLoadingBar
      isLoading={!menu}
      menu={menu}
    />
  )
}

HomeMenuBar.propTypes = {
  menu: propTypes.arrayOf(propTypes.object).isRequired,
}
