import React, {Component} from 'react'
import OffersList from './OffersList'
import Header from './header/Header'
import Pager from '../../pager/Pager'
import SortOrderPane from './sort/SortOrderPane'

class OffersSection extends Component {
  render() {
    return (
      <div id="offers-section">
        <div id="category-header">
          <Header title={this.props.category.keyValue} count={this.props.count}/>
        </div>
        <SortOrderPane sort={this.props.sort} onChange={this.props.onChange} />
        <Pager
          base="category"
          category={this.props.categoryId}
          page={this.props.page}
          pages={this.props.pages}
        />
        <OffersList
          items={this.props.data}
          selected={this.props.compareFIFO}
          onSelect={this.props.onSelect}
        />
        <Pager
          base="category"
          category={this.props.categoryId}
          page={this.props.page}
          pages={this.props.pages}
        />
      </div>
    )
  }
}

export default OffersSection
