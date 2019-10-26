/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import React from 'react'
import { Text, View, TouchableHighlight,FlatList,Image,TouchableOpacity,ScrollView,Dimensions,TextInput} from 'react-native'
// Import { RTLView, RTLText } from react-native-rtl-layout
import {Header,Icon,Button,Rating,SearchBar,Input} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  
  }
}

class MapCreateFirstScreen extends React.Component {
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
        <Header leftContainerStyle={{flexBasis:'10%',marginBottom:18}}  centerContainerStyle={{flexBasis:"70%",alignItems:"center"}} rightContainerStyle={{flexBasis:'20%'}}
      collapsable={true}
      centerComponent={{ text: 'Places', style: { color: 'black',fontSize:26,marginBottom:10,fontWeight:"bold"} }}
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
        <Text style={{fontSize:30,fontWeight:'bold',marginTop:10,marginLeft:15}}>Add to Existing map</Text>

    <SearchBar
                    containerStyle={{width:wp('90%'),height:hp('8%'),marginTop:10,marginLeft:15,backgroundColor:'white',borderColor:'white',borderBottomWidth:0,borderTopWidth:0}}
                    inputContainerStyle={{width:wp('80%'),height:hp('5%'),marginBottom:15,marginLeft:15,backgroundColor:'white'}}
                    lightTheme={true}
                    placeholder="Add to an existing map"
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
     <Button title='Add to Map' buttonStyle={{backgroundColor:'#41BB94'}}></Button>
    </View>
  );
}

                  }
                  />
      </View>
    )
  }
}

export default MapCreateFirstScreen