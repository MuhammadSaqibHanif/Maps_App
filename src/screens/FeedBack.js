import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon, ListItem, List, Left, Right } from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import {Textarea,Button} from 'native-base';

class FeedBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   map_update: false
      given: false,
      recieved: false,
      btn:false,
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    const { map_update } = this.state;
    const { rating } = this.props;
    console.log("map_update >>>", map_update);

    return (
      <View>
        {/* Header */}
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            marginBottom: 10,
            marginTop: 10
          }}
        >
          <HeaderITI
            first_icon_path={{}}
            first_icon_style={{ width: 21, height: 21 }}
            first_icon_function={() => true}
            middle_text="How are you doing ?"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}
          <ScrollView>
            <View style={{marginLeft:'5%',width:"90%",marginTop:20}}>
            <Text style={{textAlign:'center'}}>Many languages do not use articles (a, an, and the), or if they do exist, the way they are used may be different than in English. Multilingual writers often find article usage
            </Text>

            {this.state.btn == false &&
            <View>
              <Textarea rowSpan={5} bordered onKeyPress={()=>this.setState({given: true})} style={{marginTop:30}}/>
              {this.state.given == true
               ? <Button style={{backgroundColor:"green",width:"50%",marginTop:10}} onPress={()=>this.setState({recieved: true, btn: true})}>
                <Text style={{marginLeft:'auto',marginRight:'auto',fontSize:16}}>Enter Your FeedBack</Text>
                </Button>
               : <Button style={{backgroundColor:"lightgreen",width:"50%",marginTop:10}}>
                <Text style={{marginLeft:'auto',marginRight:'auto',fontSize:16}}>Enter Your FeedBack</Text>
               </Button>
              }
              </View>
           
            }

            {this.state.btn == true &&
            <View style={{marginTop:50}}>
            <Text style={{marginLeft:"auto",marginRight:"auto", fontWeight:'bold',fontSize:18}}>Thank You for your FeedBack</Text>
            <Text style={{marginLeft:"auto",marginRight:"auto"}}>Return to <Text style={{color:'green',fontWeight:'bold'}}>My Account</Text></Text>
          </View>
            }

            <Text style={{marginTop:30,textAlign:'center'}}>Many languages do not use articles (a, an, and the), or if they do exist, the way they are used may be different than in English. Multilingual writers often find article usage to be one of the most difficult concepts to learn. 
            </Text>

            <Text style={{marginTop:20,textAlign:'center'}}>If you have a question, you can <Text style={{color:'green',fontWeight:'bold'}}>Contact Us</Text> or look in our <Text style={{color:'green',fontWeight:'bold'}}>Help</Text> Section for an answer
            </Text>

            </View>

        </ScrollView>
      </View>
    );
  }
}

export default FeedBack;
