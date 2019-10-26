/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
  Platform
} from "react-native";
import { Avatar, Button, Icon, Header } from "react-native-elements";
class MenuDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ismodalVisible: false,
      profilePic:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      username: "",
      UID: "",
      page: 1,
      loading: false,
      colors: [
        "#64BBFF",
        "#2FFAA1",
        "#D4FA51",
        "#63FA2F",
        "#CE64FF",
        "#FABA51",
        "#FF7964",
        "#FFE064",
        "#64ADFF",
        "#FF64C4",
        "#9ef442",
        "#ffcd70",
        "#c5ff70",
        "#70ff77",
        "#70ebff",
        "#ff9189",
        "#9385f2",
        "#ee71fc",
        "#37e8d9",
        "#36e87a",
        "#e89135",
        "#cd7cff"
      ],
      showCategories: false
    };
  }

  navLink(nav, text) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(nav);
          this.props.navigation.toggleDrawer();
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            size={Platform.OS === "android" ? 30 : 0}
            color="purple"
            animating
          />
        </View>
      );
    } else
      return (
        <View style={{ flex: 1 }}>
          <View>
            <View
              style={{
                backgroundColor: "#311627",
                height: 160,
                width: "100%",
                flexDirection: "row"
              }}
            >
              {this.state.profilePic === "" && (
                <Avatar
                  containerStyle={{ marginLeft: 30, marginTop: 40 }}
                  onPress={() => {
                    this.props.navigation.navigate("profile");
                  }}
                  size="large"
                  rounded
                  title="Add Profile Photo"
                  titleStyle={{ fontSize: 12, flexWrap: "wrap" }}
                />
              )}
              {this.state.profilePic !== "" && (
                <Avatar
                  containerStyle={{ marginLeft: 30, marginTop: 40 }}
                  onPress={() => {
                    this.props.navigation.navigate("profile");
                  }}
                  size="large"
                  rounded
                  source={{ uri: this.state.profilePic }}
                />
              )}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  marginLeft: 10,
                  marginTop: 60
                }}
              >
                {this.state.username !== "" ? this.state.username : "No Name"}
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              {this.navLink("ListingScreen", "Listings")}
              {this.navLink("MyProfile", "Create Map")}
              {this.navLink("firstScreen", "Places")}
              {this.navLink("reviews", "Reviews")}
              {this.navLink("profile", "Profile")}
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 20,
                    marginTop: 20,
                    color: "red"
                  }}
                >
                  Sign Outtt
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
  }
}

export default MenuDrawer;
