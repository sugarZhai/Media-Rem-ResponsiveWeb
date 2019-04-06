import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = !process.browser
useStaticRendering(isServer)

class Store {
  @observable name = 'will'
  @observable showSign=false
  @observable showNav=true
  @observable hisIndex=0
  @observable navIndex=1
  @observable building=2
  @observable idle=0
  @observable all=0
  @observable physical=0
  @observable virtual=0
  @observable tabIndex=0
  @observable searchValue=''
  @observable screenType=0//0:<=768 1:768-1024 2:1024-1200 3:1200
  @action
  changeStoreValue(type, value) {
    this[type] = value
  }
}

let store = null

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}
