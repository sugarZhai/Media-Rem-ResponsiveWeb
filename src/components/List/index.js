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
  render() {
    return (
      <ListContainer>
         <div>1212112</div>
      </ListContainer>
    )
  }
}
