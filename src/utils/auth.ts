import localStore from './localStore'

const TokenKey = 'token'
const RoleKey = 'roles'
const nameKey = 'name'
const downloadFlagKey = 'downloadFlag'
const merchantListKey = 'merchantList'
const anchorTypeListKey = 'anchorTypeList'
const avatarKey = 'avatar'
const groupListKey = 'groupList'

export function getToken() {
  return localStore.getItem(TokenKey)
}

export function setToken(token: string) {
  return localStore.setItem(TokenKey, token)
}

export function removeToken() {
  return localStore.removeItem(TokenKey)
}

export function getRoles() {
  return localStore.getItem(RoleKey)
}

export function setRoles(role: string) {
  return localStore.setItem(RoleKey, role)
}
export function removeRoles() {
  return localStore.removeItem(RoleKey)
}

export function getName() {
  return localStore.getItem(nameKey)
}

export function setName(name: string) {
  return localStore.setItem(nameKey, name)
}

export function removeName() {
  return localStore.removeItem(nameKey)
}

export function getDownloadFlag() {
  return localStore.getItem(downloadFlagKey)
}

export function setDownloadFlag(downloadFlag: string) {
  return localStore.setItem(downloadFlagKey, downloadFlag)
}

export function removeDownloadFlag() {
  return localStore.removeItem(downloadFlagKey)
}

export function getAvatar() {
  return localStore.getItem(avatarKey)
}

export function setAvatar(avatar: string) {
  return localStore.setItem(avatarKey, avatar)
}

export function removeAvatar() {
  return localStore.removeItem(avatarKey)
}

// merchantList
export function getLocMerchantList() {
  return localStore.getItem(merchantListKey)
}
export function setMerchantList(merchantList:any) {
  return localStore.setItem(merchantListKey, merchantList)
}
export function removeMerchantList() {
  return localStore.removeItem(merchantListKey)
}

// anchorTypeList
export function getLocAnchorTypeList() {
  return localStore.getItem(anchorTypeListKey)
}
export function setAnchorTypeList(anchorTypeList:any) {
  return localStore.setItem(anchorTypeListKey, anchorTypeList)
}
export function removeAnchorTypeList() {
  return localStore.removeItem(anchorTypeListKey)
}

// groupList
export function getGroupList() {
  return localStore.getItem(groupListKey)
}
export function setGroupList(groupList:any) {
  return localStore.setItem(groupListKey, groupList)
}
export function removeGroupList() {
  return localStore.removeItem(groupListKey)
}
