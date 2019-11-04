import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon } from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map_update: false
    };
  }

  render() {
    const { map_update } = this.state;

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
            middle_text="Notifications"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}

        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",

                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Email Notificatons</Text>

             
            </View>
            <View style={{ flexDirection: 'row',width:"98%",alignSelf:'center' }}>
            <Text style={{ marginLeft: 15, width: 250 }}>Occassionally,we'd like to on email aboutnew map that you may be intrested in or new features on the app</Text>
            <View style={{marginLeft:12}}>
                <Switch
                  // marginLeft={"100%"}
                  value={map_update}
                  onValueChange={val => {
                    this.setState({
                      map_update: !map_update
                    });
                  }}
                  disabled={false}
                  activeText="On"
                  inActiveText={"Off"}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#000000"}
                  // style={{backgroundColor:"yellow"}}
                />
                </View>
              </View>
            <View
              onPress={() => this.props.navigation.navigate("PreferencesSet")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                // borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginTop:10 }}>Push Notification</Text>

            </View>
            <View style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8,
                  // backgroundColor: 'yellow'
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Map Updates</Text>


              </View>
              <View style={{ flexDirection: 'row',width:"98%",alignSelf:'center' }}>
                <Text style={{ marginLeft: 15, width: 250, color: 'gray'}}>When a map you have a saved or purchased has been update by the creator</Text>
                <View style={{marginLeft:12}}>
                <Switch
                  // marginLeft={"100%"}
                  value={map_update}
                  onValueChange={val => {
                    this.setState({
                      map_update: !map_update
                    });
                  }}
                  disabled={false}
                  activeText="On"
                  inActiveText={"Off"}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#000000"}
                  // style={{backgroundColor:"yellow"}}
                />
                </View>
              </View>
            </View>
            <View style={{marginTop:10}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Permanent Closures</Text>
               
              </View>
              <View style={{ flexDirection: 'row',width:"98%",alignSelf:'center' }}>
              <Text style={{ marginLeft: 15, width: 250, color: 'gray' }}>When a location is in the map you have created become permanently closed so that you can remove it friom your map</Text>
              <View style={{marginLeft:12}}>
              <Switch
                  value={map_update}
                  onValueChange={val => {
                    this.setState({
                      map_update: !map_update
                    });
                  }}
                  disabled={false}
                  activeText="On"
                  inActiveText={"Off"}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#000000"}
                />
                </View>
                </View>
            </View>

            <View style={{marginTop:10}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Purchases/Save</Text>
                
              </View>
              <View style={{ flexDirection: 'row',width:"98%",alignSelf:'center' }}>
              <Text style={{ marginLeft: 15, width: 250, color: 'gray' }}>When a map you have created purchased or save by anothert user</Text>
              <View style={{marginLeft:12}}>
              <Switch
                  value={map_update}
                  onValueChange={val => {
                    this.setState({
                      map_update: !map_update
                    });
                  }}
                  disabled={false}
                  activeText="On"
                  inActiveText={"Off"}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#000000"}
                />
                </View>
                </View>
            </View>

            <View style={{marginTop:10}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Reviews</Text>
                
              </View>
              <View style={{ flexDirection: 'row',width:"98%",alignSelf:'center' }}>
              <Text style={{ marginLeft: 15, width: 250, color: 'gray' }}>When a map you have created or received a review from another user</Text>
              <View style={{marginLeft:12}}>
              <Switch
                  value={map_update}
                  onValueChange={val => {
                    this.setState({
                      map_update: !map_update
                    });
                  }}
                  disabled={false}
                  activeText="On"
                  inActiveText={"Off"}
                  backgroundActive={"green"}
                  backgroundInactive={"gray"}
                  circleActiveColor={"#30a566"}
                  circleInActiveColor={"#000000"}
                  style={{}}
                />
                </View>
                </View>
            </View>
            {/* 
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Help</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Terms of Service</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Give Feedback</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Log Out</Text>
              <Icon name="home" />
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Notifications;
