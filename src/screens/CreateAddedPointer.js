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

class PointerSelected extends Component {
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

  //   componentDidMount() {
  //     this.setState({
  //       isVisible: true
  //     });
  //   }

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
              {/* <TouchableOpacity
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
              </TouchableOpacity> */}

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
                style={{ marginTop: "5%", width: "90%", alignSelf: "center" }}
              >
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ImageShow", {
                        image:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      })
                    }
                  >
                    <Image
                      style={{ width: 60, height: 60, marginRight: 10 }}
                      source={{
                        uri:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ImageShow", {
                        image:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      })
                    }
                  >
                    <Image
                      style={{ width: 60, height: 60, marginRight: 10 }}
                      source={{
                        uri:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ImageShow", {
                        image:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      })
                    }
                  >
                    <Image
                      style={{ width: 60, height: 60, marginRight: 10 }}
                      source={{
                        uri:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ImageShow", {
                        image:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      })
                    }
                  >
                    <Image
                      style={{ width: 60, height: 60, marginRight: 10 }}
                      source={{
                        uri:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("ImageShow", {
                        image:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      })
                    }
                  >
                    <Image
                      style={{ width: 60, height: 60, marginRight: 10 }}
                      source={{
                        uri:
                          "https://cdn.pixabay.com/photo/2019/10/17/14/52/white-4557097__340.jpg"
                      }}
                    />
                  </TouchableOpacity>
                </View>

                {/* Footer */}
                <View
                  style={{
                    // flex: 1,
                    width: "100%",
                    height: 60,

                    marginTop: 15,
                    borderTopColor: "#DCDCDC",
                    borderTopWidth: 1
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "green",
                      height: 45,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "85%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "auto",
                      marginBottom: "auto"
                    }}
                    onPress={() =>
                      this.props.navigation.navigate("ListingScreen")
                    }
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20
                      }}
                    >
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* Footer */}

                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      isVisible: true
                    })
                  }
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "blue",
                      textDecorationLine: "underline"
                    }}
                  >
                    Delete this Pointer?
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

export default PointerSelected;
