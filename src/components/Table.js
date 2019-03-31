import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import Logo from '../../static/img/logo.svg'
import { initializeStore } from '../store'
import {isPC} from '../utils'
const Container = styled.div`
font-size:0;
height:1.8133rem;
text-align:center;
background:white;
box-shadow:0 0.08rem 0.0533rem #e6e6e6;
position:relative;
>svg{
  width:2.6667rem;
  height:0.8rem;
  padding-top:0.48rem;
}
.userSty{
  position:absolute;
  right:1.0667rem;
  top:0.48rem;
  >img{
    width:1.0667rem;
    height:1.0667rem;
    border-radius:2.6667rem;
  }
  >i{
    font-size:0.6667rem;
    color:#999;
    position:absolute;
    right:-0.6667rem;
    top:0.24rem;
  }
}
.signSty{
  position:absolute;
  top:1.6533rem;
  right:0.1333rem;
  padding:0.2667rem 0;
  box-shadow:0.0533rem 0.0533rem 0.0533rem 0.0533rem #e6e6e6;
  background:white;
  >div{
    display:flex;
    align-items:center;
    height:0.8533rem;
    padding:0 0.4267rem;
    >i{
      width:0.5867rem;
      height:0.32rem;
      padding-right:0.16rem;
    }
  }
}
`
@inject('store')
@observer
class Table extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  componentDidMount() {
    if (typeof window !== 'undefined' && isPC()) {
      document.body.style.maxWidth = '1200px'
    }
  }
  render() {
    const {showSign}=this.store
    return (
      <Container>
        <Logo/>
        <div className="userSty" onClick={()=>{this.store.changeStoreValue('showSign',!showSign)}}>
          <img src={`/static/img/head.png`}/>
          <i className={showSign?'icon-angle-up fonts':'icon-angle-down fonts'}></i>
        </div>
        {
          showSign&&(
            <div className="signSty" onClick={()=>{this.store.changeStoreValue('showSign',!showSign)}}>
            <div>
             <i className="icon-id-card fonts"></i>
             Profile
            </div>
            <div style={{background:'#efefef'}}>
             <i className="icon-sign-in fonts"></i>
             Sign Out
            </div>
         </div>
          )
        }
      </Container>
    )
  }
}

export default Table
