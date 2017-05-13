import React, {Component} from 'react'
import OffersSection from './list/OffersSection'
import FacetsSection from './facets/Facets'
import WithLoadingBar from '../WithLoadingBar'
import LoadingBar from '../LoadingBar'
import ComparePane from './list/compare/ComparePane'

class CategoryElements extends Component {
  render() {
    return (
      <section className="category container">
        <div className="category-body">
          <FacetsSection {...this.props}/>
          <OffersSection {...this.props}/>
        </div>
        <LoadingBar loading={this.props.loading}/>
        <ComparePane {...this.props}/>
      </section>
    )
  }
}

export default CategoryElements

export const CategoryElementsWithLoadingBar = WithLoadingBar(CategoryElements)

