
import React,{PureComponent} from 'react'

import {View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {TabNavigator,StackNavigator} from 'react-navigation'
import ShopScene from './shop/ShopScene'
import MineScene from './mine/MineScene'
import CategoryScene from './category/CategoryScene'
import ShoppingCartScene from './cart/ShoppingCartScene'

const ShopStack=StackNavigator({
  Shop:{screen:ShopScene},
})
const CategoryStack=StackNavigator({
  Categroy:{screen:CategoryScene}
})

const ShoppingCartStack=StackNavigator({
  Cart:{screen:ShoppingCartScene},
})
const MineStack=StackNavigator({
  Mine:{screen:MineScene}
})

export default TabNavigator({
  Shop:{screen:ShopStack},
  Category:{screen:CategoryStack},
  Cart:{screen:ShoppingCartStack},
  Mine:{screen:MineStack}
},
{
  navigationOptions:({navigation})=>({
    tabBarIcon:({focused,tintColor})=>{
      const {routeName}=navigation.state;
      let iconName;
      if(routeName=="Shop"){
        iconName=`ios-home${focused?'':'-outline'}`;
      }else if(routeName=="Category"){
        iconName=`ios-keypad${focused?'':'-outline'}`;
      }else if(routeName=="Cart"){
        iconName=`ios-cart${focused?'':'-outline'}`;
      }else if(routeName=="Mine"){
        iconName=`ios-person${focused?'':'-outline'}`;
      }
      //iconName=`ios-options${focused?'':'-outline'}`;
      return <Ionicons name={iconName} size={25} color={tintColor}></Ionicons>
    }
  })
}
)
