
import React,{PureComponent} from 'react'

import {View,Text} from 'react-native'


class CategoryScene extends PureComponent<Props, State>{
  constructor(props:Props){
    super(props)

  }

  render(){
    return(
      <View>
        <Text>Category</Text>
      </View>
    )
  }
}

export default CategoryScene
