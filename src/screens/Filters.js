import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Card,
  Left,
  Right
} from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import { Textarea, Button, Picker } from "native-base";
import ModalDelete from "./ModalDelete";
import RangeSlider from "react-native-range-slider";

class Filters extends Component {
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
            middle_text="Filter"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}
        <View>
          <ScrollView>
            <View style={{ borderTopWidth: 1, marginBottom: 150 }}>
              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: "5%" }}
                >
                  Price
                </Text>
              </View>

              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginLeft: "5%"
                    }}
                  >
                    Distance
                  </Text>
                  <Text
                    style={{
                      color: "gray",
                      marginLeft: 10,
                      fontSize: 16,
                      marginTop: 5
                    }}
                  >
                    from
                  </Text>
                  <View
                    style={{
                      width: 210,
                      height: 50,
                      borderWidth: 1,
                      flexDirection: "row",
                      marginLeft: 5,
                      marginTop: -8
                    }}
                  >
                    <Icon
                      name="search"
                      type="EvilIcons"
                      style={{ marginTop: 13 }}
                    />
                    <Input placeholder="Search" style={{ marginLeft: 5 }} />
                  </View>
                </View>
              </View>

              <View
                style={{ marginTop: "5%", height: 120, borderBottomWidth: 1 }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginLeft: "5%",
                    marginBottom: 5
                  }}
                >
                  Pointers
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>
                </ScrollView>
              </View>

              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: "5%" }}
                >
                  Review Rating
                </Text>
              </View>

              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: "5%" }}
                >
                  No of Pointer
                </Text>
              </View>

              <Button
                style={{
                  backgroundColor: "lightgreen",
                  width: "90%",
                  marginLeft: "5%",
                  marginTop: "5%"
                }}
              >
                <Text
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: "5%"
                  }}
                >
                  Show 72 Maps
                </Text>
              </Button>
              {/* <RangeSlider
    minValue={0}
    maxValue={100}
    tintColor={'#da0f22'}
    handleBorderWidth={1}
    handleBorderColor="#454d55"
    selectedMinimum={20}
    selectedMaximum={40}
    style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
    onChange={ (data)=>{ console.log(data);} }
  /> */}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Filters;
