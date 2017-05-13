import React from 'react'
import {FooterMenu, FooterMenuWithLoadingBar} from './FooterMenu'
import './FooterMenu.css'

export default function ({menu}) {
  return (
    <FooterMenuWithLoadingBar
      isLoading={!menu}
      menu={menu}
    />
  )
}
