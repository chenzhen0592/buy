
import React,{PureComponent} from 'react'
import {StyleSheet,View} from 'react-native'
import screen from '../../common/screen'

class Separator extends PureComponent<{}>{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <View style={[styles.line,this.props.style]}>

      </View>
    )
  }
}

var styles=StyleSheet.create({
  line:{
    width:screen.width,
    height:screen.onePixel,
    backgroundColor:'#e0e0e0',
  }
})

export default Separator
