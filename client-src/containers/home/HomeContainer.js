import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSearchData, closeTooltip, trackSearchInput, searchButtonClicked } from '../../redux/modules/home'
import Home from '../../components/home/Home'

class HomeContainer extends Component {
  render() {
    return (
      <Home {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  data: state.home.data,
  categories: state.home.categories,
  count: state.home.count,
  phrase: state.home.phrase,
  loading: state.home.loading,
  notFound: state.home.notFound,
  tooltip: state.home.tooltip,
})

const mapDispatchToProps = {
  onTooltipClick: closeTooltip,
  onKeyUp: trackSearchInput,
  onClick: searchButtonClicked,
  fetchSearchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

