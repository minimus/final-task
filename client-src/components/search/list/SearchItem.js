import React, { Component } from 'react'
import ItemImage from './SearchItemImage'
import ItemMainInfo from './SearchItemDescription'
import ItemPrice from './SearchItemPrice'
import ItemInfo from './SearchItemInfo'

class SearchItem extends Component {
  categoryNameById = id => this.props.categories.find(e => e.id === id).keyValue

  shortenText = (text, num) => {
    if (text) {
      const out = text.split(' ')
      if (num < out.length) return `${out.slice(0, num).join(' ')}...`
      return text
    }
    return text
  }

  render() {
    const link = `/offer/${this.props.item.id}`
    return (
      <div className="search-item">
        <ItemImage image={this.props.item.picture} link={link} />
        <div className="search-item-body">
          <div className="item-main-info">
            <ItemMainInfo
              name={this.props.item.name}
              link={link}
              description={this.shortenText(this.props.item.description, 25)}
            />
            <ItemPrice price={this.props.item.price} url={this.props.item.url} />
          </div>
          <ItemInfo
            category={this.categoryNameById(this.props.item.categoryid)}
            link={`/category/${this.props.item.categoryid}/1`}
            vendor={this.props.item.vendor}
            country={this.props.item.country_of_origin}
          />
        </div>
      </div>
    )
  }
}

export default SearchItem
