import { prepareFacets } from '../helpers'

const CATEGORY_FETCH_STARTED = 'CATEGORY_FETCH_STARTED'
const CATEGORY_FETCH_COMPLETED = 'CATEGORY_FETCH_COMPLETED'
const CATEGORY_SORT_ORDER_CHANGED = 'CATEGORY_SORT_ORDER_CHANGED'
const FACETS_FETCH_STARTED = 'FACETS_FETCH_STARTED'
const FACETS_FETCH_COMPLETED = 'FACETS_FETCH_COMPLETED'
const CATEGORY_FACET_CHANGED = 'CATEGORY_FACET_CHANGED'
const FACETS_CLEAR_SELECTED = 'FACETS_CLEAR_SELECTED'
const CATEGORY_COMPARE_SELECTED = 'CATEGORY_COMPARE_SELECTED'
const CATEGORY_COMPARE_CLEARED = 'CATEGORY_COMPARE_CLEARED'

export function fetchCategoryData(cat, sort = 'no', filter = []) {
  return function (dispatch) {
    dispatch({ type: CATEGORY_FETCH_STARTED, payload: { loading: true, notFound: false } })

    const url = new URL(`/data${cat}/`, window.location.origin)

    url.searchParams.append('sort', sort)
    if (filter.length) url.searchParams.append('filter', JSON.stringify(filter))

    fetch(url)
      .then(data => data.json())
      .then(data => dispatch({
        type: CATEGORY_FETCH_COMPLETED,
        payload: {
          data: data.list,
          count: (!!data.count && data.count.length) ? data.count[0].count : 0,
          categoryId: data.categoryId,
          category: data.category,
          page: data.page,
          offersOnPage: data.offersOnPage,
          loading: false,
          notFound: (!data.list.length),
        },
      }))
      .catch(() => dispatch({ type: CATEGORY_FETCH_COMPLETED, payload: { notFound: true } }))
  }
}

export function fetchFacetsData(catId, filter = []) {
  return function (dispatch) {
    dispatch({ type: FACETS_FETCH_STARTED, payload: { loading: true, notFound: false } })

    const url = new URL(`/data/facets/${catId}/`, window.location.origin)

    if (filter.length) url.searchParams.append('filter', JSON.stringify(filter))

    fetch(url)
      .then(data => data.json())
      .then(data => dispatch({
        type: FACETS_FETCH_COMPLETED,
        payload: { data: data.data, notFound: false },
      }))
      .catch(() => dispatch({ type: FACETS_FETCH_COMPLETED, payload: { notFound: true } }))
  }
}

export function facetChanged(facet) {
  return function (dispatch) {
    const target = facet.currentTarget
    const filterValue = (value) => {
      if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
          .test(value)) { return Number(value) }
      return value
    }
    dispatch({
      type: CATEGORY_FACET_CHANGED,
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
    dispatch({ type: FACETS_CLEAR_SELECTED })
  }
}

export function clearFacets() {
  return function (dispatch) {
    dispatch({ type: FACETS_CLEAR_SELECTED })
  }
}

export function orderChanged(order) {
  return function (dispatch) {
    dispatch({ type: CATEGORY_SORT_ORDER_CHANGED, payload: order.currentTarget.value })
  }
}

export function compareItemSelected(item) {
  return function (dispatch) {
    const target = item.currentTarget
    const itemId = parseInt(target.dataset.id, 10)
    dispatch({ type: CATEGORY_COMPARE_SELECTED, payload: itemId })
  }
}

export function compareItemsClear() {
  return function (dispatch) {
    dispatch({ type: CATEGORY_COMPARE_CLEARED })
  }
}

export function clearCompare() {
  return function (dispatch) {
    dispatch({ type: CATEGORY_COMPARE_CLEARED })
  }
}

const initialState = {
  data: null,
  count: 0,
  page: 1,
  offersOnPage: 0,
  pages: 0,
  sort: 'name',
  filter: null,
  loading: false,
  notFound: false,
  facets: null,
  selectedFacets: [],
  compareFIFO: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH_STARTED:
      return { ...state, loading: action.payload.loading }
    case CATEGORY_FETCH_COMPLETED:
      return {
        ...state,
        ...action.payload,
        pages: (!action.payload.notFound) ?
          Math.ceil(action.payload.count / action.payload.offersOnPage) : 0,
      }
    case FACETS_FETCH_STARTED:
      return { ...state, loading: action.payload }
    case FACETS_FETCH_COMPLETED:
      return {
        ...state,
        facets: prepareFacets(action.payload.data),
        loading: action.payload.loading,
      }
    case CATEGORY_FACET_CHANGED: {
      const selFacets = [...state.selectedFacets]
      const idx = selFacets.findIndex(e =>
        (e.field === action.payload.field &&
        e.name === action.payload.name &&
        e.value === action.payload.value))
      if (idx > -1) selFacets.splice(idx, 1)
      else selFacets.push(action.payload)
      return { ...state, selectedFacets: selFacets }
    }
    case FACETS_CLEAR_SELECTED:
      return { ...state, selectedFacets: [] }
    case CATEGORY_SORT_ORDER_CHANGED:
      return { ...state, sort: action.payload }

    case CATEGORY_COMPARE_SELECTED: {
      const fifo = [...state.compareFIFO]
      const ci = fifo.findIndex(e => e.id === action.payload)
      if (ci === -1) {
        const cur = state.data.find(e => e.id === action.payload)
        fifo.push({
          id: action.payload,
          name: cur.name,
          link: `/offer/${cur.id}`,
          image: (Array.isArray(cur.picture)) ? cur.picture[0] : cur.picture,
        })
      } else fifo.splice(ci, 1)
      if (fifo.length > 3) fifo.splice(0, 1)
      return { ...state, compareFIFO: fifo }
    }
    case CATEGORY_COMPARE_CLEARED:
      return { ...state, compareFIFO: [] }
    default:
      return state
  }
}
