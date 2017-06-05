import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import ImageRow from './header/ImageRow'
import HeaderRow from './header/HeaderRow'
import PriceRow from './header/PriceRow'
import TechInfoRow from './body/TechInfoRow'
import PurchaseRow from './footer/TableFooter'

class ComparisonTable extends PureComponent {
  getItemsData = (param) => {
    const items = []

    this.props.data.forEach((val) => {
      const item = val.param.find(el => el.name === param)
      if (item) items.push({ text: item.keyValue, found: true })
      else items.push({ text: '', found: false })
    })
    return items
  }

  render() {
    return (
      <div className="comparison-table">
        <ImageRow items={this.props.data} />
        <HeaderRow items={this.props.data} />
        <PriceRow items={this.props.data} />
        <PurchaseRow items={this.props.data} />
        {this.props.params.map(e =>
          <TechInfoRow caption={e} items={this.getItemsData(e)} key={e} />)}
        <PurchaseRow items={this.props.data} />
      </div>
    )
  }
}

ComparisonTable.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  params: propTypes.arrayOf(propTypes.object).isRequired,
}

export default ComparisonTable
