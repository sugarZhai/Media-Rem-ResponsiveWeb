import React from 'react'
import {ListContainer} from './index.style'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../../store'

@inject('store')
@observer
export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  addRes(addIndex){
    const {addBrowser}=this.store
    if(addBrowser){
      this.store.handleRes(addIndex,'add')
    }else{
      alert('please input value')
    }
  }
  showAddModal(btnIndex){
      this.store.changeStoreValue('addIndex',btnIndex)
      this.store.changeStoreValue('addModal',true)
  }
  render() {
    const {tabBody,addModal,addBrowser,addIndex,screenType}=this.store
    return (
      <ListContainer>
        {
         screenType!==0&&tabBody&&tabBody.map((item,index)=>(
            <div className="listSty" key={index}>
                <img src={item.img}/>
                <div className="listFlex">
                  <div className="up"> 
                    <i className="icon-desktop fonts"></i> 
                    <b>{item.desc}</b>
                    <p style={{background:item.status==='building'?'#ff9a2a':'#7fbc39'}}>{item.status}</p>
                    <i className="icon-info fonts"></i> 192.168.1.102
                    <i className="icon-folder fonts left"></i>/var/lib/cruise-agent
                  </div>
                  <div className="down">
                    <div>
                      <i className="icon-plus fonts add" onClick={()=>{this.showAddModal(index)}}></i>
                      {
                        item.browserInfo.map((o,i)=>(
                          <p 
                           key={i} 
                           onClick={()=>{this.store.handleRes(index,'del',i)}}>
                          {o}<i className="icon-trash fonts"></i></p>
                        ))
                      }
                    </div>
                    {
                      item.status==='building'&&(
                        <div className="right">
                          <i className="icon-deny fonts"></i> Deny
                        </div>
                      )
                    }
                    {
                      addIndex===index&&addModal&&(
                        <div>
                           <div className="triangle"></div>
                           <div className="addModal">
                              <i className="icon-close fonts" onClick={()=>{this.store.changeStoreValue('addModal',false)}}></i>
                              <p>Separate multiple resource name with commas</p>
                              <input 
                                value={addBrowser} 
                                placeholder='Input Value'
                                onChange={(e)=>{this.store.changeStoreValue('addBrowser',e.target.value)}}
                              />
                              <div className="addBtn">
                                <span onClick={()=>{this.addRes(index)}}>Add Resources</span>
                                <span className="cancel" onClick={()=>{this.store.changeStoreValue('addModal',false)}} >Cancel</span>
                              </div>
                           </div>
                        </div>
                      )
                    }
                    </div>
                </div>
               
            </div>
          ))
        }
        {
         screenType===0&&tabBody&&tabBody.map((item,index)=>(
            <div className="listSty" 
                  key={index} 
                 style={{borderLeft:item.status==='building'?'0.1067rem solid #ff9a2a':'0.1067rem solid #7fbc39'}}>
                <div className="listFlex">
                  <div className="up"> 
                    <i className="icon-desktop fonts"></i> 
                    <b>{item.desc}</b>
                  </div>
                  <div className="up">
                    <i className="icon-info fonts"></i> 192.168.1.102
                  </div>
                  <div className="up">
                     <i className="icon-folder fonts"></i>/var/lib/cruise-agent
                  </div>
                  <div className="down">
                    <div>
                      <i className="icon-plus fonts add" onClick={()=>{this.showAddModal(index)}}></i>
                      {
                        item.browserInfo.map((o,i)=>(
                          <p 
                           key={i} 
                           onClick={()=>{this.store.handleRes(index,'del',i)}}>
                          {o}<i className="icon-trash fonts"></i></p>
                        ))
                      }
                    </div>
                    {
                      item.status==='building'&&(
                        <div className="right">
                          <i className="icon-deny fonts"></i> Deny
                        </div>
                      )
                    }
                    {
                      addIndex===index&&addModal&&(
                        <div className="phoneAdd">
                          <div className="phoneModal">
                            <i className="icon-close fonts" onClick={()=>{this.store.changeStoreValue('addModal',false)}}></i>
                            <p>Separate multiple resource name with commas</p>
                            <input 
                              value={addBrowser} 
                              placeholder='Input Value'
                              onChange={(e)=>{this.store.changeStoreValue('addBrowser',e.target.value)}}
                            />
                            <div className="addBtn">
                              <p onClick={()=>{this.addRes(index)}}>Add Resources</p>
                              <p className="cancel" onClick={()=>{this.store.changeStoreValue('addModal',false)}} >Cancel</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    </div>
                </div>
            </div>
          ))
        }
      </ListContainer>
    )
  }
}
