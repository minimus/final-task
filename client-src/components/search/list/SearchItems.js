import React, { Component } from 'react'
import propTypes from 'prop-types'
import SearchItem from './SearchItem'
import Pager from '../../pager/Pager'

class SearchItems extends Component {
  getPhrase() {
    return encodeURIComponent(this.props.phrase)
  }

  render() {
    return (
      <div className="search-items">
        <Pager
          base="search"
          category={this.getPhrase()}
          page={this.props.page}
          pages={this.props.pages}
        />
        {this.props.data.map(e =>
          <SearchItem item={e} categories={this.props.categories} key={e.id} />)}
        <Pager
          base="search"
          category={this.getPhrase()}
          page={this.props.page}
          pages={this.props.pages}
        />
      </div>
    )
  }
}

SearchItems.propTypes = {
  phrase: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  categories: propTypes.arrayOf(propTypes.object).isRequired,
}

export default SearchItems
