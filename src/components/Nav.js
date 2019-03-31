import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../store'
import {isPC,navInfo,historyInfo} from '../utils'
import Detail from './Detail'
const NavContainer = styled.div`
background:#f3f3f3;
font-size:0;
  .navSty{
    display:flex;
    justify-content:flex-start;
    .navTitle{
      width:7.1467rem;
      background:#2d4054;
      position:relative;
      .titleLi{
        list-style:none;
        >li{
          height:1.2rem;
          padding-left:0.8rem;
          display:flex;
          align-items:center;
          font-size:0.3733rem;
          color:#c7ccd2;
          >i{
            width:0.64rem;
            height:0.32rem;
            padding-right:0.48rem;
            color:white;
          }
        }
        .navActive{
          background:#435466;
          color:#00b4cf;
          >i{
            color:#00b4cf;
          }
        }
      }
      .historyLi{
        margin:5.3333rem 0 1.3333rem 0;
        padding-left:0.4267rem;
        >span{
          font-size:0.64rem;
          color:#c7ccd2;
          padding-bottom:0.5867rem;
        }
        >li{
          font-size:0.32rem;
          color:#999;
          height:0.64rem;
          >span{
            padding-right:0.2667rem;
            text-align:center;
            font-size:0.2667rem
          }
        }
        .hisActive{
          color:#00b4cf;
        }
      }
    }
  }
  .close{
    position:absolute;
    left:6.5067rem;
    top:-1.0667rem;
    color:#00b4cf;
    >i{
      width:0.32rem;
      height:0.2667rem;
      font-size:0.5333rem;
    }
  }
`
@inject('store')
@observer
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      if(!isPC()){
        let navDom=document.getElementById('nav')
        navDom.style.display = 'none'
      }
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
        <div><Detail/></div>
        </div>
      </NavContainer>
    )
  }
}

export default Nav
