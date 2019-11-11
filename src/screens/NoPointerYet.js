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
      heart: false
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
              <Icon type="AntDesign" name="search1" />
            </TouchableOpacity>
            <Input placeholder="Where to" />
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
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("PointerSelected")
                }
                style={{
                  width: 80,
                  height: 30,
                  backgroundColor: "blue",
                  alignSelf: "flex-start"
                }}
              ></TouchableOpacity>
            </View>

            <View style={{ marginTop: 0, marginBottom: 30 }}>
              <View style={{ flexDirection: "row" }}>
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
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: 2
                  }}
                >
                  $2.00
                </Text>
              </View>

              <View style={{ marginLeft: "5%", width: "90%", marginTop: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("CreateSelectIcon")
                      }
                    >
                      <Icon name="map-marker" type="FontAwesome" style={{}} />
                    </TouchableOpacity>

                    <View style={{ marginLeft: "3%" }}>
                      <Text
                        style={{
                          marginLeft: "3%",
                          fontSize: 14,
                          fontWeight: "bold"
                        }}
                      >
                        1 Pointer
                      </Text>
                      <Text
                        style={{
                          marginLeft: "3%",
                          fontSize: 12,
                          color: "gray"
                        }}
                      >
                        (1 Currently open)
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: "row", marginLeft: 60 }}>
                    <Icon name="hearto" type="AntDesign" style={{}} />
                    <View style={{ marginLeft: "3%" }}>
                      <Text
                        style={{
                          marginLeft: "3%",
                          fontSize: 16,
                          fontWeight: "bold"
                        }}
                      >
                        0 Save
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <View style={{ flexDirection: "row" }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={15}
                    />
                    <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                  </View>

                  <View style={{ flexDirection: "row", marginLeft: 48 }}>
                    <Icon name="clockcircleo" type="AntDesign" style={{}} />
                    <View style={{ marginLeft: "3%" }}>
                      <Text
                        style={{
                          marginLeft: "3%",
                          fontSize: 14,
                          color: "gray"
                        }}
                      >
                        Last Updated
                      </Text>
                      <Text
                        style={{
                          marginLeft: "3%",
                          fontSize: 14,
                          color: "gray",
                          fontWeight: "bold"
                        }}
                      >
                        9th Jun 2019
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ marginTop: "5%", marginLeft: "5%", width: "90%" }}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/images/img.jpg")}
                  />
                  <View style={{ marginTop: -5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: 5
                      }}
                    >
                      EveBradFord
                    </Text>
                    <View style={{ width: 100, marginLeft: 5 }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={10}
                        starStyle={{}}
                      />
                    </View>
                    <Text style={{ marginLeft: 5, width: "50%" }}>
                      Thank you Jan for all your faboluse suggestion My
                      Favourite is tell your
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: "5%" }}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/images/img.jpg")}
                  />
                  <View style={{ marginTop: -5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: 5
                      }}
                    >
                      EveBradFord
                    </Text>
                    <View style={{ width: 100, marginLeft: 5 }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={10}
                        starStyle={{}}
                      />
                    </View>
                    <Text style={{ marginLeft: 5, width: "50%" }}>
                      Thank you Jan for all your faboluse suggestion My
                      Favourite is tell your
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: "5%" }}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("../../assets/images/img.jpg")}
                  />
                  <View style={{ marginTop: -5 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: 5
                      }}
                    >
                      EveBradFord
                    </Text>
                    <View style={{ width: 100, marginLeft: 5 }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={10}
                        starStyle={{}}
                      />
                    </View>
                    <Text style={{ marginLeft: 5, width: "50%" }}>
                      Thank you Jan for all your faboluse suggestion My
                      Favourite is tell your
                    </Text>
                  </View>
                </View>

                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{
                      color: "green",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 16
                    }}
                  >
                    Read More Reviews
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: "5%" }}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={require("../../assets/images/img.jpg")}
                  />
                  <View style={{}}>
                    <View style={{ width: 100, marginLeft: 15 }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={10}
                        starStyle={{}}
                      />
                    </View>
                    <View style={{ width: "90%", marginLeft: "5%" }}>
                      <Textarea
                        rowSpan={3}
                        bordered
                        placeholder="Textarea"
                        style={{ width: 200, borderRadius: 10 }}
                        onChangeText={text => {
                          this.setState({ text, cmt: true });
                        }}
                      />
                    </View>
                  </View>
                </View>

                {this.state.cmt == true ? (
                  <View style={{ marginTop: "5%" }}>
                    <Button
                      style={{
                        backgroundColor: "lightgreen",
                        width: 100,
                        marginLeft: "25%"
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        Submit
                      </Text>
                    </Button>
                  </View>
                ) : (
                  <View style={{ marginTop: "5%" }}>
                    <Button
                      style={{
                        backgroundColor: "lightgreen",
                        width: 150,
                        marginLeft: "25%"
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        Add to Comment
                      </Text>
                    </Button>
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default NoPointerYet;
