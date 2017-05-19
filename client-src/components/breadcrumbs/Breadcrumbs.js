import React, { Component } from 'react'
import propTypes from 'prop-types'
import BreadcrumbsItem from './BreadcrumbsItem'
import './breadcrumbs.css'

class Breadcrumbs extends Component {
  constructor(props) {
    super(props)
    this.crumbs = []
  }

  items = () => {
    this.crumbs = [{ ...this.props.home, last: (this.props.category.id === -1) }]
    if (this.props.category.id > -1) {
      this.crumbs.push({ ...this.props.category, last: (this.props.offer.id === -1) })
    }
    if (this.props.offer.id > -1) { this.crumbs.push({ ...this.props.offer, last: true }) }
  }

  render() {
    this.items()
    return (
      <div id="breadcrumbs" className="breadcrumbs-container">
        {this.crumbs.map(e => <BreadcrumbsItem {...e} key={e.id} />)}
      </div>
    )
  }
}

Breadcrumbs.propTypes = {
  home: propTypes.objectOf(propTypes.any).isRequired,
  category: propTypes.objectOf(propTypes.any).isRequired,
  offer: propTypes.objectOf(propTypes.any).isRequired,
}

export default Breadcrumbs
