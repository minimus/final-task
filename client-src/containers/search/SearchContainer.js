import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import propTypes from 'prop-types'
import {
  fetchSearchData,
  facetChanged,
  facetsClearSelected,
  clearFacets,
} from '../../redux/modules/search'
import Search from '../../components/search/Search'
import P404 from '../../components/p404/P404'

class SearchContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.match.params.phrase) {
      this.props.fetchSearchData(
        this.props.match.params.phrase,
        this.props.match.params.page,
        this.props.selectedFacets,
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0)
    if (nextProps.location.pathname !== this.props.location.pathname ||
      nextProps.selectedFacets.length !== this.props.selectedFacets.length) {
      this.props.fetchSearchData(
        nextProps.match.params.phrase,
        nextProps.match.params.page,
        nextProps.selectedFacets,
      )
    }

    if (nextProps.match.params.phrase !== this.props.match.params.phrase) {
      this.props.clearFacets()
    }
  }

  render() {
    if (this.props.count > 0 && !this.props.data.length && !!this.props.selectedFacets.length) { return <Redirect to={`/search/${encodeURIComponent(this.props.match.params.phrase)}/1`} /> }
    if (this.props.notFound) return <P404 />
    return (
      <Search {...this.props} />
    )
  }
}

SearchContainer.propTypes = {
  fetchSearchData: propTypes.func.isRequired,
  clearFacets: propTypes.func.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  selectedFacets: propTypes.arrayOf(propTypes.object).isRequired,
  count: propTypes.number.isRequired,
  notFound: propTypes.bool.isRequired,
  match: propTypes.objectOf(propTypes.object).isRequired,
  location: propTypes.objectOf(propTypes.object).isRequired,
}

const mapStateToProps = state => ({
  data: state.search.data,
  categories: state.search.categories,
  facets: state.search.facets,
  selectedFacets: state.search.selectedFacets,
  count: state.search.count,
  page: state.search.page,
  pages: state.search.pages,
  offersOnPage: state.search.offersOnPage,
  phrase: state.search.phrase,
  loading: state.search.loading,
  notFound: state.search.notFound,
})

const mapDispatchToProps = {
  onFacetChange: facetChanged,
  onClear: facetsClearSelected,
  clearFacets,
  fetchSearchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
