import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, Text, Modal, Button, TouchableOpacity, Alert } from 'react-native';
 
export default class ModalDelete extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = { 
        
        Alert_Visibility: false 
    };
 
  }
 
  Show_Custom_Alert(visible) {
 
    this.setState({Alert_Visibility: visible});
    
  }

  ok_Button=()=>{

    Alert.alert("OK Button Clicked.");

  }
 
 render() {
     
   return (
 
      <View style={styles.MainContainer}>
 
        <Modal
 
          visible={this.state.Alert_Visibility}

          transparent={true}
          backdropColor="black"
 
          animationType={"fade"}
 
          onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >
 
 
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
 
 
                <View style={styles.Alert_Main_View}>
 
 
                    <Text style={styles.Alert_Title}>Delete <Text style={{color:'green',fontWeight:'bold'}}>'Gluten Free Launched Spot'</Text>?</Text>


                    <View style={{ width: '100%', height: 2}} />


                    <Text style={styles.Alert_Message}> Are You Sure you want to delete your map </Text>
                    <Text  style={styles.Alert_Message}> You will be no longer be able to access oir edit your map. Any one who has saved or purchased your map will will still be able to access or achieved version of this map</Text>    

                    <View style={{ width: '100%', height: 1, backgroundColor: 'black'}} />


                    <View style={{flexDirection: 'row', height: '14%'}}>

                        <TouchableOpacity 
                            style={styles.buttonStyle}
                            onPress={this.ok_Button} 
                            activeOpacity={0.7} 
                             >
    
                            <Text style={styles.TextStyle}> No, Cancel </Text>
                
                        </TouchableOpacity>

                        <View style={{ width: 1, height: '100%', backgroundColor: 'black'}} />

                        <TouchableOpacity 
                            style={styles.buttonStyle} 
                            onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                            activeOpacity={0.7} 
                            >
                            <Text style={styles.TextStyle}> Yes Delete </Text>                
                        </TouchableOpacity>
                    </View>
                </View>
 
            </View>
 
 
        </Modal>
 
        {/* <Button onPress={() => { this.Show_Custom_Alert(true) }} title="Click Here To Show Custom Alert Dialog" /> */}
        <Text style={{borderBottomWidth:1,marginLeft:'auto',marginRight:'auto',marginTop:20,fontSize:18,color:'#736F6E'}}onPress={() => { this.Show_Custom_Alert(true) }}>Delete Your Map</Text>  
 
      </View>
 
           
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
    
 flex:1,
 justifyContent: 'center',
 alignItems: 'center',
 marginTop: (Platform.OS == 'ios') ? 20 : 0,
//  borderWidth:2
},
 
Alert_Main_View:{
 
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : "white", 
  height: 380 ,
  width: '90%',
  borderWidth: 0.5,
//   borderColor: '#fff',
  borderRadius:7,
 
},
 
Alert_Title:{
 
  fontSize: 20, 
  color: "black",
  textAlign: 'center',
  padding: 10,
  fontWeight:'bold'
//   height: '28%'
 
},

Alert_Message:{
 
    fontSize: 22, 
    color: "black",
    textAlign: 'center',
    padding: 10,
    // height: '42%'
   
  },

buttonStyle: {
    
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'yellow'

},
   
TextStyle:{
    color:'black',
    textAlign:'center',
    fontSize: 22,
    marginTop: -5,
    fontWeight:'bold'
    // backgroundColor:'red'
}
 
});