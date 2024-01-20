import localStore from './localStore'

const TokenKey = 'token'
const ThemeKey = 'theme'

export function getToken() {
  return localStore.getItem(TokenKey)
}

export function setToken(token: string) {
  return localStore.setItem(TokenKey, token)
}
export function getTheme() {
  return localStore.getItem(ThemeKey)
}

export function setTheme(token: string) {
  return localStore.setItem(ThemeKey, token)
}

export function removeToken() {
  return localStore.removeItem(TokenKey)
}
