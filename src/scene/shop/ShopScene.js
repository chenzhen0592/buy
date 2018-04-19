
import React,{PureComponent} from 'react'

import {StyleSheet,View,Text,Image,Button,TouchableOpacity,FlatList,ScrollView} from 'react-native'
import NavigationItem from '../../widget/NavigationItem'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PageControl from 'react-native-page-control';
import screen from '../../common/screen'
import {Paragraph,Heading2,Heading3} from '../../widget/Text'
//import Separator from '../../widget/Sep'

type Props = {
    menuInfos: Array<Object>,
    onMenuSelected: Function,
}
type State = {
    dataList:Array,
    refreshing:boolean,
    currentPage: number
}

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

  constructor(props:Object){
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

        console.log(this.state.currentPage)
    }
  }
  onItemTap(){

  }
  renderTopEightItem(){
    let items=[];

    for(var i=0;i<2;i++){
      let rowItems=[];
      for(var j=0;j<4;j++){
        let item=(
          <TouchableOpacity key={j} style={{justifyContent:'center',alignItems:'center',width:screen.width/4,height:screen.height/6}}>
            <Image source={require('../../img/smallpic.png')} style={{width:screen.width/7,height:screen.width/7,borderRadius:screen.width/14}}></Image>
            <Paragraph>Best Seller</Paragraph>
          </TouchableOpacity>
        )
        rowItems.push(item)
      }
      let row=(
        <View style={{flexDirection:'row',width:screen.width}} key={i}>
          {rowItems}
        </View>
      )
      items.push(row)
    }
    return (
      <View style={{flexDirection:'row',flexWrap:'wrap',backgroundColor:'white'}}>
        {items}
      </View>
      )
  }

  renerTopScroll(){
    let pageCount=3;
    return (
      <View style={{backgroundColor:'white'}}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={(e)=>this.onScroll(e)}
              scrollEventThrottle={16}
              >
              <View style={styles.topImageContainer}>
                <View style={styles.itemView}>
                  <Image style={styles.image} source={require('../../img/car.png')}></Image>

                </View>
                <View style={styles.itemView}>
                  <Image style={styles.image} source={require('../../img/arrival.png')}></Image>
                </View>
                <View style={styles.itemView}>
                  <Image style={styles.image} source={require('../../img/seller.png')}></Image>
                </View>

              </View>
            </ScrollView>
            <PageControl
              style={styles.pageControl}
              numberOfPages={pageCount}
              currentPage={this.state.currentPage}
              hidesForSinglePage
              pageIndicatorTintColor='gray'
              currentPageIndicatorTintColor='white'
              indicatorSize={{width:8, height:8}}
              onPageIndicatorPress={this.onItemTap}
              >
            </PageControl>
      </View>
    )
  }

  renderDeals(){

    return (
      <View style={{flexDirection:'row',flexWrap:'wrap',backgroundColor:'white',width:screen.width,height:screen.height/4}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:screen.width,height:30}}>
            <Heading2>Flash Deals </Heading2>
            <Text style={{color:'#c47ed2',fontWeight:'bold'}}>07:31:53</Text>
        </View>

        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:screen.width/3}}>
          <Image source={require('../../img/smallpic.png')} style={{width:screen.width/4,height:100,margin:5}}></Image>
          <Heading2>S$ 69.0</Heading2>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:13,textDecorationLine:'line-through',textDecorationStyle: "solid",textDecorationColor: "#000"}}>S$ 81.59 </Text>
            <Text style={{color:'#e39b63',fontSize:13}}>15% OFF</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:screen.width/3}}>
          <Image source={require('../../img/smallpic.png')} style={{width:screen.width/4,height:100,margin:5}}></Image>
          <Heading2>S$ 69.0</Heading2>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:13,textDecorationLine:'line-through',textDecorationStyle: "solid",textDecorationColor: "#000"}}>S$ 81.59 </Text>
            <Text style={{color:'#e39b63',fontSize:13}}>15% OFF</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:screen.width/3}}>
          <Image source={require('../../img/smallpic.png')} style={{width:screen.width/4,height:100,margin:5}}></Image>
          <Heading2>S$ 69.0</Heading2>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:13,textDecorationLine:'line-through',textDecorationStyle: "solid",textDecorationColor: "#000"}}>S$ 81.59 </Text>
            <Text style={{color:'#e39b63',fontSize:13}}>15% OFF</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  //renderHeader(){}
  renderHeader=()=>{

    return (
      <View>
        {this.renerTopScroll()}
        {this.renderTopEightItem()}
        <View style={{width:screen.width,
        height:screen.onePixel*20,
        backgroundColor:'#e0e0e0'}}>

        </View>
        {this.renderDeals()}
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
  },
  image:{
    width:screen.width,
    height:screen.height/5
  },
  pageControl:{
    margin:10,
    marginTop:-10
  }
})

export default ShopScene
