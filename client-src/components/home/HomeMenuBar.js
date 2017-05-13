import React from 'react'
import {HomeMenu, HomeMenuWithLoadingBar} from './HomeMenu'
import './HomeMenu.css'

export default function ({menu}) {
  return (
    <HomeMenuWithLoadingBar
      isLoading={!menu}
      menu={menu}
    />
  )
}
