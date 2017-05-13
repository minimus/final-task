import React, {Component} from 'react'
import TableCaption from './header/Caption'
import ImageRow from './header/ImageRow'
import HeaderRow from './header/HeaderRow'
import PriceRow from './header/PriceRow'
import TechInfoRow from './body/TechInfoRow'
import PurchaseRow from './footer/TableFooter'

class ComparisonTable extends Component {
  getItemsData = param => {
    const items = []
    for (const val of this.props.data) {
      const item = val.param.find(el => el.name === param)
      if (!!item) items.push({text: item.keyValue, found: true})
      else items.push({text: '', found: false})
    }
    return items
  }

  render() {
    return (
      <div className="comparison-table">
        <ImageRow items={this.props.data}/>
        <HeaderRow items={this.props.data}/>
        <PriceRow items={this.props.data}/>
        <PurchaseRow items={this.props.data}/>
        {this.props.params.map((e, i) => <TechInfoRow caption={e} items={this.getItemsData(e)} key={i}/>)}
        <PurchaseRow items={this.props.data}/>
      </div>
    )
  }
}

export default ComparisonTable