import {removeGarbage, removeParamGarbage} from '../helpers'

const COMPARISON_FETCH_STARTED = 'COMPARISON_FETCH_STARTED'
const COMPARISON_FETCH_COMPLETED = 'COMPARISON_FETCH_COMPLETED'

export function fetchComparisonData(items) {
  return function (dispatch) {
    dispatch({type: COMPARISON_FETCH_STARTED, payload: {loading: true, notFound: false}})

    const url = new URL(`/data/comparison/${items}/`, window.location.origin)

    fetch(url)
      .then(data => data.json())
      .then(data => dispatch({
        type: COMPARISON_FETCH_COMPLETED,
        payload: {
          data: data.data,
          params: data.params,
          loading: false,
          notFound: (!data.data.length)
        }
      }))
      .catch(e => dispatch({
        type: COMPARISON_FETCH_COMPLETED,
        payload: {
          data: null,
          params: null,
          loading: false,
          notFound: true
        }
      }))
  }
}

const initialState = {data: null, params: null, loading: false, notFound: false}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COMPARISON_FETCH_STARTED:
      return {...state, ...action.payload}
    case COMPARISON_FETCH_COMPLETED:
      return {
        ...state,
        data: action.payload.data,
        params: removeGarbage(action.payload.params),
        loading: action.payload.loading,
        notFound: action.payload.notFound
      }
    default:
      return state
  }
}
