import React, { Component } from 'react'
import SearchBar from '../../containers/searchbar/SearchBarContainer'
import logo from './logo.png'
import './home.css'

class Home extends Component {
  render() {
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
}

export default Home
