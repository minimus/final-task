import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

class SearchHeader extends PureComponent {
  render() {
    const text = `По запросу "${this.props.phrase}" ничего не найдено...`
    const txt = `Показан результат поиска по запросу: "${this.props.phrase}" `
    if (this.props.count === 0) {
      return (
        <div className="search-result-header">
          <h3>
            {text}
          </h3>
        </div>
      )
    }
    return (
      <div className="search-result-header">
        <h3>
          {txt}<span className="search-items-count">({this.props.count})</span>
        </h3>
      </div>
    )
  }
}

SearchHeader.propTypes = {
  phrase: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
}

export default SearchHeader
