import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import { Item, Input, Icon, Picker, Textarea } from "native-base";
import { Overlay } from "react-native-elements";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class ExistingPointerSelected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      given: false,
      recieved: false,
      starCount: 3.5,
      input: null,
      text: null,
      cmt: false,
      heart: false,
      selected: "key0",
      map_hide: false
    };
  }

  componentDidMount() {
    // this.setState({
    //   isVisible: true
    // });
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    const { map_hide } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            backgroundColor: "#34282C",
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            padding: 10,
            justifyContent: "center"
          }}
        >
          {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="ios-arrow-back"
              type="Ionicons"
              style={{ color: "white" }}
            />
          </TouchableOpacity> */}
          <Item
            style={{
              backgroundColor: "white",
              height: 35,
              width: "80%",
              paddingHorizontal: 5
            }}
          >
            <Icon type="AntDesign" name="search1" />
            <Input placeholder="Where to" />
            <Icon type="AntDesign" name="search1" style={{ fontSize: 14 }} />
          </Item>
        </View>
        {/* Header */}

        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
          overlayBackgroundColor="#FFFFFF"
          width="80%"
          height="auto"
        >
          <View style={{ alignItems: "center", width: "100%" }}>
            <Icon
              type="FontAwesome"
              name="map-marker"
              style={{ fontSize: 30 }}
            />
            <View style={{ paddingHorizontal: 10, marginTop: 5 }}>
              <Text style={{ textAlign: "center" }}>
                My favourite place to go for launch arround the capital that are
                fantastic gluten free optional are All tried and tasted
              </Text>
              <Text style={{ textAlign: "center", marginTop: 5 }}>
                My favourite place to go for launch arround the capital that are
                fantastic gluten free optional are All tried and tasted
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                borderTopWidth: 1,
                width: "100%",
                paddingTop: 5
              }}
            >
              <TouchableOpacity style={{ borderRightWidth: 1, width: "50%" }}>
                <Text
                  style={{ textAlignVertical: "center", textAlign: "center" }}
                >
                  Sure
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: "50%" }}>
                <Text
                  style={{ textAlignVertical: "center", textAlign: "center" }}
                >
                  No Thanks
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>

        {/* Body */}
        <ScrollView>
          <View style={{ width: "100%", marginBottom: 30 }}>
            {!map_hide && (
              <View style={styles.container}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                  }}
                />
              </View>
            )}

            <View style={{ marginTop: 0, marginBottom: 30 }}>
              <TouchableOpacity
                style={{
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  backgroundColor: "white",
                  marginTop: map_hide ? 0 : -20,
                  width: 70,
                  height: 30,
                  alignSelf: "center",
                  paddingVertical: 10
                }}
                onPress={() => {
                  this.setState({
                    map_hide: !map_hide
                  });
                }}
              >
                <Icon
                  type="AntDesign"
                  name={map_hide ? "down" : "up"}
                  style={{
                    alignSelf: "center",
                    fontSize: 24
                  }}
                />
              </TouchableOpacity>

              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "white",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  x
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  Glutens Free Launch Spots
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  X
                </Text>
              </View>

              <View style={{}}>
                <Text style={{ marginLeft: 5, textAlign: "center" }}>
                  My favourite place to go for launch arround the capital that
                  are fantastic gluten free optional are All tried and tasted
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: 12,
                    textDecorationLine: "underline",
                    fontWeight: "bold",
                    marginTop: 2
                  }}
                >
                  Read more
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                  width: "90%",
                  alignSelf: "center"
                }}
              >
                <View style={{ width: "45%" }}>
                  <Text>Mon: Closed</Text>
                  <Text>Tue: 08:30 - 17:00</Text>
                  <Text>Wed: 08:30 - 17:00</Text>
                  <Text style={{ fontWeight: "bold" }}>Thu: 08:30 - 17:00</Text>
                  <Text>Fri: 08:30 - 17:00</Text>
                  <Text>Sat: 08:30 - 17:00</Text>
                  <Text>Sun: 08:30 - 17:00</Text>

                  <Text style={{ marginTop: 15 }}>16 Hill Rise,</Text>
                  <Text>Richmond,</Text>
                  <Text>TW10 6UA</Text>
                  <Text style={{ color: "blue" }}>020 8122 0700</Text>
                </View>
                <View style={{ width: "55%" }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "green",
                      flexDirection: "row",
                      height: 40,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 10
                    }}
                  >
                    <Image
                      source={require("../../assets/images/facebook-logo.png")}
                      style={{ width: 15, height: 15, marginRight: 5 }}
                    />
                    <Text
                      style={{
                        textAlign: "center"
                      }}
                    >
                      Directions
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "green",
                      height: 40,
                      width: "100%",
                      justifyContent: "center",
                      marginBottom: 10
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center"
                      }}
                    >
                      Reserve a Table
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "green",
                      flexDirection: "row",
                      height: 40,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 10
                    }}
                  >
                    <Image
                      source={require("../../assets/images/facebook-logo.png")}
                      style={{ width: 15, height: 15, marginRight: 5 }}
                    />
                    <Text
                      style={{
                        textAlign: "center"
                      }}
                    >
                      Share
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                  width: "100%",
                  alignSelf: "center",
                  backgroundColor: "#f6e9e0",
                  padding: 10
                }}
              >
                <View style={{ width: "45%" }}>
                  <Text style={{ fontWeight: "bold" }}>Pointer from:</Text>
                  <Text>Brunch spot by</Text>
                  <Text>JessieCat</Text>
                </View>

                <View style={{ width: "55%" }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("AddPointerMyMap")
                    }
                    style={{
                      backgroundColor: "green",
                      flexDirection: "row",
                      height: 40,
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 10
                    }}
                  >
                    <Image
                      source={require("../../assets/images/facebook-logo.png")}
                      style={{ width: 15, height: 15, marginRight: 5 }}
                    />
                    <Text
                      style={{
                        textAlign: "center"
                      }}
                    >
                      Add to My Map
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "95%",
                  alignSelf: "center",
                  marginTop: 15
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold" }}>Offerings</Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Organic dishes
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Vegetarian Options
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Salad Bar
                  </Text>
                </View>

                <View>
                  <Text style={{ fontWeight: "bold" }}>Offerings</Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Organic dishes
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Vegetarian Options
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Salad Bar
                  </Text>
                </View>

                <View>
                  <Text style={{ fontWeight: "bold" }}>Offerings</Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Organic dishes
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Vegetarian Options
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    <Image
                      source={require("../../assets/images/check-mark.png")}
                      style={{ width: 8, height: 8 }}
                    />{" "}
                    Salad Bar
                  </Text>
                </View>
              </View>

              <View
                style={{ marginTop: 15, width: "95%", alignSelf: "center" }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Availability
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlignVertical: "center",
                      width: Dimensions.get("window").width / 10
                    }}
                  >
                    For...
                  </Text>

                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: Dimensions.get("window").width / 4 }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>

                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: Dimensions.get("window").width / 4 }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>

                  <Text
                    style={{
                      fontSize: 16,
                      textAlignVertical: "center",
                      width: Dimensions.get("window").width / 10
                    }}
                  >
                    at
                  </Text>

                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: Dimensions.get("window").width / 4 }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "95%",
                  alignSelf: "center",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    borderRadius: 20,
                    width: Dimensions.get("window").width / 5
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingVertical: 5
                    }}
                  >
                    15:00
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    borderRadius: 20,
                    width: Dimensions.get("window").width / 5
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingVertical: 5
                    }}
                  >
                    15:00
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    borderRadius: 20,
                    width: Dimensions.get("window").width / 5
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingVertical: 5
                    }}
                  >
                    15:00
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    borderRadius: 20,
                    width: Dimensions.get("window").width / 5
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingVertical: 5
                    }}
                  >
                    15:00
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ExistingPointerSelected;
