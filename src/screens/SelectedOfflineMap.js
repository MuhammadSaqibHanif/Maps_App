import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { Icon } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import HeaderITI from "../components/HeaderITI";

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderWidth: 1,
    width: "60%",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class SelectedOfflineMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map_update: false
    };
  }

  render() {
    const { map_update } = this.state;

    // console.log("map_update >>>", map_update);

    return (
      <View
        style={{
          flex: 1
          //  justifyContent: "space-between"
        }}
      >
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
            middle_text=" "
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}

        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 5,
                textAlign: "center",
                fontSize: 18,
                marginBottom: 15
              }}
            >
              Download this map?
            </Text>

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
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 15,
                textAlign: "center"
              }}
            >
              Best picnic Spots
            </Text>
            <Text style={{ textAlign: "center" }}>
              Love pointer? share the love by
            </Text>

            <View
              style={{
                justifyContent: "flex-end",
                marginTop: 10,
                alignContent: "flex-end",
                width: "100%"
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 120,
                  width: "80%",
                  alignSelf: "center"
                }}
              >
                Love pointer? share the love by Love pointer? share the love by
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "green",

                  width: "90%",
                  alignSelf: "center",
                  marginBottom: 10,
                  // flexDirection: "row",

                  paddingVertical: 10,
                  marginTop: "5%"
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SelectedOfflineMap;
