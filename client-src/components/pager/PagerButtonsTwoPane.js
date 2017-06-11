import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import PagerButton from './PagerButton'

class PagerButtonsTwoPane extends PureComponent {
  render() {
    const pagesArrayFirst = [1, 2, 3, 4]
    const pagesArrayLast = []
    let i = this.props.pages - 4
    while (i < this.props.pages) pagesArrayLast.push(i += 1)
    return (
      <span id="pager-buttons-pane">
        {pagesArrayFirst.map(idx =>
          (<PagerButton
            base={this.props.base}
            category={this.props.category}
            page={idx}
            key={idx}
          />))}
        <span className="pager-group-divider">...</span>
        {pagesArrayLast.map(idx =>
          (<PagerButton
            base={this.props.base}
            category={this.props.category}
            page={idx}
            key={idx}
          />))}
      </span>
    )
  }
}

PagerButtonsTwoPane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  pages: propTypes.number.isRequired,
}

export default PagerButtonsTwoPane
