import React from 'react'
import SearchBar from '../../containers/searchbar/SearchBarContainer'
import logo from './logo.png'
import './home.css'

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-elements-container">
        <div className="logo-container">
          <img
            id="logo"
            src={logo}
            srcSet="images/logo-retina.png 2x"
            alt="HappySearch"
            title="HappySearch"
          />
        </div>
        <SearchBar />
      </div>
    </section>
  )
}
