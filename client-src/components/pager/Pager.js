import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import PagerButtons from './PagerButtons'
import './pager.css'

class Pager extends PureComponent {
  render() {
    return (
      <div id="pager" className="pager-container">
        <PagerButtons
          base={this.props.base}
          category={this.props.category}
          page={this.props.page}
          pages={this.props.pages}
        />
      </div>
    )
  }
}

Pager.propTypes = {
  base: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
}

export default Pager
