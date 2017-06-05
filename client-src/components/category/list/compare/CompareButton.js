import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

class CompareButton extends PureComponent {
  render() {
    const classSelected = (this.props.selected.findIndex(e => e.id === this.props.item) >= 0) ? 'selected' : ''
    return (
      <button
        className={classNames(classSelected, 'compare-button')}
        onClick={this.props.onClick}
        data-id={this.props.item}
      >
        <i className="material-icons md-24">compare</i>
        <span>Сравнить</span>
      </button>
    )
  }
}

CompareButton.propTypes = {
  item: propTypes.objectOf(propTypes.any).isRequired,
  selected: propTypes.arrayOf(propTypes.object).isRequired,
  onClick: propTypes.func.isRequired,
}

export default CompareButton
