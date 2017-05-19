import React, { Component } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import ComparePaneIcon from './ComparePaneIcon'
import ComparePaneButton from './ComparePaneButton'
import ComparePaneClearButton from './ComparePaneClearButton'

class ComparePane extends Component {
  getButtonParams = fifo => ({ disabled: (fifo.length < 2), link: `/comparison/${fifo.map(e => e.id).join('--')}` })

  render() {
    const paneClass = (this.props.compareFIFO.length) ? 'shown' : 'hided'
    return (
      <div className={classNames(paneClass, 'compare-pane')}>
        <div className="compare-pane-items">
          {this.props.compareFIFO.map(e => <ComparePaneIcon {...e} key={e.id} />)}
        </div>
        <ComparePaneButton {...this.getButtonParams(this.props.compareFIFO)} />
        <ComparePaneClearButton
          disabled={(!this.props.compareFIFO.length)}
          onClick={this.props.onClearCompare}
        />
      </div>
    )
  }
}

ComparePane.propTypes = {
  compareFIFO: propTypes.arrayOf(propTypes.object).isRequired,
  onClearCompare: propTypes.func.isRequired,
}

export default ComparePane
