import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon } from "native-base";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;

    return (
      <ScrollView
      // style={{
      //   flex: 1
      // }}
      >
        <View style={{ marginTop: 10 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
          >
            BookWormSuzie
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              justifyContent: "space-between",
              marginTop: 15
            }}
          >
            <Image
              source={{
                uri:
                  "https://images.pexels.com/photos/2694453/pexels-photo-2694453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }}
              resizeMode="stretch"
              style={{ height: 100, width: "35%" }}
            />
            <View style={{ width: "60%" }}>
              <Text style={{ fontSize: 18 }}>About Me...</Text>
              <Text
                numberOfLines={4}
                ellipsizeMode="tail"
                style={{ width: "100%" }}
              >
                I love to find cosy cafes and peaceful spots in cities all over
                the world, where I can curl up with a good book and relax. I
                love to find cosy cafes and peaceful spots in cities all over
                the world, where I can curl up with a good book and relax.
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 5,
              color: "green"
            }}
          >
            Edit Profile
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>My Maps</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PreferencesSet")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>My Preferences</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>Reviews</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Notifications")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>Notifications</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>Invite Friends</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>My Earnings</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>Help</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>Terms of Service</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>Give Feedback</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              borderTopColor: "gray",
              borderTopWidth: 1,
              paddingVertical: 8
            }}
          >
            <Text style={{ fontSize: 16 }}>Log Out</Text>
            <Icon name="home" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default MyAccount;
