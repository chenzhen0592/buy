
import React,{PureComponent} from 'react'
import {TouchableOpacity,StyleSheet,Image} from 'react-native'

let check=require('../img/check.png')
let checked=require('../img/checked.png')

export default class CheckBox extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      isCheck:this.props.isCheck|| false
    }
  }
  click(){
    this.setState({
      isCheck:!this.state.isCheck
    })
  }
  render(){
    return (
      <TouchableOpacity onPress={()=>this.click()}>
        <Image source={this.state.isCheck?checked:check} style={styles.image}></Image>
      </TouchableOpacity>
    )
  }
}

var styles=StyleSheet.create({
  image:{
    marginLeft:5,
    height:15,
    width:15
  }
})
