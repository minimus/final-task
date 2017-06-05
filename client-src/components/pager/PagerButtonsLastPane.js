import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import PagerButtonLast from './PagerButtonLast'
import PagerButtonNext from './PagerButtonNext'

class PagerButtonsLastPane extends PureComponent {
  render() {
    return (
      <span id="pager-last-buttons-pane">
        <PagerButtonNext
          base={this.props.base}
          category={this.props.category}
          page={Math.min(this.props.page + 1, this.props.pages)}
          key={1}
        />
        <PagerButtonLast
          base={this.props.base}
          category={this.props.category}
          page={this.props.pages}
          key={2}
        />
      </span>
    )
  }
}

PagerButtonsLastPane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
}

export default PagerButtonsLastPane
