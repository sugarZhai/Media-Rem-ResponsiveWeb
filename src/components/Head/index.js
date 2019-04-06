import React from 'react'
import {Container} from './index.style'
import { inject, observer } from 'mobx-react'
import Logo from '../../../static/img/logo.svg'
import { initializeStore } from '../../store'

@inject('store')
@observer
export default class Head extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
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
              <div className="chooseSty">
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
