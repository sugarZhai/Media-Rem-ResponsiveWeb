import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../store'
import {isPC} from '../utils'
const BannerContainer = styled.div`
background:#f3f3f3;
font-size:0;
.status{
  width:100%;
  display:flex;
  justify-content:space-between;
  >div{
    flex:0 0 29%;
    height:2.6667rem;
    margin:0 10px 10px 0;
    padding:0 10px;
  }
  .count{
    height:2.6667rem;
    width:32%;
    background:white;
    display:flex;
    justify-content:center;
    >div{
      font-size:12px;
      color:#464646;
      padding:10px 6px 0 6px;
      >p{
        padding-bottom:30px;
      }
      >b{
        font-size:20px;
      }
    }
  }
  .idle{
    background:#ff9A2A;
    position:relative;
    color:white;
    text-align:center;
    >b{
      font-size:0.48rem;
      position:absolute;
      top:0.4rem;
      left:0.32rem;
    }
    >div{
       margin:auto;
       width:2.9333rem;
       height:2.9333rem;
      >i{
        opacity:0.2;
        font-size:3.2rem;
      }
    }
     >p{
      position:absolute;
      bottom:0.0533rem;
      right:0.4rem;
      font-size:1.28rem;
    }
  }
  .build{
    >div{
      display:inline-block;
      margin:auto;
      width:2.9333rem;
      height:2.9333rem;
      animation:myFirst 2s;
	    -webkit-animation:myFirst 2s linear infinite;/* Safari and Chrome */
      border-radius:2.6667rem;
      >i{
        display:inline-block;
        opacity:0.2;
        font-size:120px;
        border-radius:2.6667rem;
        width:2.9333rem;
        height:2.9333rem;
        i::before{
          display:inline-block;
          width:2.9333rem;
          height:2.9333rem;
        }
     }
    }
    @keyframes myFirst
    {
      from {
         transform:rotate(0deg);
        -ms-transform:rotate(0deg);
        -webkit-transform:rotate(0deg);
      }
      to {
        transform:rotate(360deg);
        -ms-transform:rotate(360deg);
        -webkit-transform:rotate(360deg);
      }
    }

    @-webkit-keyframes myFirst 
    {
      from {
         transform:rotate(0deg);
        -ms-transform:rotate(0deg);
        -webkit-transform:rotate(0deg);
      }
      to {
        transform:rotate(360deg);
        -ms-transform:rotate(360deg);
        -webkit-transform:rotate(360deg);
      }
    }
  }
}
 
`
@inject('store')
@observer
class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  componentDidMount() {
    console.log('this.props=====>',this.props)
  }
  render() {
    const {building,idle,all,virtual,physical}=this.store
    return (
      <BannerContainer>
       <div className="status" 
       style={{flexWrap:isPC()?"nowrap":'wrap'}}
       >
           <div className="idle build">
              <b>Building</b>
               <div><i className="icon-cog fonts"></i></div>
               <p>{building}</p>
           </div>
           <div className="idle">
               <b>Idle</b>
               <div><i className="icon-coffee fonts"></i></div>
               <p>{idle}</p>
           </div>
           <div className="count">
              <div><p>ALL</p><b>{all}</b></div>
              <div><p>PHYSICAL</p><b>{physical}</b></div>
              <div><p>VIRTUAL</p><b>{virtual}</b></div>
           </div>
       </div>
      </BannerContainer>
    )
  }
}

export default Banner
