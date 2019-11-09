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
    width: "60%",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class ShareMap extends Component {
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
            middle_text="Share"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}

        <ScrollView>
          <View style={{ marginTop: 20 }}>
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
                marginTop: 5,
                textAlign: "center"
              }}
            >
              Best picnic Spots
            </Text>
            <Text style={{ textAlign: "center" }}>
              Love pointer? share the love by
            </Text>
            <View>
              <View
                style={{
                  backgroundColor: "green",
                  width: "90%",
                  marginLeft: "5%",
                  flexDirection: "row",
                  borderRadius: 10,
                  paddingVertical: 10,
                  marginTop: "10%"
                }}
              >
                <Icon
                  name="whatsapp"
                  type="FontAwesome"
                  style={{ marginLeft: "30%" }}
                />
                <Text
                  style={{ fontSize: 18, marginLeft: 10, fontWeight: "bold" }}
                >
                  WhatsApp
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "green",
                  width: "90%",
                  marginLeft: "5%",
                  flexDirection: "row",
                  borderRadius: 10,
                  paddingVertical: 10,
                  marginTop: "5%"
                }}
              >
                <Icon
                  name="envelope"
                  type="EvilIcons"
                  style={{ marginLeft: "30%" }}
                />
                <Text
                  style={{ fontSize: 18, marginLeft: 10, fontWeight: "bold" }}
                >
                  Messenger
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "green",
                  width: "90%",
                  marginLeft: "5%",
                  flexDirection: "row",
                  borderRadius: 10,
                  paddingVertical: 10,
                  marginTop: "5%"
                }}
              >
                <Icon
                  name="envelope"
                  type="EvilIcons"
                  style={{ marginLeft: "30%" }}
                />
                <Text
                  style={{ fontSize: 18, marginLeft: 10, fontWeight: "bold" }}
                >
                  Email
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "green",
                  width: "90%",
                  marginLeft: "5%",
                  flexDirection: "row",
                  borderRadius: 10,
                  paddingVertical: 10,
                  marginTop: "5%"
                }}
              >
                <Icon
                  name="envelope"
                  type="EvilIcons"
                  style={{ marginLeft: "30%" }}
                />
                <Text
                  style={{ fontSize: 18, marginLeft: 10, fontWeight: "bold" }}
                >
                  SMS
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "green",
                  width: "90%",
                  marginLeft: "5%",
                  flexDirection: "row",
                  borderRadius: 10,
                  paddingVertical: 10,
                  marginTop: "5%"
                }}
              >
                <Icon
                  name="paperclip"
                  type="AntDesign"
                  style={{ marginLeft: "30%" }}
                />
                <Text
                  style={{ fontSize: 18, marginLeft: 10, fontWeight: "bold" }}
                >
                  Copy Link
                </Text>
              </View>
            </View>

            <View>
              <View
                style={{
                  backgroundColor: "green",
                  width: "90%",
                  marginLeft: "5%",
                  flexDirection: "row",
                  borderRadius: 10,
                  paddingVertical: 10,
                  marginTop: "5%"
                }}
              >
                <Icon
                  name="dots-three-horizontal"
                  type="Entypo"
                  style={{ marginLeft: "30%" }}
                />
                <Text
                  style={{ fontSize: 18, marginLeft: 10, fontWeight: "bold" }}
                >
                  More
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ShareMap;
