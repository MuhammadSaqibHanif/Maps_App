import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon, ListItem, List, Left, Right } from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import { Textarea, Button, Picker } from "native-base";
import ModalDelete from "./ModalDelete";
class EditMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map_update: false,
      price: false,
      given: false,
      recieved: false,
      btn: false,
      starCount: 3.5,
      selected: undefined,
      pick: undefined,
      Alert_Visibility: false
    };
  }

  Show_Custom_Alert(visible) {
    this.setState({ Alert_Visibility: visible });
  }

  ok_Button = () => {
    Alert.alert("OK Button Clicked.");
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
    console.log("SSDSDDS", value);
  }
  onValueChange1(value) {
    this.setState({
      pick: value
    });
    console.log("SSDSDDS", value);
  }
  render() {
    const { map_update, price } = this.state;
    const { rating } = this.props;
    console.log("map_update >>>", this.props.navigation.state.params);

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
            middle_text="Edit Your Map"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}
        <View>
          <ScrollView>
            <View style={{ marginLeft: "5%", width: "90%", marginTop: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>My Name</Text>
              <Textarea
                rowSpan={2}
                bordered
                onKeyPress={() => this.setState({ given: true })}
                style={{ marginTop: 20 }}
                placeholder={this.props.navigation.state.params.title}
              />

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  My Description
                </Text>
                <Textarea
                  rowSpan={5}
                  bordered
                  onKeyPress={() => this.setState({ given: true })}
                  style={{ marginTop: 5 }}
                  placeholder={this.props.navigation.state.params.text}
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  What can see your map?
                </Text>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  style={{ width: 150 }}
                  selectedValue={this.state.pick}
                  onValueChange={this.onValueChange1.bind(this)}
                >
                  <Picker.Item label="Choose" value="choose" />
                  <Picker.Item label="Everyone" value="everyone" />
                  <Picker.Item label="Just Me" value="justme" />
                </Picker>
              </View>

              {this.state.pick == "everyone" ? (
                <View>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}
                  >
                    Price
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, width: "80%" }}>
                      Do you want to change people to access to your map?
                    </Text>
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
                  {this.state.map_update == true && (
                    <View>
                      <Textarea
                        rowSpan={2}
                        bordered
                        style={{ marginTop: 20, width: 150 }}
                        placeholder="$1.300"
                        keyboardType="number-pad"
                      />
                    </View>
                  )}

                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}
                  >
                    Boost
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 16, width: "80%" }}>
                      Do you want to change people to access to your map?
                    </Text>
                    <Switch
                      value={price}
                      onValueChange={val => {
                        this.setState({
                          price: !price
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

                  {this.state.price == true && (
                    <View>
                      <Textarea
                        rowSpan={2}
                        bordered
                        style={{ marginTop: 20, width: 150 }}
                        placeholder="$2.00"
                        keyboardType="number-pad"
                      />
                    </View>
                  )}

                  {/* <Text style={{borderBottomWidth:1,marginLeft:'auto',marginRight:'auto',marginTop:20,fontSize:18,color:'#736F6E'}} onPress={()=>this.setState({btn:true})}>Delete Your Map</Text> */}
                  {/* {this.state.btn==true &&
                <ModalDelete/>
            } */}
                  <ModalDelete />
                  <View
                    style={{
                      borderTopWidth: 1,
                      borderTopColor: "gray",
                      marginTop: 10,
                      marginBottom: 130
                    }}
                  >
                    <Button
                      style={{ backgroundColor: "lightgreen", marginTop: 10 }}
                    >
                      <Text
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 16,
                          fontWeight: "bold"
                        }}
                      >
                        Save Changes
                      </Text>
                    </Button>
                  </View>
                </View>
              ) : (
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginTop: 20,
                      color: "#E8E8E8"
                    }}
                  >
                    Price
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{ fontSize: 16, width: "80%", color: "#E8E8E8" }}
                    >
                      Do you want to change people to access to your map?
                    </Text>
                    <Switch
                      value={map_update}
                      onValueChange={val => {
                        this.setState({
                          map_update: !map_update
                        });
                      }}
                      disabled={true}
                      activeText="On"
                      inActiveText={"Off"}
                      backgroundActive={"green"}
                      backgroundInactive={"#E8E8E8"}
                      circleActiveColor={"#E8E8E8"}
                      circleInActiveColor={"#E8E8E8"}
                      style={{}}
                    />
                  </View>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginTop: 20,
                      color: "#E8E8E8"
                    }}
                  >
                    Boost
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{ fontSize: 16, width: "80%", color: "#E8E8E8" }}
                    >
                      Do you want to change people to access to your map?
                    </Text>
                    <Switch
                      value={price}
                      onValueChange={val => {
                        this.setState({
                          price: !price
                        });
                      }}
                      disabled={true}
                      activeText="On"
                      inActiveText={"Off"}
                      backgroundActive={"green"}
                      backgroundInactive={"#E8E8E8"}
                      circleActiveColor={"#E8E8E8"}
                      circleInActiveColor={"#E8E8E8"}
                      style={{}}
                    />
                  </View>
                  <View
                    style={{
                      borderTopWidth: 1,
                      borderTopColor: "gray",
                      marginTop: 10,
                      marginBottom: 130
                    }}
                  >
                    <Button
                      style={{ backgroundColor: "#E8E8E8", marginTop: 10 }}
                    >
                      <Text
                        style={{
                          marginLeft: "auto",
                          color: "#A5A5A5",
                          marginRight: "auto",
                          fontSize: 16,
                          fontWeight: "bold"
                        }}
                      >
                        Enter a Map Name
                      </Text>
                    </Button>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default EditMap;
