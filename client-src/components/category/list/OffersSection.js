import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import OffersList from './OffersList'
import Header from './header/Header'
import Pager from '../../pager/Pager'
import SortOrderPane from './sort/SortOrderPane'

class OffersSection extends PureComponent {
  getTitle = () => (this.props.category.keyValue)

  render() {
    return (
      <section id="offers-section">
        <div id="category-header">
          <Header title={this.getTitle()} count={this.props.count} />
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
      </section>
    )
  }
}

OffersSection.propTypes = {
  category: propTypes.objectOf(propTypes.any).isRequired,
  count: propTypes.number.isRequired,
  sort: propTypes.string.isRequired,
  categoryId: propTypes.number.isRequired,
  page: propTypes.number.isRequired,
  pages: propTypes.number.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  compareFIFO: propTypes.arrayOf(propTypes.object).isRequired,
  onSelect: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
}

export default OffersSection
