/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
  Modal,
  Alert
} from "react-native";
import { Item, Input as NBInput, Icon as NBIcon } from "native-base";
import { Icon, Input } from "react-native-elements";
import StarRating from "react-native-star-rating";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      upCircle: true,
      downcircle: false,
      Alert_Visibility: false,
      location: false
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  Show_Custom_Alert(visible) {
    this.setState({ Alert_Visibility: visible });
  }

  ok_Button = () => {
    Alert.alert("OK Button Clicked.");
  };

  taponUpDown = () => {
    this.setState({
      upCircle: !this.state.upCircle,
      downcircle: !this.state.downcircle
    });
  };
  render() {
    return (
      <View style={styles.container}>
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
          <TouchableOpacity
            onPress={e => this.props.navigation.toggleDrawer(e)}
          >
            <NBIcon
              name="ios-menu"
              type="Ionicons"
              style={{ color: "white" }}
            />
          </TouchableOpacity>
          <Item
            style={{
              backgroundColor: "white",
              height: 35,
              width: "90%",
              paddingHorizontal: 5
            }}
          >
            <NBIcon type="AntDesign" name="search1" style={{ fontSize: 20 }} />
            <NBInput placeholder="Try searching for Brunch" />
          </Item>
        </View>
        {/* Header */}

        {/* Second Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 5
            // marginLeft:'5%',
            // backgroundColor:"red",
            // width:'90%',
            // borderWidth:1
          }}
        >
          {this.state.location == true ? (
            <View style={{ flexDirection: "row" }}>
              <View
                style={{ flexDirection: "row", borderWidth: 1, height: 50 }}
              >
                <View style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <Icon type="EvilIcons" name="search" />
                </View>
                <View style={{ width: 250 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#41BB94",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      width: wp("50%"),
                      borderRadius: 8,
                      height: hp("5%"),
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "5%"
                    }}
                    onPress={() => this.setState({ location: true })}
                  >
                    <Icon
                      name="target-two"
                      type="foundation"
                      color="black"
                      size={30}
                    />
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      Current Locations
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* </Item> */}

                {/* </Header> */}
              </View>
              <Text
                style={{
                  marginBottom: "auto",
                  marginTop: "auto",
                  fontSize: 16,
                  marginLeft: "5%"
                }}
              >
                Cancel
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 5
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#41BB94",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: wp("40%"),
                  borderRadius: 8,
                  height: hp("7%")
                }}
                onPress={() => this.setState({ location: true })}
              >
                <Icon
                  name="target-two"
                  type="foundation"
                  color="black"
                  size={30}
                />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Current Locations
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#f6e9e0",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: wp("25%"),
                  borderRadius: 8,
                  height: hp("7%")
                }}
                onPress={() => this.props.navigation.navigate("Filters")}
              >
                <Icon name="filter" type="foundation" color="black" size={30} />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#f6e9e0",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  width: wp("25%"),
                  borderRadius: 8,
                  height: hp("7%")
                }}
                onPress={() => {
                  this.Show_Custom_Alert(true);
                }}
              >
                <Icon
                  name="sort"
                  type="font-awesome-5"
                  color="black"
                  size={30}
                />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sort</Text>
              </TouchableOpacity>
              {this.state.Alert_Visibility && (
                <Modal
                  visible={this.state.Alert_Visibility}
                  transparent={true}
                  backdropColor="black"
                  animationType={"fade"}
                  onRequestClose={() => {
                    this.Show_Custom_Alert(!this.state.Alert_Visibility);
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0,0,0,0.5)"
                    }}
                  >
                    <View style={styles.Alert_Main_View}>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              fontWeight: "bold",
                              marginLeft: 100,
                              fontSize: 18,
                              marginTop: 12
                            }}
                          >
                            Sort
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text
                            style={{
                              fontWeight: "bold",
                              marginLeft: 100,
                              fontSize: 18,
                              marginTop: 12
                            }}
                            onPress={() => {
                              this.Show_Custom_Alert(
                                !this.state.Alert_Visibility
                              );
                            }}
                          >
                            X
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity>
                        <Text style={styles.Alert_Message}>Recommended </Text>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Text style={styles.Alert_Message}>Trending</Text>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Text style={styles.Alert_Message}>
                          Most Recently Updated{" "}
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Text style={styles.Alert_Message}>Most Popular</Text>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Text style={styles.Alert_Message}>
                          Price: Low - High{" "}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.Alert_Message}>
                          Price: High - Low{" "}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              )}
            </View>
          )}
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 5,
            marginTop: 10
          }}
        >
          Recommends For Your
        </Text>

        <FlatList
          data={["efwew", "ewfw", "ewfewfwe", "efwew", "ewfw"]}
          renderItem={({ title }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  borderBottomColor: "lightgray",
                  paddingBottom: 10,
                  borderBottomWidth: 1
                }}
              >
                <View style={{ width: wp("60%") }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("SelectedMap")
                    }
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginLeft: 5,
                        marginTop: 5
                      }}
                    >
                      Best Food
                    </Text>

                    <Text style={{ fontSize: 18, marginLeft: 5, marginTop: 5 }}>
                      na aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </Text>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        marginLeft: 5,
                        marginTop: 5
                      }}
                    >
                      Free
                    </Text>
                  </TouchableOpacity>

                  <View style={{ flexDirection: "row" }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={3}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />

                    <Text style={{ fontSize: 18, marginLeft: 10 }}>
                      17 reviewss
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      containerStyle={{ alignItems: "flex-start" }}
                      name="map-marker-radius"
                      type="material-community"
                      color="black"
                      size={40}
                    />
                    <Icon
                      containerStyle={{ alignItems: "flex-start" }}
                      name="map-marker-radius"
                      type="material-community"
                      color="black"
                      size={40}
                    />
                    <View style={{ alignSelf: "center" }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          marginLeft: 10
                        }}
                      >
                        48 pointers
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                // style={{ width: wp("40%") }}
                >
                  {/* <Image
                    source={{
                      uri: "https://staticmapmaker.com/img/google@2x.png"
                    }}
                    style={{ width: 140, height: 225 }}
                  /> */}
                  <View style={styles.containerm}>
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
                  <View
                    style={{
                      flexDirection: "row",
                      position: "absolute",
                      bottom: 2,
                      backgroundColor: "white",
                      borderRadius: 8
                    }}
                  >
                    <Image
                      source={{
                        uri:
                          "http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg"
                      }}
                      style={{ width: 40, height: 30 }}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        alignSelf: "flex-end",
                        marginLeft: 3,
                        fontWeight: "bold"
                      }}
                    >
                      John Doe
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <View style={{ marginTop: 30, marginBottom: 30, alignSelf: "center" }}>
          <Text style={{ textAlign: "center" }}>
            wercf sdfhdv sd fnfs vnsd f
          </Text>
        </View>
      </View>
    );
  }
}

export default Listings;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS == "ios" ? 20 : 0
    //  borderWidth:2
  },

  Alert_Main_View: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 380,
    width: "90%",
    borderWidth: 0.5,
    //   borderColor: '#fff',
    borderRadius: 7
  },

  Alert_Title: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold"
    //   height: '28%'
  },

  Alert_Message: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    padding: 10
    // height: '42%'
  },

  buttonStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor:'yellow'
  },

  TextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 22,
    marginTop: -5,
    fontWeight: "bold"
    // backgroundColor:'red'
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa"
  },
  containerm: {
    // ...StyleSheet.absoluteFillObject,
    height: 200,
    width: 200,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
