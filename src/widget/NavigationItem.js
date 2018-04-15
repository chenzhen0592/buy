

import React,{PureComponent} from 'react'
import {StyleSheet,TouchableOpacity,Image,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class NavigationItem extends PureComponent<{}>{
  render(){
    let icon=this.props.iconName &&
      //<Image style={[styles.icon,this.props.iconStyle]} source={this.props.icon}></Image>
      <Ionicons name={this.props.iconName} size={this.props.iconSize?this.props.iconSize:25} style={[styles.icon,this.props.iconStyle]}></Ionicons>

    let title=this.props.title &&
      <Text style={[style.title,this.props.titleStyle]} >this.props.title</Text>

    return(
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        {icon}
        {title}
      </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  icon:{
    height:27,
    width:27,
    margin:8
  },
  title: {
    fontSize:15,
    color:'#333333',
    margin:8
  }
})

export default NavigationItem
