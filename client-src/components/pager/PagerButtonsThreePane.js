import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import PagerButton from './PagerButton'

class PagerButtonsThreePane extends PureComponent {
  render() {
    const pagesArrayFirst = [1, 2, 3]
    const pagesArrayMiddle = [this.props.page - 1, this.props.page, this.props.page + 1]
    const pagesArrayLast = [this.props.pages - 2, this.props.pages - 1, this.props.pages]
    return (
      <span id="pager-buttons-pane">
        {pagesArrayFirst.map(i =>
          (<PagerButton
            base={this.props.base}
            category={this.props.category}
            page={i}
            key={i}
          />))}
        <span className="pager-group-divider">...</span>
        {pagesArrayMiddle.map(i =>
          (<PagerButton
            base={this.props.base}
            category={this.props.category}
            page={i}
            key={i}
          />))}
        <span className="pager-group-divider">...</span>
        {pagesArrayLast.map(i =>
          (<PagerButton
            base={this.props.base}
            category={this.props.category}
            page={i}
            key={i}
          />))}
      </span>
    )
  }
}

PagerButtonsThreePane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
}

export default PagerButtonsThreePane
