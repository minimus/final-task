import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchOfferData, thumbnailClicked, dialogOpenClicked, dialogCloseClicked, dialogNavClicked} from '../../redux/modules/offer'
import Offer from '../../components/offer'
import P404 from "../../components/p404/P404";

class OfferContainer extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
    return this.props.fetchOfferData(this.props.location.pathname)}

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0)
      this.props.fetchOfferData(nextProps.location.pathname)
    }
  }

  render() {
    if (this.props.notFound) return <P404 />
    return(
      <Offer {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  data: state.offer.data,
  pictures: state.offer.pictures,
  selectedPicture: state.offer.selectedPicture,
  params: state.offer.params,
  info: state.offer.info,
  loading: state.offer.loading,
  dialog: state.offer.dialog,
  notFound: state.offer.notFound
})

const mapDispatchToProps = {
  onClick: thumbnailClicked,
  onDialogOpen: dialogOpenClicked,
  onDialogClose: dialogCloseClicked,
  onNavClick: dialogNavClicked,
  fetchOfferData
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer)