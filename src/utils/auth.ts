import localStore from './localStore'

const TokenKey = 'token'

export function getToken() {
  return localStore.getItem(TokenKey)
}

export function setToken(token: string) {
  return localStore.setItem(TokenKey, token)
}

export function removeToken() {
  return localStore.removeItem(TokenKey)
}
