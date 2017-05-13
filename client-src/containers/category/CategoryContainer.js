import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  fetchCategoryData,
  orderChanged,
  fetchFacetsData,
  facetChanged,
  facetsClearSelected,
  clearFacets,
  compareItemSelected,
  compareItemsClear,
  clearCompare
} from '../../redux/modules/category'
import Category from '../../components/category'
import P404 from "../../components/p404/P404";

class CategoryContainer extends Component {

  componentDidMount = () => {
    window.scrollTo(0,0)
    this.props.fetchCategoryData(this.props.location.pathname, this.props.sort, this.props.selectedFacets)
    this.props.fetchFacetsData(this.props.match.params.category, this.props.selectedFacets)
  }

  componentWillReceiveProps = (nextProps) => {
    /*if (nextProps.count > 0 && !nextProps.data.length) {
      nextProps.history.push(`/category/${nextProps.categoryId}/1`)
    }*/
    if (nextProps.match.params.category !== this.props.match.params.category) {
      this.props.clearFacets()
      this.props.clearCompare()
      this.props.fetchFacetsData(nextProps.match.params.category, nextProps.selectedFacets)
    }

    const categoryDataNeeded = (
      nextProps.location.pathname !== this.props.location.pathname ||
      nextProps.sort !== this.props.sort ||
      nextProps.selectedFacets.length !== this.props.selectedFacets.length
    )

    if (categoryDataNeeded) {
      window.scrollTo(0,0)
      this.props.fetchCategoryData(
        nextProps.location.pathname,
        nextProps.sort,
        nextProps.selectedFacets
      )
    }

    if (nextProps.selectedFacets.length !== this.props.selectedFacets.length) {
      this.props.fetchFacetsData(nextProps.match.params.category, nextProps.selectedFacets)
    }
  }

  render() {
    if (this.props.count > 0 && !this.props.data.length && !!this.props.selectedFacets.length)
      return <Redirect to={`/category/${this.props.categoryId}/1`}/>
    if (this.props.notFound) return <P404 />
    return (
      <Category {...this.props} />
    )
  }

}

const mapStateToProps = state => ({
  data: state.category.data,
  count: state.category.count,
  categoryId: state.category.categoryId,
  category: state.category.category,
  page: state.category.page,
  offersOnPage: state.category.offersOnPage,
  pages: state.category.pages,
  sort: state.category.sort,
  filter: state.category.filter,
  loading: state.category.loading,
  notFound: state.category.notFound,
  facets: state.category.facets,
  selectedFacets: state.category.selectedFacets,
  compareFIFO: state.category.compareFIFO
})

const mapDispatchToProps = {
  onChange: orderChanged,
  onFacetChange: facetChanged,
  onClear: facetsClearSelected,
  onSelect: compareItemSelected,
  onClearCompare: compareItemsClear,
  fetchCategoryData,
  fetchFacetsData,
  clearFacets,
  clearCompare
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
