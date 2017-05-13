import React, {Component} from 'react'

class SortOrder extends Component {
  sortOptions = () => {
    return [
      ['no',       'без сортировки'],
      ['priceMin', 'по возрастанию цены'],
      ['priceMax', 'по убыванию цены'],
      ['name',     'по алфавиту']]
      .map((el, i) => <option value={el[0]} key={i}>{el[1]}</option>)
  }

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

export default SortOrder
