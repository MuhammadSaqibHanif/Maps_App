import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
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

class Earning extends Component {
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
      <View style={{ flex: 1 }}>
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
            middle_text="Your Earnings"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}

        <View style={{ marginLeft: "5%", width: "90%" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Your Maps
          </Text>
          <View
            style={{ borderWidth: 0.5, borderRadius: 10, marginBottom: 10 }}
          >
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search by map name..." />
            </Item>
          </View>
        </View>
        {/* <View style={{}}> */}
        <ScrollView>
          {/* <View> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* <View style={{marginLeft:'5%'}}> */}
            <Card style={{ width: 150, marginLeft: 20, marginRight: 20 }}>
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
              <Text style={{ fontSize: 16 }}>Best Picnic Spots</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Free</Text>

              <Text style={{ fontSize: 16, marginTop: 15 }}>You have made</Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "green" }}
              >
                $502
              </Text>
              <Text style={{ fontSize: 16 }}>from 81 saved</Text>
            </Card>

            <Card style={{ width: 150, marginRight: 20 }}>
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
              <Text style={{ fontSize: 16 }}>Best Picnic Spots</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Free</Text>

              <Text style={{ fontSize: 16, marginTop: 15 }}>You have made</Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "green" }}
              >
                $502
              </Text>
              <Text style={{ fontSize: 16 }}>from 81 saved</Text>
            </Card>

            <Card style={{ width: 150, marginRight: 20 }}>
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
              <Text style={{ fontSize: 16 }}>Best Picnic Spots</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Free</Text>

              <Text style={{ fontSize: 16, marginTop: 15 }}>You have made</Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "green" }}
              >
                $502
              </Text>
              <Text style={{ fontSize: 16 }}>from 81 saved</Text>
            </Card>
            {/* </View> */}
          </ScrollView>
          {/* </View> */}

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 40,
              marginLeft: "5%"
            }}
          >
            Total Earned :
            <Text style={{ color: "green", fontSize: 18, fontWeight: "bold" }}>
              $5895
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: "5%",
              marginBottom: 20
            }}
          >
            Current Balance :
            <Text
              style={{
                color: "green",
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              $5895
            </Text>
          </Text>
        </ScrollView>

        {/* Footer */}
        <View
          style={{
            // flex: 1,
            width: "100%",
            height: 60,

            // width: 50,
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
            onPress={() => this.props.navigation.navigate("ListingScreen")}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20
              }}
            >
              Withdraw $8.90
            </Text>
          </TouchableOpacity>
        </View>
        {/* Footer */}
      </View>
    );
  }
}

export default Earning;
