import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../store'
import Banner from './Banner'
import Table from './Table'
// import {isPC,navInfo,historyInfo} from '../utils'
const DetContainer = styled.div`
font-size:0;
background:#f3f3f3;
padding:0.4rem 0.5333rem;
width:750px;
overflow:hidden;
`
@inject('store')
@observer
class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  componentDidMount() {
    console.log('this.props=====>',this.props)
  }
  render() {
    const {navIndex,hisIndex,showNav}=this.store
    return (
      <DetContainer>
        <Banner/>
        <Table/>
      </DetContainer>
    )
  }
}

export default Detail
