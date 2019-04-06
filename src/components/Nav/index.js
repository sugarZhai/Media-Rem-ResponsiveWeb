import React from 'react'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../../store'
import {NavContainer} from './index.style'
import {navInfo,historyInfo} from '../../utils'
import Main from '../Main'
@inject('store')
@observer
export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
     let currentWidth=document.body.offsetWidth||document.body.clientWidth
     let screenType=3
     if(currentWidth<768){
      screenType=0
      let navDom=document.getElementById('nav')
      navDom.style.display = 'none'
     }else if(currentWidth>768&&currentWidth<=1024){
        screenType=1
     }else if(currentWidth>1024&&currentWidth<=1200){
        screenType=2
     }
     this.store.changeStoreValue('screenType',screenType)
    }
  }
  render() {
    const {navIndex,hisIndex,showNav}=this.store
    return (
      <NavContainer>
        <div className="navSty">
        {
          showNav&&(
            <div className="navTitle" id="nav">
               <ul className="titleLi">
                 {
                   navInfo.map((item,index)=>(
                     <li 
                       key={index} 
                       className={index===navIndex?'navActive':''} 
                       onClick={()=>{this.store.changeStoreValue('navIndex',index)}}>
                       <i className={item.icon}></i>{item.txt}
                     </li>
                   ))
                 }
               </ul>
               <ul className="historyLi">
                  <span>History</span>
                  {
                    historyInfo.map((item,index)=>(
                    <li key={index} 
                       className={index===hisIndex?'hisActive':''} 
                       onClick={()=>{this.store.changeStoreValue('hisIndex',index)}} >
                       <span>•</span>{item}
                    </li>
                    ))
                  }
               </ul>
            </div>
          )
        }
        <div style={{flex:'auto'}}><Main/></div>
        </div>
      </NavContainer>
    )
  }
}
