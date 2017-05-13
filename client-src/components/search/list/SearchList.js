import React, {Component} from 'react'
import SearchHeader from './header'
import SearchItems from './SearchItems'

class SearchList extends Component {
  render() {
    if (this.props.count === 0) {
      return (
        <div className="search-list">
          <SearchHeader
            phrase={decodeURIComponent(this.props.match.params.phrase)}
            count={this.props.count}
          />
        </div>
      )
    }
    return (
      <div className="search-list">
        <SearchHeader
          phrase={decodeURIComponent(this.props.match.params.phrase)}
          count={this.props.count}
        />
        <SearchItems {...this.props}/>
      </div>
    )
  }
}

export default SearchList