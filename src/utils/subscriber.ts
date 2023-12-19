export default class Subscriber {
  static all = new Map()
  static on(e: any, n: any) {
    const r = this.all.get(e)
    r ? r.push(n) : this.all.set(e, [n])
  }
  static off(e: any, n: any) {
    const r: any = this.all.get(e)
    r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : this.all.set(e, []))
  }
  static emit(e: any, n: any) {
    const r = this.all.get(e)

    if (r) {
      r.slice().map((t: any) => {
        t?.(n)
      })
    }
  }
}
