import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchBreadcrumbsData} from '../../redux/modules/breadcrumbs'
import Breadcrumbs from '../../components/breadcrumbs'
import {withRouter} from 'react-router-dom'

class BreadcrumbsContainer extends Component {
  componentDidMount = () => {

    this.props.fetchBreadcrumbsData(this.props.location.pathname)}

  componentWillReceiveProps = (nextProps) => {
    console.log(this.props)
    if (nextProps.location !== this.props.location) {
      this.props.fetchBreadcrumbsData(nextProps.location.pathname)
    }
  }

  render() {
    return <Breadcrumbs {...this.props}/>
  }
}

const mapStateToProps = state => ({
  home: state.breadcrumbs.home,
  category: state.breadcrumbs.category,
  offer: state.breadcrumbs.offer
})

const mapDispatchToProps = {
  fetchBreadcrumbsData
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreadcrumbsContainer))