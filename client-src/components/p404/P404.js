import React from 'react'
import { NavLink } from 'react-router-dom'
import './p404.css'
import page404 from './page404.png'

export default function P404() {
  return (
    <section className="p404 container">
      <img src={page404} alt="Not Found" />
      <div className="p404-content">
        <h1>Страница не найдена ...</h1>
        <p>
          Вы находитесь здесь потому,
          что запрашиваемая Вами страница не существует или была перемещена ...
        </p>
        <NavLink to="/" className="to-home-page">На главную</NavLink>
      </div>
    </section>
  )
}
