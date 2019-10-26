import React from 'react'
import { Text, View, TouchableHighlight,FlatList,Image,TouchableOpacity,ScrollView,Dimensions,TextInput} from 'react-native'
// Import { RTLView, RTLText } from react-native-rtl-layout
import {Header,Icon,Button,Avatar,Rating,ButtonGroup,CheckBox,SearchBar} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SlidingUpPanel from 'rn-sliding-up-panel'
const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  
  }
}

class MyProfile extends React.Component {
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
              {/* <Header  
                    rightComponent={
                      <Icon  containerStyle={{marginBottom:10,marginLeft:10}}
                      name="cross"
                      type="entypo"
                      color="black"
                      size={35}
                      containerStyle={{marginBottom:30,marginleft:30}}
                      />}
                centerComponent={<Text style={{fontSize:30,marginBottom:25}}>Bookworm Suzi</Text>}
                  containerStyle={{backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1,
                  height: Platform.OS === 'ios' ? 70 :  70 - 10}}
     /> */}
      <Header leftContainerStyle={{flexBasis:'10%',marginBottom:18}}  centerContainerStyle={{flexBasis:"70%",alignItems:"center"}} rightContainerStyle={{flexBasis:'20%'}}
      collapsable={true}
      centerComponent={{ text: 'Bookworm Suzi', style: { color: 'black',fontSize:26,marginBottom:10,fontWeight:"bold"} }}
      leftComponent={
        <Icon  
        name="ios-menu"
        type="ionicon"
        color="black"
        size={Platform.OS==='ios'?30:40}
         onPress={(e)=>{this.props.navigation.toggleDrawer(e)}}
        />
          }
        
       containerStyle={{backgroundColor:'#41BB94',opacity:0.8,alignItems:"center"}}
       />
     <View style={{flexDirection:'row',width:wp('50%'),alignItems:'center',marginTop:10}}>
       <View>
     <Image  source={{uri:'http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'}} style={{width:130,height:150,marginLeft:20}} />
     </View>
     <View style={{marginLeft:10}}>
     <Text style={{fontSize:30,fontWeight:'bold'}}>
       About Me
     </Text>
     <Text>I am the ethusiat person to tell the way to the tourist, I am glad by providing this service
     I am the ethusiat person to tell the way to the tourist, I am glad by providing this service
     </Text>
     </View>
     </View>
    <View style={{backgroundColor:'#f6e9e0',width:wp('100%'),height:hp('15%'),marginTop:5,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
   <View>
   <Icon containerStyle={{alignItems:'flex-start'}}
         name="map-marker-radius"
         type="material-community"
         color="black"
         size={50}
      />
      <Text style={{fontSize:18}}>18 maps</Text>
   </View>
   <View>
   <Icon containerStyle={{alignItems:'flex-start'}}
         name="home"
         type="material-community"
         color="black"
         size={50}
      />
      <Text style={{fontSize:18}}>England</Text>
   </View>
   <View>
   <Rating
  type='star'
  ratingCount={5}
  imageSize={20}
  ratingColor='black'
  ratingBackgroundColor='#f6e9e0'
style={{alignSelf:'flex-start',marginTop:20}}
  onFinishRating={this.ratingCompleted}
/>
      <Text style={{marginTop:10,fontSize:18}}>4.5 out of 5 reviews</Text>
      <Text style={{fontSize:18}}>170 reviews</Text>

   </View>
  
    </View>
    <Text style={{marginLeft:10,marginTop:5,fontSize:25,fontWeight:'bold'}}>Bookworm Maps</Text>
    <SearchBar
                    containerStyle={{width:wp('90%'),height:hp('8%'),marginTop:10,marginLeft:15,backgroundColor:'white',borderColor:'white',borderBottomWidth:0,borderTopWidth:0}}
                    inputContainerStyle={{width:wp('80%'),height:hp('5%'),marginBottom:15,marginLeft:15,backgroundColor:'white'}}
                    lightTheme={true}
                    placeholder="Search By Map Name"
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    inputStyle={{backgroundColor:'lightgray',borderRadius:8}}
                  />
           
     <FlatList
                  data={['efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe','efwew','ewfw','ewfewfwe']}
                  horizontal={true}
                  renderItem={({ title })=> {
  return (
    <View style={{marginLeft:5,marginRight:10}}>
            <Image source={{uri:'https://staticmapmaker.com/img/google@2x.png'}} style={{width:150,height:130}} />
                    <Text style={{marginLeft:10,marginTop:5,fontSize:20,fontWeight:'bold'}}>Best Food</Text>
                    <View style={{flexDirection:'row'}}>
                    <Rating
  type='star'
  ratingCount={5}
  imageSize={15}
  ratingColor='black'
  ratingBackgroundColor='#f6e9e0'
style={{alignSelf:'flex-start',marginTop:5}}
  onFinishRating={this.ratingCompleted}
/>
<Text style={{fontSize:18,marginLeft:10}}>17 reviews</Text>

                    </View>
                    <View style={{flexDirection:'row'}}>
     <Icon containerStyle={{alignItems:'flex-start'}}
         name="map-marker-radius"
         type="material-community"
         color="black"
         size={40}
      />
      <View style={{alignSelf:'center'}}>
        <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>48 pointers</Text>
      </View>
     </View>
    </View>
  );
}

                  }
                  />
      </View>
    )
  }
}

export default MyProfile