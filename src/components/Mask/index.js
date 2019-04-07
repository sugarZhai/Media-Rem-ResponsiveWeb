import React from 'react'
import {MaskContainer} from './index.style'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../../store'

@inject('store')
@observer
export default class Mask extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  render() {
    const {building,idle,all,virtual,physical,screenType}=this.store
    return (
      <MaskContainer>
        <div className="maskSty">
           <div className="maskFlex">
              <b>Building</b>
              <div className="iconBox setRate">
                  <i className="icon-cog fonts"></i>
              </div>
              <p>{building}</p>
           </div>
           <div className="maskFlex" style={{background:'#7fbc39'}}>
              <b>Idle</b>
              <div className="iconBox">
                  <i className="icon-coffee fonts"></i>
              </div>
              <p>{idle}</p>
           </div>
           {
             screenType!==0&&(
              <div className="countFlex">
                <div><p>ALL</p><b>{all}</b></div>
                <div><p>PHYSICAL</p><b>{physical}</b></div>
                <div><p>VIRTUAL</p><b>{virtual}</b></div>
              </div>
             )
           }
        </div>
        {
           screenType===0&&(
            <div className="countFlex">
              <div><p>ALL</p><b>{all}</b></div>
              <div><p>PHYSICAL</p><b>{physical}</b></div>
              <div><p>VIRTUAL</p><b>{virtual}</b></div>
            </div>
           )
        }
      </MaskContainer>
    )
  }
}
