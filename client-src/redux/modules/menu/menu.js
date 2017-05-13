const MENU_FETCH_STARTED = 'MENU_FETCH_STARTED'
const MENU_FETCH_COMPLETED = 'MENU_FETCH_COMPLETED'
const MENU_BUTTON_CLICKED = 'MENU_BUTTON_CLICKED'
const MENU_CLOSE_CLICKED = 'MENU_CLOSE_CLICKED'
const MENU_BACK_CLICKED = 'MENU_BACK_CLICKED'
const MENU_FORWARD_CLICKED = 'MENU_FORWARD_CLICKED'
const MENU_TOOLTIP_CLOSE_CLICKED = 'MENU_TOOLTIP_CLOSE_CLICKED'

export function fetchMenuData() {
  return function (dispatch) {
    dispatch({ type: MENU_FETCH_STARTED })

    fetch('/data/menu')
      .then(data => data.json())
      .then(menuData => dispatch({type: MENU_FETCH_COMPLETED, payload: menuData}))
  }
}

export function menuClicked(item) {
  return function (dispatch) {
    const target = item.currentTarget
    let shown, curMenu, prevMenu;
    if (target.id === 'left-menu') {
      shown = true
      curMenu = parseInt(target.dataset.id, 10)
      prevMenu = -1
      dispatch({type: MENU_BUTTON_CLICKED, payload: { shown, curMenu, prevMenu }})
    }
    else if (target.classList.contains('menu-close')) {
      shown = false
      curMenu = 0
      dispatch({type: MENU_CLOSE_CLICKED, payload: {shown, curMenu}})
    }
    else if (target.classList.contains('menu-back')) {
      curMenu = parseInt(target.parentNode.dataset.parent, 10)
      dispatch({type: MENU_BACK_CLICKED, payload: {curMenu}})
    }
    else if (target.classList.contains('menu-forward')) {
      shown = true
      curMenu = parseInt(target.parentNode.dataset.id, 10)
      dispatch({type: MENU_FORWARD_CLICKED, payload: {shown, curMenu}})
    }
    else {
      shown = false
      curMenu = 0
      dispatch({type: MENU_CLOSE_CLICKED, payload: {shown, curMenu}})
    }
  }
}

export function closeTooltip(elem) {
  return function (dispatch) {
    dispatch({type: MENU_TOOLTIP_CLOSE_CLICKED, payload: false})
  }
}

const initialState = { menu: null, shown: false, curMenu: null, prevMenu: -1, tooltip: true }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MENU_FETCH_COMPLETED:
      return { ...state, menu: action.payload }
    case MENU_BUTTON_CLICKED:
      return {...state, shown: action.payload.shown, curMenu: action.payload.curMenu, prevMenu: action.payload.prevMenu}
    case MENU_CLOSE_CLICKED:
      return {...state, shown: action.payload.shown, curMenu: action.payload.curMenu, prevMenu: state.curMenu}
    case MENU_BACK_CLICKED:
      return {...state, shown: (state.prevMenu > 0), curMenu: action.payload.curMenu, prevMenu: state.curMenu}
    case MENU_FORWARD_CLICKED:
      return {...state, shown: action.payload.shown, curMenu: action.payload.curMenu, prevMenu: state.curMenu}
    case MENU_TOOLTIP_CLOSE_CLICKED:
      return {...state, tooltip: action.payload}
    default:
      return state
  }
}
