import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import Header from './Header'

class HeaderRow extends PureComponent {
  render() {
    return (
      <div className="header-row">
        <div className="empty-cell" />
        {this.props.items.map(e =>
          (<div className="header-cell" key={e.id}>
            <Header text={e.name} link={`/offer/${e.id}`} />
          </div>))}
      </div>
    )
  }
}

HeaderRow.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
}

export default HeaderRow
