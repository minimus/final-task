const HOME_SEARCH_CLICKED = 'HOME_SEARCH_CLICKED'
const HOME_SEARCH_ENTER = 'HOME_SEARCH_ENTER'
const HOME_FETCH_STARTED = 'HOME_FETCH_STARTED'
const HOME_FETCH_COMPLETED = 'HOME_FETCH_COMPLETED'
const SEARCH_TOOLTIP_CLOSE_CLICKED = 'SEARCH_TOOLTIP_CLOSE_CLICKED'

export function fetchSearchData(phrase) {
  return function (dispatch) {
    dispatch({ type: HOME_FETCH_STARTED, payload: { loading: true, notFound: false } })

    const url = new URL(`/data/search/${phrase}/`, window.location.origin)

    fetch(url)
      .then(data => data.json())
      .then(data => dispatch({
        type: HOME_FETCH_COMPLETED,
        payload: {
          data: data.data,
          categories: data.cats,
          count: (data.count) ? data.count[0].count : 0,
          phrase: data.phrase,
          loading: false,
          notFound: false,
        },
      }))
      .catch(() => dispatch({
        type: HOME_FETCH_COMPLETED,
        payload: { loading: false, notFound: true } }))
  }
}

export function closeTooltip() {
  return function (dispatch) {
    dispatch({ type: SEARCH_TOOLTIP_CLOSE_CLICKED, payload: false })
  }
}

export function searchButtonClicked(btn) {
  return function (dispatch) {
    const target = btn.currentTarget
    const phrase = target.dataset.phrase
    dispatch({ type: HOME_SEARCH_CLICKED, payload: phrase })
  }
}

export function trackSearchInput(event) {
  return function (dispatch) {
    const phrase = event.target.value
    dispatch({ type: HOME_SEARCH_ENTER, payload: phrase })
  }
}

const initialState = {
  data: null,
  categories: null,
  count: 0,
  phrase: '',
  loading: false,
  notFound: false,
  tooltip: true,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HOME_SEARCH_ENTER:
      return { ...state, phrase: action.payload }
    case HOME_SEARCH_CLICKED:
      return { ...state, phrase: action.payload }
    case SEARCH_TOOLTIP_CLOSE_CLICKED:
      return { ...state, tooltip: action.payload }
    default:
      return state
  }
}
