import localStore from './localStore'

const TokenKey = 'token'
const ThemeKey = 'theme'

export function getUrlParams() {
  const queryString = window.location.search
  const urlParams: any = new URLSearchParams(queryString)
  const params: any = {}
  for (const [key, value] of urlParams.entries()) {
    params[key] = value
  }
  return params
}

export function getToken() {
  const params = getUrlParams()
  if (params.token) {
    setToken(params.token)
    return params.token
  }
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
