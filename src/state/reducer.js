import { IS_MOBILE, MOB_MENU_VISIBLE } from "./types"

const initialState = {
  isMobile: false,
  mobMenuVisible: false,
}

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case IS_MOBILE:
      newState.isMobile = payload
      break
    case MOB_MENU_VISIBLE:
      newState.mobMenuVisible = payload
      break
    default:
      break
  }
  return newState
}

export default reducer
