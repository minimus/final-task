import React, {Component} from 'react'
import { connect } from 'react-redux'
import HomeMenu from '../../components/home/HomeMenuBar'

class HomeMenuContainer extends Component {
  render() {
    return (
      <HomeMenu menu={this.props.menu}/>
    )
  }
}

const mapStateToProps = state => ({
  menu: state.menu.menu
})

export default connect(mapStateToProps)(HomeMenuContainer)