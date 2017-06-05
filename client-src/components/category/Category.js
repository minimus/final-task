import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { CategoryElementsWithLoadingBar } from './CategoryElements'
import './category.css'

class Category extends PureComponent {
  isLoading = () => (!this.props.data || !this.props.facets)

  render() {
    return (
      <CategoryElementsWithLoadingBar
        isLoading={this.isLoading()}
        {...this.props}
      />
    )
  }
}

Category.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  facets: propTypes.arrayOf(propTypes.object).isRequired,
}

export default Category
