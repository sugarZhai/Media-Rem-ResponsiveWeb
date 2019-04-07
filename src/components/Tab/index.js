import React from 'react'
import {TabContainer} from './index.style'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../../store'
import {tabType} from '../../utils'

@inject('store')
@observer
export default class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  changeTab(i){
    this.store.changeStoreValue('tabIndex',i)
    this.store.getTabBody(i)
  }
  render() {
    const {tabIndex,searchValue,screenType}=this.store
    return (
      <TabContainer>
        <div className="tabSty">
          {
            tabType.map((item,index)=>(
              <div 
                className={index===tabIndex?"tabFlex activeTab" :"tabFlex"}
                key={index}
                onClick={()=>{this.changeTab(index)}}
              > {item}
              </div>
            ))
          }
          {
            screenType!==0&&(
              <div className="inputSty">
                <i className="icon-search fonts"></i>
                <input value={searchValue} onChange={(e)=>{this.store.changeStoreValue('searchValue',e.target.value)}}/>
                <div className="inputIcon">
                  <i className="icon-th-card fonts"></i>
                  <i className="icon-th-list fonts colorI"></i>
                </div>
             </div>
            )
          }
        
        </div>
      </TabContainer>
    )
  }
}
