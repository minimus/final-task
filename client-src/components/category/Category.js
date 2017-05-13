import React, {Component} from 'react'
import CategoryElements, {CategoryElementsWithLoadingBar} from './CategoryElements'
import './category.css'

class Category extends Component {
  render() {
    return (
      <CategoryElementsWithLoadingBar
        isLoading={!this.props.data/* || !this.props.facets*/}
        {...this.props}
      />
    )
  }
}

export default Category
