import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Header, Item, Input, Icon } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
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
    this.state = {};
  }

  render() {
    const {} = this.state;

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
              <Input placeholder="Search your another pointer.." />
            </Item>
          </Header>
        </View>
        {/* Header */}

        <View>
          <ScrollView>
            <View style={{ width: "100%" }}>
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
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Map;
