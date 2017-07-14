const SEARCHBAR_BUTTON_CLICKED = 'SEARCHBAR_BUTTON_CLICKED'
const SEARCHBAR_TEXT_CHANGED = 'SEARCHBAR_TEXT_CHANGED'
const SEARCHBAR_TEXT_ENTERED = 'SEARCHBAR_TEXT_ENTERED'
const SEARCHBAR_CLEAR_REDIRECT = 'SEARCHBAR_CLEAR_REDIRECT'
const SEARCHBAR_TOOLTIP_CLOSE_CLICKED = 'SEARCHBAR_TOOLTIP_CLOSE_CLICKED'

export function closeTooltip() {
  return function (dispatch) {
    dispatch({ type: SEARCHBAR_TOOLTIP_CLOSE_CLICKED, payload: false })
  }
}

export function searchButtonClicked(event) {
  return function (dispatch) {
    const target = event.currentTarget
    const phrase = target.dataset.phrase
    dispatch({ type: SEARCHBAR_BUTTON_CLICKED, payload: phrase })
  }
}

export function trackSearchInput(event) {
  return function (dispatch) {
    const phrase = event.target.value
    if (event.key === 'Enter') {
      const redirect = (phrase) ? `/search/${encodeURIComponent(phrase)}/1` : ''
      dispatch({ type: SEARCHBAR_TEXT_ENTERED, payload: { phrase, redirect } })
    }
  }
}

export function trackSearchValue(event) {
  return function (dispatch) {
    const phrase = event.target.value
    dispatch({ type: SEARCHBAR_TEXT_CHANGED, payload: phrase })
  }
}

export function clearRedirect() {
  return function (dispatch) {
    dispatch({ type: SEARCHBAR_CLEAR_REDIRECT })
  }
}

const initialState = {
  phrase: '',
  redirect: '',
  tooltip: true,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCHBAR_TEXT_CHANGED:
      return { ...state, phrase: action.payload }
    case SEARCHBAR_TEXT_ENTERED:
      return { ...state, ...action.payload }
    case SEARCHBAR_CLEAR_REDIRECT:
      return { ...state, redirect: '' }
    case SEARCHBAR_BUTTON_CLICKED:
      return { ...state, phrase: action.payload }
    case SEARCHBAR_TOOLTIP_CLOSE_CLICKED:
      return { ...state, tooltip: action.payload }
    default:
      return state
  }
}

