import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";
import { Item, Input, Icon, Button, Textarea } from "native-base";
import { Overlay } from "react-native-elements";
import StarRating from "react-native-star-rating";
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

class NoPointerYet extends Component {
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
      locationName: "Glutens Free Launch Spots"
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

    // console.log("map_update >>>", map_update);

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
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="ios-arrow-back"
              type="Ionicons"
              style={{ color: "white" }}
            />
          </TouchableOpacity>
          <Item
            style={{
              backgroundColor: "white",
              height: 35,
              width: "80%",
              paddingHorizontal: 5
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CreateLocationSearch")
              }
            >
              <Icon name="search" />
            </TouchableOpacity>
            <Input placeholder="Search for your first pointer..." />
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
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("CreateAddedPointer")
              }
              style={{
                borderWidth: 1,
                borderRadius: 5,
                width: "75%",
                justifyContent: "center",
                height: 40,
                backgroundColor: "#34282C",
                marginLeft: 10,
                marginTop: 10
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                ...or tap anywhere to add another pointer
              </Text>
            </TouchableOpacity>
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
              ></MapView>
            </View>

            <View style={{ marginTop: 0, marginBottom: 30 }}>
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
                <View style={{ flexDirection: "row" }}>
                  {this.state.editLocationName ? (
                    <View style={{ flexDirection: "row" }}>
                      <Item
                        style={{
                          backgroundColor: "white",
                          height: 35,
                          width: "80%",
                          paddingHorizontal: 5
                        }}
                      >
                        <Input
                          placeholder=" "
                          value={this.state.locationName}
                        />
                      </Item>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            editLocationName: false
                          })
                        }
                        style={{ alignSelf: "center", marginLeft: 5 }}
                      >
                        <Icon
                          type="AntDesign"
                          name="search1"
                          style={{ fontSize: 20 }}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          marginLeft: "auto",
                          marginRight: "auto"
                        }}
                      >
                        {this.state.locationName}
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            editLocationName: true
                          })
                        }
                        style={{ alignSelf: "center", marginLeft: 5 }}
                      >
                        <Icon
                          type="AntDesign"
                          name="search1"
                          style={{ fontSize: 20 }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

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
                    fontSize: 14,
                    fontWeight: "bold",
                    marginTop: 2
                  }}
                >
                  $2.00
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "green",
                  flexDirection: "row",
                  height: 40,
                  width: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginBottom: 10,
                  marginTop: 30
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
                  Add to Map
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default NoPointerYet;
