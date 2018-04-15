
import React,{PureComponent} from 'react'

import {View,Text} from 'react-native'


class ShoppingCartScene extends PureComponent<Props, State>{
  constructor(props:Props){
    super(props)

  }

  render(){
    return(
      <View>
        <Text>ShoppingCart</Text>
      </View>
    )
  }
}

export default ShoppingCartScene
