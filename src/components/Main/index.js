import React from 'react'
import {MainContainer} from './index.style'
import { inject, observer } from 'mobx-react'
import { initializeStore } from '../../store'
import Mask from '../Mask'
import Tab from '../Tab'
import List from '../List'
@inject('store')
@observer
export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.store = initializeStore()
  }
  render() {
    return (
      <MainContainer>
        <Mask/>
        <Tab/>
        <List/>
      </MainContainer>
    )
  }
}
