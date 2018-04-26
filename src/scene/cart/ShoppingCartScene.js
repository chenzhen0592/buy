
import React,{PureComponent} from 'react'

import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import color from '../../widget/Color'
import {Heading2} from '../../widget/Text'
import screen from '../../common/screen'
import CheckBox from '../../widget/CheckBox'


class ShoppingCartScene extends PureComponent<Props, State>{

  static navigationOptions=({navigation}:any)=>({
      headerTitle:(
        <View style={{borderRadius:5,borderColor:'#ffffff',borderWidth:1}}>
          <Heading2 style={{color:'#ffffff',margin:5}}>Shopping Cart</Heading2>
        </View>
      ),
      headerRight:(
        <TouchableOpacity style={styles.editContainer} >
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      ),
      headerStyle: {backgroundColor: color.navHeader},
  })
  constructor(props:Props){
    super(props)

  }
  componentWillUnmount(){

  }
  renderEmptyCart(){
    return(
      <View style={styles.emptyCart}>
        <View style={styles.feeLine}>
          <Text style={{color:'#ffffff',marginLeft:8}}>
            International Shipping fee 29 per checkout
          </Text>
        </View>
      </View>
    )
  }
  renderBottom(){
    return (
      <View style={styles.bottom}>

        <View style={styles.summaryprice}>
          <View style={styles.selector}>
            <CheckBox></CheckBox>
          </View>
          <View style={styles.summarypriceItem}>
            <Text style={{color:'red'}}>S$0.00</Text>
            <Text >Items</Text>
          </View>
          <Text style={{marginTop:10}}> + </Text>
          <View style={styles.summarypriceItem}>
            <Text style={{color:'red'}}>0.00</Text>
            <Text >Shipping</Text>
          </View>
        </View>
      <TouchableOpacity style={styles.next}>
        <Text style={{color:'#ffffff',fontSize:18}}>Next</Text>
      </TouchableOpacity>
      </View>
    )
  }
  render(){
    return(
      <View style={styles.cartContainer}>

        {this.renderEmptyCart()}
        {this.renderBottom()}
      </View>
    )
  }
}

const styles=StyleSheet.create({
  editContainer:{
    margin:10
  },
  edit:{
    color:'#ffffff',
    fontSize:18
  },
  editDisable:{
    color:'#e0e0e0',
  },
  feeLine:{
    backgroundColor:'#0c0c0c',
    width:screen.width,
    height:screen.onePixel*60,
    justifyContent:'center',
  },
  cartContainer:{
    //height:screen.height,
    flexDirection:'column',
    flex:1
  },
  emptyCart:{
    flex:1
  },
  bottom:{
    backgroundColor:'#ffffff',
    justifyContent: 'space-between',
    width:screen.width,
    height:60,
    flexDirection:'row'
    //marginBottom:100,
  },
  selector:{
    margin:10,
    marginTop:25,
    alignItems:'center',
  },
  summaryprice:{
    flexDirection:'row',
    width:screen.width/4,
  },
  summarypriceItem:{
    alignItems:'center',
    justifyContent:'center'
  },
  next:{
    width:100,
    backgroundColor:'#e0e0e0',
    alignItems:'center',
    justifyContent:'center',
  }
})


export default ShoppingCartScene
