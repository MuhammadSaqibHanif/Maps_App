/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import React from 'react'
import { Text, View,TouchableOpacity,ScrollView,TextInput,Picker,KeyboardAvoidingView} from 'react-native'
// Import { RTLView, RTLText } from react-native-rtl-layout
import {Header,Icon,Button,Avatar,Rating,ButtonGroup,CheckBox,SearchBar} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  
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
      <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'none'}  style={{ flex: 1,height:hp('90%') }}>
      <ScrollView style={{flex:1}}>
       <Header leftContainerStyle={{flexBasis:'10%',marginBottom:18}}  centerContainerStyle={{flexBasis:"70%",alignItems:"center"}} rightContainerStyle={{flexBasis:'20%'}}
      collapsable={true}
      centerComponent={{ text: 'Create maps', style: { color: 'black',fontSize:26,marginBottom:10,fontWeight:"bold"} }}
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
        <Text style={{marginLeft:5,fontWeight:'bold',marginTop:5,marginBottom:5,fontSize:20}}>Map Name:</Text>
      <KeyboardAvoidingView style={{alignItems:'center'}}>
        <TextInput style = {{  
          
          width:wp('90%'),
          height:40,
          borderColor: 'lightgray',
          borderWidth: 1,fontSize:18,borderRadius:8}}
          underlineColorAndroid = "transparent"
          placeholder = 'Used This Map? Leave a Review'
          placeholderTextColor = "lightgray"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}
          textAlignVertical='top'
          />
            </KeyboardAvoidingView>
            <Text style={{marginLeft:5,fontWeight:'bold',marginTop:5,marginBottom:5,fontSize:20}}>Map Description:</Text>
      <KeyboardAvoidingView style={{alignItems:'center'}}>
        <TextInput style = {{  
          
          width:wp('90%'),
          height:80,
          borderColor: 'lightgray',
          borderWidth: 1,fontSize:18,borderRadius:8}}
          underlineColorAndroid = "transparent"
          placeholder = 'Map Description'
          placeholderTextColor = "lightgray"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}
          textAlignVertical='top'
          />
            </KeyboardAvoidingView>
            <Text style={{marginLeft:5,fontWeight:'bold',marginTop:5,marginBottom:5,fontSize:20}}>Who can see your map?</Text>
          <KeyboardAvoidingView style={{borderColor:'lightgray',borderWidth:1,width:wp('52%'),paddingBottom:20,marginLeft:5,height:hp('6%')}}>
            <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Everyone" value="en" />
  <Picker.Item label="ME" value="me" />
</Picker>
</KeyboardAvoidingView>
       <Text style={{marginLeft:5,fontWeight:'bold',marginTop:5,marginBottom:5,fontSize:20}}>Price</Text>
       <Text style={{marginLeft:5,marginTop:5,marginBottom:5,fontSize:15}}>DO you want charge the customer acces your map</Text>
       <KeyboardAvoidingView>

       <TextInput style = {{  
         width:wp('40%'),
         height:40,
         borderColor: 'lightgray',
         borderWidth: 1,fontSize:18,borderRadius:8,marginLeft:5,fontWeight:'bold',marginTop:5,marginBottom:5}}
         underlineColorAndroid = "transparent"
         placeholder = 'Map Description'
         placeholderTextColor = "lightgray"
         autoCapitalize = "none"
         onChangeText = {this.handleEmail}
         textAlignVertical='top'
         value={'£'+this.state.search}
         />
         </KeyboardAvoidingView>
                     <Text style={{marginLeft:5,fontWeight:'bold',marginTop:5,marginBottom:5,fontSize:20}}>Boost</Text>
                     <Text style={{marginLeft:5,marginTop:5,marginBottom:5,fontSize:15}}>DO you want boost your map?</Text>
                     <KeyboardAvoidingView>

                     <TextInput style = {{  
                       
                       width:wp('40%'),
                       height:40,
                       borderColor: 'lightgray',
                       borderWidth: 1,fontSize:18,borderRadius:8,marginLeft:5,fontWeight:'bold',marginTop:5,marginBottom:5,}}
                       underlineColorAndroid = "transparent"
                       placeholder = 'Map Description'
                       placeholderTextColor = "lightgray"
                       autoCapitalize = "none"
                       onChangeText = {this.handleEmail}
                       textAlignVertical='top'
                       value={'£'+this.state.search}
                       />
                       </KeyboardAvoidingView>
                       <KeyboardAvoidingView>

                                   <Text style={{marginLeft:5,marginTop:5,marginBottom:5,fontSize:15}}>You Can Change Budget Setting from here</Text>
                                   <TouchableOpacity style={{backgroundColor:'#41BB94',width:wp('80%'),height:hp('6%'),alignItems:'center',justifyContent:'center',alignSelf:'center',borderRadius:8}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Save Changes</Text>
        </TouchableOpacity>
                       </KeyboardAvoidingView>
        
      </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

export default MyProfile