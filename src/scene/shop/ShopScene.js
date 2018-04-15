
import React,{PureComponent} from 'react'

import {View,Text,Button} from 'react-native'


class ShopScene extends PureComponent<Props, State>{
  constructor(props:Props){
    super(props)

  }

  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Buy</Text>
        <Button title="Go to Mine"
          onPress={()=>{
            this.props.navigation.navigate('Mine')
          }}
          ></Button>
          <Button title="Go to ShoppingCart"
            onPress={()=>{this.props.navigation.navigate('ShoppingCart')}}></Button>
      </View>
    )
  }
}

export default ShopScene
