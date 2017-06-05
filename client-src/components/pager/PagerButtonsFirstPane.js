import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import PagerButtonFirst from './PagerButtonFirst'
import PagerButtonPrev from './PagerButtonPrev'

class PagerButtonsFirstPane extends PureComponent {
  render() {
    return (
      <span id="pager-first-buttons-pane">
        <PagerButtonFirst base={this.props.base} category={this.props.category} page={1} key={1} />
        <PagerButtonPrev
          base={this.props.base}
          category={this.props.category}
          page={Math.max(1, this.props.page - 1)}
          key={2}
        />
      </span>
    )
  }
}

PagerButtonsFirstPane.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
}

export default PagerButtonsFirstPane
