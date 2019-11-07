import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon } from "native-base";
import { Overlay } from "react-native-elements";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isVisible: false
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
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                Log Out
              </Text>
              <Text style={{ textAlign: "center", marginTop: 5 }}>
                Are you sure you want to
              </Text>
              <Text style={{ textAlign: "center" }}>log out?</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                borderTopWidth: 1,
                width: "100%",
                paddingTop: 5
              }}
            >
              <TouchableOpacity style={{ borderRightWidth: 1, width: "50%" }}>
                <Text
                  style={{ textAlignVertical: "center", textAlign: "center" }}
                >
                  No, Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: "50%" }}>
                <Text
                  style={{ textAlignVertical: "center", textAlign: "center" }}
                >
                  Yes, Please
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>

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
            onPress={() => this.props.navigation.navigate("Saved")}
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
            onPress={() => this.props.navigation.navigate("Reviews")}
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
            onPress={() => this.props.navigation.navigate("InviteFriends")}
          >
            <Text style={{ fontSize: 16 }}>Invite Friends</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Earning")}
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
            onPress={() => this.props.navigation.navigate("Help")}
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
            onPress={() => this.props.navigation.navigate("TermsService")}
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
            onPress={() => this.props.navigation.navigate("FeedBack")}
          >
            <Text style={{ fontSize: 16 }}>Give Feedback</Text>
            <Icon name="home" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setState({
                isVisible: true
              })
            }
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
