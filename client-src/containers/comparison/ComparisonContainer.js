import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { fetchComparisonData } from '../../redux/modules/comparison'
import Compare from '../../components/comparison'
import P404 from '../../components/p404/P404'

class ComparisonContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchComparisonData(this.props.match.params.comparison)
  }

  render() {
    if (this.props.notFound) return <P404 />
    return (
      <Compare {...this.props} />
    )
  }
}

ComparisonContainer.propTypes = {
  fetchComparisonData: propTypes.func.isRequired,
  notFound: propTypes.bool.isRequired,
  match: propTypes.objectOf(propTypes.object).isRequired,
}

const mapStateToProps = state => ({
  data: state.comparison.data,
  params: state.comparison.params,
  loading: state.comparison.loading,
  notFound: state.comparison.notFound,
})

const mapDispatchToProps = {
  fetchComparisonData,
}

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonContainer)
