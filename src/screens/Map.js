import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import { Header, Item, Input, Icon } from "native-base";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      show_slide_content: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(info => {
      this.setState({
        location: info
      });
    });
  }

  render() {
    const {
      location,
      show_slide_content,
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4
    } = this.state;

    // console.log("location >>>", location);

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            width: "100%",
            alignSelf: "center"
            // marginBottom: 10,
            // marginTop: 10
          }}
        >
          <Header searchBar rounded style={{ backgroundColor: "#34282C" }}>
            <Icon
              name="ios-arrow-back"
              type="Ionicons"
              style={{ marginTop: 13, color: "white" }}
            />

            <Item
              style={{ backgroundColor: "lightbrown" }}
              style={{ marginLeft: 10, backgroundColor: "white" }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("SearchForLocation")
                }
              >
                <Icon type="AntDesign" name="search1" />
              </TouchableOpacity>

              <Input placeholder="Search for a location..." />
            </Item>
          </Header>
        </View>
        {/* Header */}

        <View
          style={{
            width: "100%",
            backgroundColor: "lightgray",
            padding: 10,
            flexDirection: "row"
          }}
        >
          <Icon name="home" type="Ionicons" style={{}} />
          <Text style={{ marginLeft: 5, width: "95%" }}>
            {/* <Icon name="ios-arrow-back" type="Ionicons" style={{}} /> */}
            TEST xxxxxxxxcvdjkn sdfnjxcn jksnfjn TEST xxx xxxx xcvdjkn sdfnjxcn
            jksnfjn TEST xxx
          </Text>
        </View>

        <View
        // style={{
        //   flex: 1
        // }}
        >
          {/* <ScrollView> */}

          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              // region={{
              //   latitude:
              //     location !== null ? location.coords.latitude : 37.78825,
              //   longitude:
              //     location !== null ? location.coords.longitude : -122.4324,
              //   latitudeDelta: 0.015,
              //   longitudeDelta: 0.0121
              // }}

              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
            >
              <MapView.Marker
                onPress={() =>
                  this.props.navigation.navigate("ExistingPointerSelected")
                }
                coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                title={"title"}
                description={"description"}
              />
            </MapView>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                height: "50%"
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    show_slide_content: !show_slide_content
                  })
                }
                style={{
                  width: 50,
                  height: "60%",
                  backgroundColor: "black",
                  alignSelf: "flex-end",
                  marginBottom: "50%",
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  alignItems: "center"
                  // flexDirection: "row-reverse",
                  // paddingVertical: 5
                }}
              >
                <Text
                  style={{
                    color: "white",
                    // backgroundColor: "red",
                    // marginRight: 10,
                    height: "100%",
                    textAlign: "center",
                    width: 200,
                    fontSize: 14,
                    transform: [{ rotate: "270deg" }],
                    textAlignVertical: "center"
                  }}
                >
                  {"     "}Pointers from 4 maps
                </Text>
              </TouchableOpacity>
              {show_slide_content && (
                <View
                  style={{
                    width: "50%",
                    height: "60%",
                    backgroundColor: "#FFFFFF",
                    alignSelf: "flex-end",
                    marginBottom: "50%",
                    marginTop: 5,
                    paddingLeft: 5
                    // alignItems: "center"

                    // paddingVertical: 5
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          checkbox1: !checkbox1
                        })
                      }
                      style={{
                        backgroundColor: checkbox1 ? "gray" : "#FFFFFF",
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderRadius: 5,
                        alignContent: "center"
                      }}
                    >
                      <Icon
                        type="AntDesign"
                        name="check"
                        style={{
                          color: "#FFFFFF",
                          fontSize: 15,
                          textAlign: "center"
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                      <Text>Let the Fun Begin...</Text>
                      <Text style={{ fontSize: 11, color: "gray" }}>
                        By Qwerty
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          checkbox2: !checkbox2
                        })
                      }
                      style={{
                        backgroundColor: checkbox2 ? "gray" : "#FFFFFF",
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderRadius: 5,
                        alignContent: "center"
                      }}
                    >
                      <Icon
                        type="AntDesign"
                        name="check"
                        style={{
                          color: "#FFFFFF",
                          fontSize: 15,
                          textAlign: "center"
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                      <Text>Let the Fun Begin...</Text>
                      <Text style={{ fontSize: 11, color: "gray" }}>
                        By Qwerty
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          checkbox3: !checkbox3
                        })
                      }
                      style={{
                        backgroundColor: checkbox3 ? "gray" : "#FFFFFF",

                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderRadius: 5,
                        alignContent: "center"
                      }}
                    >
                      <Icon
                        type="AntDesign"
                        name="check"
                        style={{
                          color: "#FFFFFF",
                          fontSize: 15,
                          textAlign: "center"
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                      <Text>Let the Fun Begin...</Text>
                      <Text style={{ fontSize: 11, color: "gray" }}>
                        By Qwerty
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          checkbox4: !checkbox4
                        })
                      }
                      style={{
                        backgroundColor: checkbox4 ? "gray" : "#FFFFFF",
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderRadius: 5,
                        alignContent: "center"
                      }}
                    >
                      <Icon
                        type="AntDesign"
                        name="check"
                        style={{
                          color: "#FFFFFF",
                          fontSize: 15,
                          textAlign: "center"
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                      <Text>Let the Fun Begin...</Text>
                      <Text style={{ fontSize: 11, color: "gray" }}>
                        By Qwerty
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>

          {/* </ScrollView> */}
        </View>
      </View>
    );
  }
}

export default Map;
