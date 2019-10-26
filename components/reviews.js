/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/

import React from 'react'
import { Text, View,FlatList,Image,TouchableOpacity,ScrollView,Dimensions,TextInput} from 'react-native'
import {Header,Icon,Button,Rating,Input} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SlidingUpPanel from 'rn-sliding-up-panel'
const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  
  },
  panel: {
    flex: 1,
    backgroundColor: 'red',
    position: 'relative'
  },
  panelHeader: {
    height: 120,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1
  }
}

class ReviewList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search:'',
      upCircle:true,
      downcircle:false
    }
  }
  taponUpDown =()=>{
    this.setState({
      upCircle:!this.state.upCircle,
      downcircle:!this.state.downcircle
    })
  }
  render() {
    return (
      <View style={styles.container}>
              <Header leftContainerStyle={{flexBasis:'10%',marginBottom:18}}  centerContainerStyle={{flexBasis:"80%",alignItems:"center"}} rightContainerStyle={{flexBasis:'20%'}}
      collapsable={true}
      leftComponent={
        <Icon  
        name="ios-menu"
        type="ionicon"
        color="white"
        size={Platform.OS==='ios'?30:40}
         onPress={(e)=>{this.props.navigation.toggleDrawer(e)}}
        />
          }
          centerComponent={
            <Input 
            onChangeText={text=>this.setState({searchText:text})}
            returnKeyType='search'
            onSubmitEditing={this.handleSearch}
           leftIcon={
             <Icon 
             name='ios-search'
                     type='ionicon'
                     color='gray'
             />
           }
             placeholder={'Search Reviews'}
             shake={true}
             inputContainerStyle={{width:"100%",backgroundColor:'white',borderRadius:12,borderBottomColor:'white'}}
             containerStyle={{height:45,flex:1,alignItems:'center',alignSelf:"center"}}
             rightIcon={
               <Icon
               name='clear'
               type='material'
               color='black'
               />
             }
           />
          }
        
       containerStyle={{backgroundColor:'#311627',opacity:0.8,alignItems:"center"}}
       />
        {/* <Button title='taha' buttonStyle={{width:wp('30%'),position:'absolute',top:190}} onPress={() => this._panel.show()}/> */}
     {this.state.upCircle &&
    <Image source={{uri:'https://staticmapmaker.com/img/google@2x.png'}} style={{width:400,height:230}} />
    }   
      <View style={{flexDirection:'row'}}>
      <Image source={{uri:'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'}} style={{width:50,height:40}} />
<Text style={{alignSelf:'center',marginLeft:10,fontSize:15,fontWeight:'bold'}}>John Doe</Text>
 </View>
        <SlidingUpPanel
        friction={0.2}
        allowDragging={false}
          ref={c => (this._panel = c)}
          
          draggableRange={{top: height / 1.23, bottom:350}}
          animatedValue={this._draggedValue}
        showBackdrop={false}
          > 
          <View style={{flex:1,height:'90%',paddingBottom:30}}>
          <ScrollView  style={{paddingBottom:30}} scrollEnabled={this.state.downcircle} ref='_scrollView'>
            <Text style={{alignSelf:'center',marginTop:40,fontSize:30}}>Vegan</Text>
            <Text style={{alignSelf:'center',fontSize:15,marginRight:10,marginLeft:10}}>
      text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Text>
   <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
     <View style={{flexDirection:'row'}}>
     <Icon containerStyle={{alignItems:'flex-start'}}
         name="map-marker-radius"
         type="material-community"
         color="black"
         size={50}
      />
      <View style={{alignSelf:'center'}}>
        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>48 pointers</Text>
        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>36 currently open</Text>
      </View>
     </View>
     <View style={{flexDirection:'row'}}>
     <Icon containerStyle={{alignSelf:'flex-start'}}
         name="hearto"
         type="antdesign"
         color="black"
         size={35}
      />
              <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10,alignSelf:'center'}}>232 saves</Text>

     </View>
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-around'}}>
     
     <View style={{flexDirection:'row',marginTop:10}}>
     <Rating
  type='star'
  ratingCount={5}
  imageSize={20}

  onFinishRating={this.ratingCompleted}
