const Ls = {
  exists: (typeof window !== 'undefined' && window.localStorage !== undefined),

  get(key: string) {
    if (!this.exists) return;
    const data = window.localStorage.getItem(key)
    if (!data) return
    return JSON.parse(data)
  },

  add(key: string, data: object | null | string | number) {
    if (!this.exists) return
    window.localStorage.setItem(key, JSON.stringify(data))
  },

  remove(key: string) {
    if (!this.exists) return;
    window.localStorage.removeItem(key)
  },

  wipe() {
    if (!this.exists) return;
    window.localStorage.clear()
  }
}

export default Ls;