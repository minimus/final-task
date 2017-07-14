import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import propTypes from 'prop-types'
import { closeTooltip, trackSearchInput, searchButtonClicked, clearRedirect, trackSearchValue } from '../../redux/modules/searchbar'
import SearchBar from '../../components/searchbar/SearchBar'

class SearchBarContainer extends Component {
  constructor(props) {
    super(props)
    this.linkTo = ''
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.redirect && nextProps.redirect !== this.props.redirect) {
      this.linkTo = nextProps.redirect
      this.props.clearRedirect()
    } else this.linkTo = ''
  }

  render() {
    if (this.linkTo) {
      return <Redirect to={this.linkTo} />
    }
    return (
      <SearchBar {...this.props} />
    )
  }
}

SearchBarContainer.propTypes = {
  clearRedirect: propTypes.func.isRequired,
  redirect: propTypes.string.isRequired,
}

const mapStateToProps = state => ({
  phrase: state.searchbar.phrase,
  redirect: state.searchbar.redirect,
  tooltip: state.searchbar.tooltip,
})

const mapDispatchToProps = {
  onTooltipClick: closeTooltip,
  onKeyUp: trackSearchInput,
  onClick: searchButtonClicked,
  onChange: trackSearchValue,
  clearRedirect,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)
