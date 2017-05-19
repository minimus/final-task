import { prepareFacets } from '../helpers'

const SEARCH_FETCH_STARTED = 'SEARCH_FETCH_STARTED'
const SEARCH_FETCH_COMPLETED = 'SEARCH_FETCH_COMPLETED'
const SEARCH_FETCH_UNCOMPLETED = 'SEARCH_FETCH_UNCOMPLETED'
const SEARCH_FACET_CHANGED = 'SEARCH_FACET_CHANGED'
const SEARCH_FACETS_CLEAR = 'SEARCH_FACETS_CLEAR'
const SEARCH_BAR_CHANGED = 'SEARCH_BAR_CHANGED'

export function fetchSearchData(phrase, page, filter = []) {
  return function (dispatch) {
    dispatch({ type: SEARCH_FETCH_STARTED, payload: { loading: true, notFound: false } })

    const url = new URL(`/data/search/${encodeURIComponent(phrase)}/${page}/`, window.location.origin)

    if (filter.length) url.searchParams.append('filter', JSON.stringify(filter))

    fetch(url)
      .then(data => data.json())
      .then(data => dispatch({
        type: SEARCH_FETCH_COMPLETED,
        payload: {
          data: data.data,
          categories: data.cats,
          facets: prepareFacets(data),
          count: (!!data.count && data.count.length) ? data.count[0].count : 0,
          page: data.page,
          offersOnPage: data.offersOnPage,
          phrase: data.phrase,
          loading: false,
          notFound: false,
        },
      }))
      .catch(e => dispatch({
        type: SEARCH_FETCH_UNCOMPLETED,
        payload: {
          data: null,
          categories: null,
          facets: null,
          count: 0,
          page: 1,
          offersOnPage: 0,
          phrase: '',
          loading: false,
          notFound: true,
          error: e,
        },
      }))
  }
}

export function facetChanged(event) {
  return function (dispatch) {
    const target = event.currentTarget
    const filterValue = (value) => {
      if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value)) { return Number(value) }
      return value
    }
    dispatch({
      type: SEARCH_FACET_CHANGED,
      payload: {
        field: target.dataset.field,
        name: target.dataset.name,
        value: filterValue(target.dataset.value),
      },
    })
  }
}

export function facetsClearSelected() {
  return function (dispatch) {
    dispatch({ type: SEARCH_FACETS_CLEAR })
  }
}

export function clearFacets() {
  return function (dispatch) {
    dispatch({ type: SEARCH_FACETS_CLEAR })
  }
}

const initialState = {
  data: null,
  categories: null,
  facets: null,
  selectedFacets: [],
  count: 0,
  phrase: '',
  page: 1,
  pages: 0,
  offersOnPage: 0,
  loading: false,
  notFound: false,
  error: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FETCH_STARTED:
      return { ...state, ...action.payload }

    case SEARCH_FETCH_COMPLETED:
      return {
        ...state,
        ...action.payload,
        pages: (!action.payload.notFound) ?
          Math.ceil(action.payload.count / action.payload.offersOnPage) : 0,
      }

    case SEARCH_FETCH_UNCOMPLETED:
      return { ...state, ...action.payload }

    case SEARCH_FACET_CHANGED: {
      const selFacets = [...state.selectedFacets]
      const idx = selFacets.findIndex(e =>
        (e.field === action.payload.field &&
        e.name === action.payload.name &&
        e.value === action.payload.value))
      if (idx > -1) selFacets.splice(idx, 1)
      else selFacets.push(action.payload)
      return { ...state, selectedFacets: selFacets }
    }

    case SEARCH_FACETS_CLEAR:
      return { ...state, selectedFacets: [] }

    case SEARCH_BAR_CHANGED:
      return { ...state, phrase: action.payload }

    default:
      return state
  }
}
