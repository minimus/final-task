import {getInfo} from '../helpers'
import noPicture from '../../../components/category/no_photo.png'

const OFFER_FETCH_STARTED = 'OFFER_FETCH_STARTED'
const OFFER_FETCH_COMPLETED = 'OFFER_FETCH_COMPLETED'
const OFFER_THUMBNAIL_CLICKED = 'OFFER_THUMBNAIL_CLICKED'
const OFFER_DIALOG_CLOSE_CLICKED = 'OFFER_DIALOG_CLOSE_CLICKED'
const OFFER_DIALOG_OPEN_CLICKED = 'OFFER_DIALOG_OPEN_CLICKED'
const OFFER_NEXT_IMAGE_CLICKED = 'OFFER_NEXT_IMAGE_CLICKED'
const OFFER_PREV_IMAGE_CLICKED = 'OFFER_PREV_IMAGE_CLICKED'

export function fetchOfferData(offer) {
  return function (dispatch) {
    dispatch({type: OFFER_FETCH_STARTED, payload: {loading: true, notFound: false}})

    fetch(`/data${offer}`)
      .then(data => data.json())
      .then(offer => {
        let pictures;
        if (offer.data.picture) {
          pictures = (Array.isArray(offer.data.picture))
            ? [...offer.data.picture]
            : [offer.data.picture]
        }
        else pictures = [noPicture]
        dispatch({
        type: OFFER_FETCH_COMPLETED,
        payload: {
          data: offer.data,
          pictures,
          params: [...offer.data.param],
          info: getInfo(offer.data),
          selectedPicture: pictures[0],
          loading: false,
          notFound: false
        } //offer.data
      })})
      .catch(e => dispatch({type: OFFER_FETCH_COMPLETED, payload: {notFound: true}}))
  }
}

export function thumbnailClicked(thumbnail) {
  return function (dispatch) {
    const target = thumbnail.currentTarget.children[0]
    dispatch({type: OFFER_THUMBNAIL_CLICKED, payload: target.src})
  }
}

export function dialogOpenClicked(element) {
  return function (dispatch) {
    dispatch({type: OFFER_DIALOG_OPEN_CLICKED})
  }
}

export function dialogCloseClicked(element) {
  return function (dispatch) {
    dispatch({type: OFFER_DIALOG_CLOSE_CLICKED})
  }
}

export function dialogNavClicked(nav) {
  return function (dispatch) {
    const target = nav.currentTarget
    if (target.id === 'show-right')
      dispatch({type: OFFER_NEXT_IMAGE_CLICKED})
    else
      dispatch({type: OFFER_PREV_IMAGE_CLICKED})
  }
}

const initialState = {
  data: null,
  pictures: null,
  params: null,
  selectedPicture: '',
  loading: false,
  dialog: false,
  notFound: false
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case OFFER_FETCH_STARTED:
      return {...state, ...action.payload}

    case OFFER_FETCH_COMPLETED:
      return {...state, ...action.payload}

    case OFFER_THUMBNAIL_CLICKED:
      return {...state, selectedPicture: action.payload}

    case OFFER_DIALOG_OPEN_CLICKED:
      return {...state, dialog: true}

    case OFFER_DIALOG_CLOSE_CLICKED:
      return {...state, dialog: false}

    case OFFER_NEXT_IMAGE_CLICKED:
      const
        current = state.pictures.indexOf(state.selectedPicture),
        idx = (current + 1) % state.pictures.length,
        next = state.pictures[idx]
      return {...state, selectedPicture: next}

    case OFFER_PREV_IMAGE_CLICKED:
      const
        cur = state.pictures.indexOf(state.selectedPicture),
        i = (cur === 0) ? state.pictures.length - 1 : cur - 1,
        prev = state.pictures[i]
      return {...state, selectedPicture: prev}

    default:
      return state
  }
}
