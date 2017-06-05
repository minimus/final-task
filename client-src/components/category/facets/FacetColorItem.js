import React, { PureComponent } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

const colors = [
  { name: 'бирюзовый', value: '#40E0D0' },
  { name: 'бронза', value: '#CD7F32' },
  { name: 'светло-зеленый', value: '#90EE90' },
  { name: 'сиреневый', value: '#C8A2C8' },
  { name: 'зеленый', value: '#008000' },
  { name: 'серебристый', value: '#C0C0C0' },
  { name: 'прозрачный', value: '#FFFFFF' },
  { name: 'фуксия', value: '#FF00FF' },
  { name: 'голубой', value: '#87CEFA' },
  { name: 'белый', value: '#FFFFFF' },
  { name: 'серый', value: '#808080' },
  { name: 'темно-серый', value: '#A9A9A9' },
  { name: 'синий', value: '#0000FF' },
  { name: 'розовый', value: '#FFC0CB' },
  { name: 'оливковый', value: '#808000' },
  { name: 'коричневый', value: '#A52A2A' },
  { name: 'бордовый', value: '#5F021F' },
  { name: 'светло-бежевый', value: '#E1C699' },
  { name: 'красный', value: '#FF0000' },
  { name: 'золотой', value: '#FFD700' },
  { name: 'оранжевый', value: '#FFA500' },
  { name: 'серый металлик', value: '#43464B' },
  { name: 'желтый', value: '#FFFF00' },
  { name: 'темно-зеленый', value: '#006400' },
  { name: 'светло-серый', value: '#D3D3D3' },
  { name: 'черный', value: '#000000' },
  { name: 'темно-синий', value: '#00008B' },
  { name: 'светло-розовый', value: '#FFB6C1' },
  { name: 'фиолетовый', value: '#800080' },
  { name: 'бежевый', value: '#F5F5DC' },
  { name: 'светло-коричневый', value: '#B5651D' },
  { name: 'темно-коричневый', value: '#654321' },
]

class FacetColorItem extends PureComponent {
  render() {
    const itemStyle = {
      background: colors.find(e => e.name === this.props.value).value,
    }
    const classSelected = (this.props.selected) ? 'selected' : ''
    return (
      <button
        id={this.props.id}
        className={classNames(classSelected, 'facet-item', 'color-item')}
        style={itemStyle}
        title={this.props.value}
        data-field={this.props.field}
        data-name={this.props.name}
        data-value={this.props.value}
        onClick={this.props.onChange}
      >
        {' '}
      </button>
    )
  }
}

FacetColorItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  field: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
}

export default FacetColorItem
