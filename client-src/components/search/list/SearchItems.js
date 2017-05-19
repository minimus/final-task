import React, { Component } from 'react'
import SearchItem from './SearchItem'
import Pager from '../../pager/Pager'

class SearchItems extends Component {
  render() {
    return (
      <div className="search-items">
        <Pager
          base="search"
          category={encodeURIComponent(this.props.phrase)}
          page={this.props.page}
          pages={this.props.pages}
        />
        {this.props.data.map((e, i) => <SearchItem item={e} categories={this.props.categories} key={i} />)}
        <Pager
          base="search"
          category={encodeURIComponent(this.props.phrase)}
          page={this.props.page}
          pages={this.props.pages}
        />
      </div>
    )
  }
}

export default SearchItems
