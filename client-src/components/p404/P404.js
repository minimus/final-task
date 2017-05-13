import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './p404.css'
import page404 from './page404.png'

class P404 extends Component {
  render() {
    return (
      <section className="p404 container">
        <img src={page404}/>
        <div className="p404-content">
          <h1>Страница не найдена ...</h1>
          <p>Вы находитесь здесь потому, что запрашиваемая Вами страница не существует или была перемещена ...</p>
          <NavLink to="/" className="to-home-page">На главную</NavLink>
        </div>
      </section>
    )
  }
}

export default P404
