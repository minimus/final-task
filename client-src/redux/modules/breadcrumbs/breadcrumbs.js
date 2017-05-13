const BREADCRUMBS_FETCH_STARTED = 'BREADCRUMBS_FETCH_STARTED'
const BREADCRUMBS_FETCH_COMPLETED = 'BREADCRUMBS_FETCH_COMPLETED'

export function fetchBreadcrumbsData(item) {
  return function (dispatch) {
    dispatch({type: BREADCRUMBS_FETCH_STARTED})

    const needData = !!item.match(/\/\w+\/[0-9\-]+/) && (-1 === item.indexOf('/search/'))

    if(needData) {
      fetch(`/data/info${item.match(/\/\w+\/[0-9\-]+/)}`)
        .then(data => data.json())
        .then(data => dispatch({type: BREADCRUMBS_FETCH_COMPLETED, payload: data}))
        .catch(e => dispatch({type: BREADCRUMBS_FETCH_COMPLETED, payload: initialState}))
    }
    else {
      if (!item || item === '/') {
        dispatch({type: BREADCRUMBS_FETCH_COMPLETED, payload: initialState})
      }
      else if (0 === item.indexOf('/search/')) {
        dispatch({type: BREADCRUMBS_FETCH_COMPLETED, payload: {
          category: {id: 1, link: '', name: 'Поиск'},
          offer: {id: -1, link: '', name: ''}
        }})
      }
      else {
      }
    }
  }
}

const initialState = {
  home: {id: 0, link: '/', name: 'Главная'},
  category: {id: -1, link: '', name: ''},
  offer: {id: -1, link: '', name: ''}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BREADCRUMBS_FETCH_COMPLETED:
      return {...state, category: action.payload.category, offer: action.payload.offer}
    default:
      return state
  }
}
