
import React,{PureComponent} from 'react'

import {StyleSheet,View,Text,Button,TouchableOpacity,FlatList,ScrollView} from 'react-native'
import NavigationItem from '../../widget/NavigationItem'
import Ionicons from 'react-native-vector-icons/Ionicons'
import screen from '../../common/screen'
import {Paragraph} from '../../widget/Text'


class ShopScene extends PureComponent<Props, State>{
  static navigationOptions=({navigation}:any)=>({
    headerLeft:(
      <TouchableOpacity style={styles.searchBar}>
          <Ionicons name={'ios-search-outline'} size={20} style={styles.searchIcon}></Ionicons>
          <Paragraph>Search or Product URL</Paragraph>
      </TouchableOpacity>
    ),
    headerRight:(
      <NavigationItem iconName={'ios-notifications-outline'} iconSize={27} iconStyle={styles.headerRight}
        onPress={()=>{

        }}
        ></NavigationItem>
    ),
    headerStyle: {backgroundColor: '#06C1AE'},
  })
  constructor(props:Props){
    super(props)

    this.state={
      dataList:[],
      refreshing:false,
      currentPage: 0
    }
  }
  keyExtractor(item: Object, index: number){
    return item.id;
  }
  renderItem(){
    //re
  }
  requestData(){
    //return []
  }
  onScroll(e){
    let x = e.nativeEvent.contentOffset.x
    let currentPage = Math.round(x / screen.width)

    console.log('onScroll  ' + e.nativeEvent.contentOffset.x + '  page ' + currentPage + '  current ' + this.state.currentPage)
    if (this.state.currentPage != currentPage) {
        this.setState({
            currentPage: currentPage
        })
    }
  }
  renderHeader(){
    return (
        <View>
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(e)=>this.onScroll}
                //onScroll={(e) => this.onScroll(e)}
                >
                <View style={styles.topImageContainer}>
                  <View style={styles.itemView}>
                    <Ionicons size={50} name={'ios-notifications-outline'}></Ionicons>
                  </View>
                  <View style={styles.itemView}>
                    <Ionicons size={50} name={'ios-search-outline'}></Ionicons>
                  </View>

                </View>
              </ScrollView>

        </View>
    )
  }
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.dataList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onRefresh={this.requestData}
          refreshing={this.state.refreshing}

          ListHeaderComponent={this.renderHeader}
          >

        </FlatList>
      </View>
    )
  }

}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f3f3f3'
  },
  searchBar:{
    width: screen.width * 0.8,
    height:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:5,
    marginLeft:8,
  },
  searchIcon:{
    margin:5
  },
  headerRight:{
    margin:8
  },
  topImageContainer:{
    //flex:1,
    flexDirection:'row',
    //justifyContent:'center',
    //alignItems:'center',
  },
  itemView:{
    width:screen.width,
    flexDirection:'row',
    flexWrap:'wrap'
  }
})

export default ShopScene
