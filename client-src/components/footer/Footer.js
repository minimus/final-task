import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import FooterMenu from '../../containers/menu/FooterMenuContainer'

export default function ({menu}) {
  return (
    <footer>
      <div id="info">
        <FooterMenu/>
      </div>
      <div id="copyright">
        <div>Copyright &copy; 2017, <Link to="http://www.simplelib.com">minimus</Link>. All rights reserved.</div>
        <div>Powered by <Link to="https://www.ozon.ru">Ozon.ru</Link></div>
      </div>
    </footer>
  )
}
