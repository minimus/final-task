import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './containers/home'
import Category from './containers/category'
import Offer from './containers/offer'
import Comparison from './containers/comparison'
import Search from './containers/search'
import P404 from './components/p404'

class Application extends Component {
  render() {
    return (
      <div id="main">
        <Header/>
        <article>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:category/:page" component={Category}/>
            <Route path="/offer/:offer" component={Offer}/>
            <Route path="/comparison/:comparison" component={Comparison}/>
            <Route path="/search/:phrase/:page" component={Search}/>
            <Route path="*" component={P404}/>
          </Switch>
        </article>
        <Footer/>
      </div>
    )
  }
}

export default Application
