import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import PagerButton from './PagerButton'

class PagerButtonsOnePane extends PureComponent {
  render() {
    const pagesArray = []
    let i = 1
    while (i <= this.props.pages) {
      pagesArray.push(i)
      i += 1
    }
    return (
      <span id="pager-buttons-pane">
        {pagesArray.map(idx => (
          <PagerButton base={this.props.base} category={this.props.category} page={idx} key={idx} />
      ))}
      </span>
    )
  }
}

PagerButtonsOnePane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  pages: propTypes.number.isRequired,
}

export default PagerButtonsOnePane
