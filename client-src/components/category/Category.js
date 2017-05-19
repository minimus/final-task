import React, { Component } from 'react'
import propTypes from 'prop-types'
import { CategoryElementsWithLoadingBar } from './CategoryElements'
import './category.css'

class Category extends Component {
  render() {
    return (
      <CategoryElementsWithLoadingBar
        isLoading={!this.props.data}
        {...this.props}
      />
    )
  }
}

Category.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Category
