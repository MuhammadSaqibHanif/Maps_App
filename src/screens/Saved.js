import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Card
} from "native-base";
import { Overlay } from "react-native-elements";
import HeaderITI from "../components/HeaderITI";
import StarRating from "react-native-star-rating";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
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

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      popUp_content: "",
      given: false,
      recieved: false,
      starCount: 3.5,
      text: false
    };
  }

  _showPopup = content => {
    this.setState({
      isVisible: true,
      popUp_content: content
    });
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    const { map_update } = this.state;
    const { rating } = this.props;
    console.log("this.props.navigation.state >>>", this.props.navigation.state);

    return (
      <View>
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
          overlayBackgroundColor="#FFFFFF"
          width="80%"
          height="auto"
        >
          <View style={{ alignItems: "center", width: "100%" }}>
            <View
              style={{
                paddingHorizontal: 10,
                marginTop: 5,
                width: "100%",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                Delete
                <Text style={{ color: "gray" }}>
                  {` '${this.state.popUp_content}'`}
                </Text>
                ?
              </Text>
              <Text style={{ textAlign: "center", marginTop: 5 }}>
                This allows the app and website to share informationabout you.
              </Text>
              <Text style={{ textAlign: "center", marginTop: 5 }}>
                This allows the app and website to share informationabout you.
                This allows the app and website to share informationabout you.
                This allows the app and website to share informationabout you.
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
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    color: "blue"
                  }}
                >
                  No, Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: "50%" }}>
                <Text
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    color: "blue"
                  }}
                >
                  Yes, Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>

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
            middle_text="Saved"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() =>
              // this.props.navigation.state
              //   ? this.props.navigation.state.params
              //     ? this.props.navigation.state.params.from
              //       ? this.props.navigation.state.params.from == "MyAccounts"
              //         ? this.props.navigation.navigate("MyAccounts")
              //         : this.props.navigation.goBack()
              //       : this.props.navigation.goBack()
              //     : this.props.navigation.goBack()
              //   :
              this.props.navigation.goBack()
            }
          />
        </View>
        {/* Header */}
        <ScrollView>
          <View style={{ marginLeft: "5%", width: "90%" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Created by you
            </Text>
            <View style={{ borderWidth: 0.5, borderRadius: 10, marginTop: 10 }}>
              <Item>
                <Icon name="ios-search" />
                <Input
                  placeholder="Search by map name..."
                  onChangeText={() => this.setState({ text: true })}
                />
              </Item>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            {this.state.text == true ? (
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Card
                    style={{
                      width: 200,
                      justifyContent: "flex-end",
                      marginLeft: 20
                    }}
                  >
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
                    <Text style={{ marginLeft: "5%" }}>Best Picnic Spotss</Text>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={20}
                      />
                      <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <Icon name="map-marker" type="FontAwesome" />
                      <Icon
                        name="map-marker"
                        type="FontAwesome"
                        style={{ marginLeft: 5 }}
                      />
                      <Text style={{ marginLeft: 10 }}>21 Pointers</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        marginBottom: 20,
                        marginTop: 10
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                          onPress={() =>
                            this.props.navigation.navigate("ExistingMap", {
                              route: "Save"
                            })
                          }
                        >
                          View
                        </Text>
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                        onPress={() =>
                          this.props.navigation.navigate("ExistingMap")
                        }
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Edit
                        </Text>
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                        onPress={() =>
                          this._showPopup("Gluten Free Lunch Spots")
                        }
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Delete
                        </Text>
                      </Button>
                    </View>
                  </Card>
                </ScrollView>
              </View>
            ) : (
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Card
                    style={{
                      width: 200,
                      justifyContent: "flex-end",
                      marginLeft: 20
                    }}
                  >
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
                    <Text style={{ marginLeft: "5%" }}>Best Picnic Spots</Text>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={20}
                      />
                      <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <Icon name="map-marker" type="FontAwesome" />
                      <Icon
                        name="map-marker"
                        type="FontAwesome"
                        style={{ marginLeft: 5 }}
                      />
                      <Text style={{ marginLeft: 10 }}>21 Pointers</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        marginBottom: 20,
                        marginTop: 10
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                          onPress={() =>
                            this.props.navigation.navigate("ExistingMap", {
                              route: "Save"
                            })
                          }
                        >
                          View
                        </Text>
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                        onPress={() =>
                          this.props.navigation.navigate("ExistingMap")
                        }
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Edit
                        </Text>
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                        onPress={() =>
                          this._showPopup("Gluten Free Lunch Spots")
                        }
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Delete
                        </Text>
                      </Button>
                    </View>
                  </Card>
                  <Card
                    style={{
                      width: 200,
                      justifyContent: "flex-end",
                      marginLeft: 20
                    }}
                  >
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
                    <Text style={{ marginLeft: "5%" }}>Best Picnic Spots</Text>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={20}
                      />
                      <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <Icon name="map-marker" type="FontAwesome" />
                      <Icon
                        name="map-marker"
                        type="FontAwesome"
                        style={{ marginLeft: 5 }}
                      />
                      <Text style={{ marginLeft: 10 }}>21 Pointers</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        marginBottom: 20,
                        marginTop: 10
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                        >
                          View
                        </Text>
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Edit
                        </Text>
                      </Button>
                      <Button
                        onPress={() =>
                          this._showPopup("Gluten Free Lunch Spots")
                        }
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Delete
                        </Text>
                      </Button>
                    </View>
                  </Card>
                  <Card
                    style={{
                      width: 200,
                      justifyContent: "flex-end",
                      marginLeft: 20,
                      marginRight: 20
                    }}
                  >
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
                    <Text style={{ marginLeft: "5%" }}>Best Picnic Spots</Text>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={20}
                      />
                      <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                      <Icon name="map-marker" type="FontAwesome" />
                      <Icon
                        name="map-marker"
                        type="FontAwesome"
                        style={{ marginLeft: 5 }}
                      />
                      <Text style={{ marginLeft: 10 }}>21 Pointers</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        marginBottom: 20,
                        marginTop: 10
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            marginLeft: "auto",
                            marginRight: "auto"
                          }}
                        >
                          View
                        </Text>
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Edit
                        </Text>
                      </Button>
                      <Button
                        onPress={() =>
                          this._showPopup("Gluten Free Lunch Spots")
                        }
                        style={{
                          backgroundColor: "lightgray",
                          height: 30,
                          marginLeft: 10,
                          width: 50
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 16
                          }}
                        >
                          Delete
                        </Text>
                      </Button>
                    </View>
                  </Card>
                </ScrollView>
              </View>
            )}

            <View
              style={{
                borderTopWidth: 1.5,
                borderTopColor: "gray",
                marginTop: 15,
                width: "90%",
                marginLeft: "5%"
              }}
            >
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Saved or Purchased
                </Text>
                <View
                  style={{ borderWidth: 0.5, borderRadius: 10, marginTop: 10 }}
                >
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search by map name..." />
                  </Item>
                </View>
              </View>
            </View>

            <View style={{ marginBottom: 100, marginTop: 10 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Card
                  style={{
                    width: 200,
                    justifyContent: "flex-end",
                    marginLeft: 20
                  }}
                >
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
                  <Text style={{ marginLeft: "5%" }}>Best Picnic Spots</Text>
                  <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                    <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                    <Icon name="map-marker" type="FontAwesome" />
                    <Icon
                      name="map-marker"
                      type="FontAwesome"
                      style={{ marginLeft: 5 }}
                    />
                    <Text style={{ marginLeft: 10 }}>21 Pointers</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      marginBottom: 20,
                      marginTop: 10
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          marginLeft: "auto",
                          marginRight: "auto"
                        }}
                      >
                        View
                      </Text>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        marginLeft: 10,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 16
                        }}
                      >
                        Edit
                      </Text>
                    </Button>
                    <Button
                      onPress={() => this._showPopup("Gluten Free Lunch Spots")}
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        marginLeft: 10,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 16
                        }}
                      >
                        Delete
                      </Text>
                    </Button>
                  </View>
                </Card>

                <Card
                  style={{
                    width: 200,
                    justifyContent: "flex-end",
                    marginLeft: 20
                  }}
                >
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
                  <Text style={{ marginLeft: "5%" }}>Best Picnic Spots</Text>
                  <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                    <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                    <Icon name="map-marker" type="FontAwesome" />
                    <Icon
                      name="map-marker"
                      type="FontAwesome"
                      style={{ marginLeft: 5 }}
                    />
                    <Text style={{ marginLeft: 10 }}>21 Pointers</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      marginBottom: 20,
                      marginTop: 10
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          marginLeft: "auto",
                          marginRight: "auto"
                        }}
                      >
                        View
                      </Text>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        marginLeft: 10,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 16
                        }}
                      >
                        Edit
                      </Text>
                    </Button>
                    <Button
                      onPress={() => this._showPopup("Gluten Free Lunch Spots")}
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        marginLeft: 10,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 16
                        }}
                      >
                        Delete
                      </Text>
                    </Button>
                  </View>
                </Card>
                <Card
                  style={{
                    width: 200,
                    justifyContent: "flex-end",
                    marginLeft: 20,
                    marginRight: 20
                  }}
                >
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
                  <Text style={{ marginLeft: "5%" }}>Best Picnic Spots</Text>
                  <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                    <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                    <Icon name="map-marker" type="FontAwesome" />
                    <Icon
                      name="map-marker"
                      type="FontAwesome"
                      style={{ marginLeft: 5 }}
                    />
                    <Text style={{ marginLeft: 10 }}>21 Pointers</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      marginBottom: 20,
                      marginTop: 10
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          marginLeft: "auto",
                          marginRight: "auto"
                        }}
                      >
                        View
                      </Text>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        marginLeft: 10,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 16
                        }}
                      >
                        Edit
                      </Text>
                    </Button>
                    <Button
                      onPress={() => this._showPopup("Gluten Free Lunch Spots")}
                      style={{
                        backgroundColor: "lightgray",
                        height: 30,
                        marginLeft: 10,
                        width: 50
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: "auto",
                          marginRight: "auto",
                          fontSize: 16
                        }}
                      >
                        Delete
                      </Text>
                    </Button>
                  </View>
                </Card>
              </ScrollView>

              <View
                style={{
                  width: "100%",
                  // backgroundColor: "lightgray",
                  padding: 10,
                  flexDirection: "row"
                }}
              >
                <Icon name="home" type="Ionicons" style={{}} />
                <Text style={{ marginLeft: 5, width: "95%" }}>
                  {/* <Icon name="ios-arrow-back" type="Ionicons" style={{}} /> */}
                  TEST xxxxxxxxcvdjkn sdfnjxcn jksnfjn TEST xxx xxxx xcvdjkn
                  sdfnjxcn jksnfjn TEST xxx TEST xxxxxxxxcvdjkn sdfnjxcn jksnfjn
                  TEST xxx xxxx xcvdjkn sdfnjxcn jksnfjn TEST xxx TEST
                  xxxxxxxxcvdjkn sdfnjxcn jksnfjn TEST xxx xxxx xcvdjkn sdfnjxcn
                  jksnfjn TEST xxx
                </Text>
              </View>
            </View>
            {/* </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Saved;
