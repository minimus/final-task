import React, { Component } from 'react'
import propTypes from 'prop-types'

class SortOrder extends Component {
  sortOptions = () => [
      ['no', 'без сортировки'],
      ['priceMin', 'по возрастанию цены'],
      ['priceMax', 'по убыванию цены'],
      ['name', 'по алфавиту']]
      .map(el => <option value={el[0]} key={el[0]}>{el[1]}</option>)

  render() {
    return (
      <label htmlFor="sort">
        {'Сортировать'}
        <select id="sort" onChange={this.props.onChange} value={this.props.sort}>
          {this.sortOptions()}
        </select>
      </label>
    )
  }
}

SortOrder.propTypes = {
  sort: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
}

export default SortOrder
