import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
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
      location: null
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
    const { location } = this.state;

    console.log("location >>>", location);

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
              <Icon type="AntDesign" name="search1" />
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
              region={{
                latitude:
                  location !== null ? location.coords.latitude : 37.78825,
                longitude:
                  location !== null ? location.coords.longitude : -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
            >
              <Marker
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324
                }}
                // title={marker.title}
                // description={marker.description}
              />
            </MapView>
            <View
              style={{
                width: 50,
                height: "30%",
                backgroundColor: "black",
                alignSelf: "flex-end",
                marginBottom: "50%",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15
              }}
            >
              <Text style={{ color: "white" }}>Pointers</Text>
            </View>
          </View>

          {/* </ScrollView> */}
        </View>
      </View>
    );
  }
}

export default Map;
