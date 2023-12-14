class LocalStore {
  getItem(key: string) {
    let value = window.localStorage.getItem(key)
    if (!value) {
      return null
    }
    try {
      value = JSON.parse(value)
    } catch (e) {
      // console.error(e)
    }
    return value
  }

  setItem(key: string, value: any) {
    if (typeof value === 'undefined') {
      return undefined
    }
    if (typeof value === 'number' || typeof value === 'string') {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  // store push arr
  push(key: string, value: any) {
    const store = this.getItem(key)
    if (store) {
      this.setItem(key, [...store, value])
    } else {
      this.setItem(key, [value])
    }
  }
  unshift(key: string, value: any) {
    const store = this.getItem(key)
    if (store) {
      this.setItem(key, [value, ...store])
    } else {
      this.setItem(key, [value])
    }
  }
  // store slice arr
  slice(key: string, index: number, obj: any) {
    const store: any = this.getItem(key)
    if (!obj) {
      store.splice(index, 1)
    } else {
      store.splice(index, 1, obj)
    }
    this.setItem(key, store)
  }

  clear(key: string) {
    window.localStorage.removeItem(key)
  }

  removeItem(key: string) {
    this.clear(key)
  }
}

export default new LocalStore()
