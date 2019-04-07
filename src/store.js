import {
  action,
  observable
} from 'mobx'
import {
  useStaticRendering
} from 'mobx-react'
import {
  physicalInfo,
  virtualInfo,
  getTabBody
} from '../src/utils'
const isServer = !process.browser
useStaticRendering(isServer)

class Store {
  @observable showSign = false
  @observable showNav = true
  @observable hisIndex = 0
  @observable navIndex = 1
  @observable building = 3
  @observable idle = 3
  @observable all = 6
  @observable physical = 3
  @observable physicalInfo = []
  @observable virtualInfo = []
  @observable tabBody = physicalInfo.concat(virtualInfo)
  @observable virtual = 3
  @observable tabIndex = 0
  @observable searchValue = ''
  @observable addModal=false
  @observable addIndex=0
  @observable addBrowser=''
  @observable screenType = 0 //0:<=768 1:768-1024 2:1024-1200 3:1200
  @action
  changeStoreValue(type, value) {
    this[type] = value
  }
  @action getTabBody(index) {
    switch (index) {
      case 0:
        this.tabBody = physicalInfo.concat(virtualInfo)
        break;
      case 1:
        this.tabBody = physicalInfo
        break;
      case 2:
        this.tabBody = virtualInfo
        break;
    }
  }
  @action
  handleRes(addIndex,type,delIndex){
    this.tabBody.map((item,index)=>{
      if(addIndex===index){
        if(type==='add'){
          item.browserInfo.push(this.addBrowser)
        }else{
          item.browserInfo.splice(delIndex,1)
        }
      }
    })
    this.addModal=false
    this.addBrowser=''
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