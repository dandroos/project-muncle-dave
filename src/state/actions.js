import { IS_MOBILE, MOB_MENU_VISIBLE } from "./types"

export const setIsMobile = payload => ({
  type: IS_MOBILE,
  payload,
})

export const setMobMenuVisible = payload => ({
  type: MOB_MENU_VISIBLE,
  payload,
})
