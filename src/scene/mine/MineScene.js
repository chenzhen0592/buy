
import React,{PureComponent} from 'react'

import {View,Text} from 'react-native'


class MineScene extends PureComponent<Props, State>{
  constructor(props:Props){
    super(props)

  }

  render(){
    return(
      <View>
        <Text>Mine</Text>
      </View>
    )
  }
}

export default MineScene
