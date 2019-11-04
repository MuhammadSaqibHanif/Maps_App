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
    height: 100,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   map_update: false
      given: false,
      recieved: false,
      starCount: 3.5
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
        <View style={{ marginLeft: "5%", width: "90%" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Created</Text>
          <View style={{}}>
            <Text style={{}}>
              Tap below to start creating maps of your favourite place
              recommendation to share withj the world
            </Text>
          </View>
          <Button
            style={{
              backgroundColor: "lightgreen",
              justifyContent: "center",
              marginTop: 20,
              borderRadius: 10
            }}
            onPress={() => this.props.navigation.navigate("CreatNewMap")}
          >
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            >
              Creating a New Map
            </Text>
          </Button>
        </View>

        <View
          style={{
            borderTopWidth: 1.5,
            borderTopColor: "gray",
            marginTop: 30,
            width: "90%",
            marginLeft: "5%"
          }}
        >
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Add to an Existing Map
            </Text>
            <View style={{ borderWidth: 0.5, borderRadius: 10, marginTop: 10 }}>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
              </Item>
            </View>
          </View>
        </View>

        <View style={{}}>
          <ScrollView>
            {/* <View> */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* <View style={{marginLeft:'5%'}}> */}
              <Card>
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
                <Text style={{ marginTop: 70 }}>Best Picnic Spots</Text>
                <View style={{ flexDirection: "row" }}>
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
                <View style={{ flexDirection: "row" }}>
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
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: 15,
                    marginBottom: 5
                  }}
                >
                  <Button
                    style={{ backgroundColor: "lightgreen", height: 30 }}
                    onPress={() =>
                      this.props.navigation.navigate("ExistingMap")
                    }
                  >
                    <Icon
                      name="plus"
                      type="AntDesign"
                      style={{ Color: "black" }}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginRight: 15
                      }}
                    >
                      Add to Map
                    </Text>
                  </Button>
                </View>
              </Card>

              <Card>
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
                <Text style={{ marginTop: 70 }}>Best Picnic Spots</Text>
                <View style={{ flexDirection: "row" }}>
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
                <View style={{ flexDirection: "row" }}>
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
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: 15,
                    marginBottom: 5
                  }}
                >
                  <Button
                    style={{ backgroundColor: "lightgreen", height: 30 }}
                    onPress={() =>
                      this.props.navigation.navigate("ExistingMap")
                    }
                  >
                    <Icon
                      name="plus"
                      type="AntDesign"
                      style={{ Color: "black" }}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginRight: 15
                      }}
                    >
                      Add to Map
                    </Text>
                  </Button>
                </View>
              </Card>

              <Card>
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
                <Text style={{ marginTop: 70 }}>Best Picnic Spots</Text>
                <View style={{ flexDirection: "row" }}>
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
                <View style={{ flexDirection: "row" }}>
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
                    justifyContent: "center",
                    flexDirection: "row",
                    marginTop: 15,
                    marginBottom: 5
                  }}
                >
                  <Button
                    style={{ backgroundColor: "lightgreen", height: 30 }}
                    onPress={() =>
                      this.props.navigation.navigate("ExistingMap")
                    }
                  >
                    <Icon
                      name="plus"
                      type="AntDesign"
                      style={{ Color: "black" }}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        marginRight: 15
                      }}
                    >
                      Add to Map
                    </Text>
                  </Button>
                </View>
              </Card>
              {/* </View> */}
            </ScrollView>
            {/* </View> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Create;
