import React, { Component } from 'react'
import propTypes from 'prop-types'
import PagerButtonsFirstPane from './PagerButtonsFirstPane'
import PagerButtonsOnePane from './PagerButtonsOnePane'
import PagerButtonsTwoPane from './PagerButtonsTwoPane'
import PagerButtonsThreePane from './PagerButtonsThreePane'
import PagerButtonsLastPane from './PagerButtonsLastPane'

class PagerButtons extends Component {
  getButtonsPane = () => {
    if (this.props.pages <= 8) {
      return (
        <PagerButtonsOnePane
          base={this.props.base}
          category={this.props.category}
          page={this.props.page}
          pages={this.props.pages}
        />
      )
    } else if (this.props.page <= 4 || this.props.page > this.props.pages - 4) {
      return (
        <PagerButtonsTwoPane
          base={this.props.base}
          category={this.props.category}
          page={this.props.page}
          pages={this.props.pages}
        />
      )
    }

    return (
      <PagerButtonsThreePane
        base={this.props.base}
        category={this.props.category}
        page={this.props.page}
        pages={this.props.pages}
      />
    )
  }

  render() {
    return (
      <span id="pager-buttons">
        <PagerButtonsFirstPane
          base={this.props.base}
          category={this.props.category}
          page={this.props.page}
          pages={this.props.pages}
        />
        {this.getButtonsPane()}
        <PagerButtonsLastPane
          base={this.props.base}
          category={this.props.category}
          page={this.props.page}
          pages={this.props.pages}
        />
      </span>
    )
  }
}

PagerButtons.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
}

export default PagerButtons
