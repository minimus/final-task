/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import OffersSection from './list/OffersSection'
import FacetsSection from './facets/Facets'
import WithLoadingBar from '../WithLoadingBar'
import LoadingBar from '../LoadingBar'
import ComparePane from './list/compare/ComparePane'

class CategoryElements extends PureComponent {
  render() {
    return (
      <section className="category container">
        <div className="category-body">
          <FacetsSection {...this.props} />
          <OffersSection {...this.props} />
        </div>
        <LoadingBar loading={this.props.loading} />
        <ComparePane {...this.props} />
      </section>
    )
  }
}

CategoryElements.propTypes = {
  loading: propTypes.bool.isRequired,
}

export default CategoryElements

export const CategoryElementsWithLoadingBar = WithLoadingBar(CategoryElements)

