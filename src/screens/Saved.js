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
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
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
      //   map_update: false
      given: false,
      recieved: false,
      starCount: 3.5,
      text: false
    };
  }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    const { map_update } = this.state;
    const { rating } = this.props;
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
            middle_text="Saved"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}
        <ScrollView>
          <View style={{ marginLeft: "5%", width: "90%" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Created by your
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
                          this.props.navigation.navigate("EditMap", {
                            title: "Best Picnic Spot",
                            text: "abc"
                          })
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
                          this.props.navigation.navigate("EditMap", {
                            title: "Best Picnic Spot",
                            text: "abc"
                          })
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
            {/* </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Saved;