/>
              <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10,alignSelf:'flex-start'}}>232 reviews</Text>

     </View>
     <View style={{flexDirection:'row'}}>
     <Icon 
         name="clockcircleo"
         type="antdesign"
         color="black"
         size={35}
      />
      <View style={{alignSelf:'center'}}>
        <Text style={{fontSize:15,marginLeft:10}}>Last updated:</Text>
        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>12 Feb 2019</Text>
      </View> 
     </View>
    
   </View>
   <Text style={{textAlign:'center',fontSize:30}}>Reviews</Text>
   <FlatList
                  data={['efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe']}
                  renderItem={({ title })=> {
  return (
    <View style={{flexDirection:'row',marginLeft:5,marginRight:10}}>
    <Image source={{uri:'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'}} style={{width:60,height:80}} />
      <View style={{marginLeft:5}}>
        <Text style={{fontSize:20}}>
          John Doe
        </Text>
        <Rating
   type='star'
   ratingCount={5}
   imageSize={15}
  style={{alignItems:'flex-start'}}
   onFinishRating={this.ratingCompleted}
 />
        <Text style={{width:wp('80%')}}>
         gfsgsgsgfhfdhjgfjfgjfgjfghgfhdfghdfgdsfgdsfg
         gfsgsgsgfhfdhjgfjfgjfgjfghgfhdfghdfgdsfgdsfg
         gfsgsgsgfhfdhjgfjfgjfgjfghgfhdfghdfgdsfgdsfg
          </Text>
      </View>
    </View>
  );
}

                  }
                  />
 
   <View style={{flexDirection:'row',marginLeft:5,marginRight:10,marginTop:10}}>
   <Image source={{uri:'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'}} style={{width:60,height:80}} />
     <View style={{marginLeft:5}}>
      
       <Rating
  type='star'
  ratingCount={5}
  imageSize={15}
 style={{alignItems:'flex-start'}}
  onFinishRating={this.ratingCompleted}
/>
<TextInput style = {{  

  width:wp('80%'),
      height:80,
      borderColor: 'lightgray',
      borderWidth: 1,fontSize:18,borderRadius:8}}
               underlineColorAndroid = "transparent"
               placeholder = 'Used This Map? Leave a Review'
               placeholderTextColor = "lightgray"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}
              textAlignVertical='top'
              />
               <Button title='Add a Comment' buttonStyle={{width:wp('35%'),marginTop:10,marginRight:5,backgroundColor:'#41BB94'}}/>
     </View>
   </View>
  
       <View style={{height:80}} />

          </ScrollView>
          </View>
        </SlidingUpPanel>
        {this.state.upCircle &&
         <Icon  containerStyle={{width:wp('30%'),position:'absolute',top:307,left:130}}
         name="up"
         type="antdesign"
         color="black"
         size={40}
         onPress={() =>{
          this.taponUpDown()

         this._panel.show()
         }
        }

         />
        }
       
        {/* <Button title='taha' buttonStyle={{width:wp('30%'),position:'absolute',top:250,left:130}} onPress={() =>{ this._panel.show()
        }  
      }/> */}
        {/* <Button title='taha' buttonStyle={{width:wp('30%'),position:'absolute',left:130}} onPress={() => this._panel.hide()}/> */}
      {this.state.downcircle && 
        <Icon  containerStyle={{width:wp('30%'),position:'absolute',top:83,left:130}}
        name="down"
        type="antdesign"
        color="black"
        size={40}
        onPress={() => {
          this._panel.hide()
          this.taponUpDown()
          this.refs._scrollView.scrollTo(0)
        }
        }
        />
      }
      
      </View>
    )
  }
}

export default ReviewList