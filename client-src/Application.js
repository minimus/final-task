/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './containers/home/HomeContainer'
import CategoryContainer from './containers/category/CategoryContainer'
import Offer from './containers/offer/OfferContainer'
import Comparison from './containers/comparison/ComparisonContainer'
import Search from './containers/search/SearchContainer'
import P404 from './components/p404/P404'

class Application extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <article>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:category/:page" component={CategoryContainer} />
            <Route path="/offer/:offer" component={Offer} />
            <Route path="/comparison/:comparison" component={Comparison} />
            <Route path="/search/:phrase/:page" component={Search} />
            <Route path="*" component={P404} />
          </Switch>
        </article>
        <Footer />
      </div>
    )
  }
}

export default Application
