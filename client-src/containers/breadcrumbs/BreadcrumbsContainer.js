import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import propTypes from 'prop-types'
import { fetchBreadcrumbsData } from '../../redux/modules/breadcrumbs'
import Breadcrumbs from '../../components/breadcrumbs'

class BreadcrumbsContainer extends Component {
  componentDidMount() {
    this.props.fetchBreadcrumbsData(this.props.location.pathname)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.fetchBreadcrumbsData(nextProps.location.pathname)
    }
  }

  render() {
    return <Breadcrumbs {...this.props} />
  }
}

BreadcrumbsContainer.propTypes = {
  fetchBreadcrumbsData: propTypes.func.isRequired,
  location: propTypes.objectOf(propTypes.object).isRequired,
}

const mapStateToProps = state => ({
  home: state.breadcrumbs.home,
  category: state.breadcrumbs.category,
  offer: state.breadcrumbs.offer,
})

const mapDispatchToProps = {
  fetchBreadcrumbsData,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreadcrumbsContainer))
