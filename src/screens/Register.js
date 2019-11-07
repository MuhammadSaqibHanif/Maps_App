import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import { Overlay } from "react-native-elements";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      popUp_content: ""
    };
  }

  _showPopup = content => {
    this.setState({
      isVisible: true,
      popUp_content: content
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/splash.jpg")}
        style={{ width: "100%", height: "100%" }}
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
                  fontWeight: "bold"
                }}
              >
                "Pointer" Wants to Use
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                {`"${this.state.popUp_content}" to Sign In`}
              </Text>
              <Text style={{ textAlign: "center", marginTop: 5 }}>
                This allows the app and website to
              </Text>
              <Text style={{ textAlign: "center" }}>
                share informationabout you.
              </Text>
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
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    color: "blue"
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: "50%" }}>
                <Text
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    color: "blue"
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>

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
            onPress={() => this._showPopup("facebook.com")}
            style={{
              backgroundColor: "#3b5998",
              borderRadius: 5,
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
            onPress={() => this._showPopup("google.com")}
            style={{
              backgroundColor: "#CC3333",
              borderRadius: 5,
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
              borderRadius: 5,
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
              borderRadius: 5,
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
