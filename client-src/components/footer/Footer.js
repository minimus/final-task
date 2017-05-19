import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import FooterMenu from '../../containers/menu/FooterMenuContainer'

export default function Footer() {
  return (
    <footer>
      <div id="info">
        <FooterMenu />
      </div>
      <div id="copyright">
        <div>Copyright &copy; 2017, <Link to="http://www.simplelib.com">minimus</Link>. All rights reserved.</div>
        <div>Powered by <Link to="https://www.ozon.ru">Ozon.ru</Link></div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  menu: propTypes.arrayOf(propTypes.object).isRequired,
}
