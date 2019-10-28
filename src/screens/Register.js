import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";

class Register extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/splash.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../assets/images/splash_logo.png")}
            style={{ width: "90%", height: "50%" }}
            resizeMode="contain"
          />
        </View>

        {/* Buttons Start */}
        <View
          style={{
            flex: 2.5,
            width: "85%",
            alignSelf: "center",
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#3b5998",
              height: "14%",
              marginBottom: "5%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../assets/images/facebook-logo.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text
              style={{
                color: "#FFFFFF",
                marginLeft: "5%",
                fontSize: 20
              }}
            >
              Sign In with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PreferencesSet")}
            style={{
              backgroundColor: "#CC3333",
              height: "14%",
              marginBottom: "5%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../assets/images/google-logo.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text
              style={{
                color: "#FFFFFF",
                marginLeft: "5%",
                fontSize: 20
              }}
            >
              Sign In with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("EmailRegister")}
            style={{
              backgroundColor: "#008000",
              height: "14%",
              marginBottom: "5%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20
              }}
            >
              Register with Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#008000",
              height: "14%",
              marginBottom: "5%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ListingScreen")}
            style={{
              backgroundColor: "transparent",
              height: "5%",
              marginBottom: 15,
              width: "80%",
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1
              }}
            >
              Continue without signin in
            </Text>
          </TouchableOpacity>
        </View>
        {/* Buttons End */}
      </ImageBackground>
    );
  }
}

export default Register;
