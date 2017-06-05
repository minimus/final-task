import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import SearchHeader from './header'
import SearchItems from './SearchItems'

class SearchList extends PureComponent {
  getPhrase() {
    return decodeURIComponent(this.props.match.params.phrase)
  }

  render() {
    if (this.props.count === 0) {
      return (
        <div className="search-list">
          <SearchHeader
            phrase={this.getPhrase()}
            count={this.props.count}
          />
        </div>
      )
    }
    return (
      <div className="search-list">
        <SearchHeader
          phrase={this.getPhrase()}
          count={this.props.count}
        />
        <SearchItems {...this.props} />
      </div>
    )
  }
}

SearchList.propTypes = {
  count: propTypes.number.isRequired,
  match: propTypes.objectOf(propTypes.object).isRequired,
}

export default SearchList
