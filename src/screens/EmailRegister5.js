import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Input, Item, Label } from "native-base";
import HeaderITI from "../components/HeaderITI";
import { Overlay } from "react-native-elements";

class EmailRegister5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isVisible: false
    };
  }

  render() {
    const { email } = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#48B693"
        }}
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
                "Pointer" Would Like to
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                Send You Notification
              </Text>
              <Text style={{ textAlign: "center", marginTop: 5 }}>
                This allows the app and website to
              </Text>
              <Text style={{ textAlign: "center" }}>
                share informationabout you.
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
                  Don't Allow
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
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>

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
            first_icon_path={require("../../assets/images/gobackwhite.png")}
            first_icon_style={{ width: 21, height: 21 }}
            first_icon_function={() => this.props.navigation.goBack()}
            middle_text="REGISTER"
            middle_text_style={{ fontSize: 24, color: "#FFFFFF" }}
            second_icon_path={{}}
            second_icon_style={{ width: 21, height: 21 }}
            second_icon_function={() => true}
          />
        </View>
        {/* Header */}

        <View style={{ width: "80%", alignSelf: "center" }}>
          <View
            style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}
          >
            <Image
              source={require("../../assets/images/circle-fill.png")}
              style={{ width: 10, height: 10 }}
            />
            <Image
              source={require("../../assets/images/circle-fill.png")}
              style={{ width: 10, height: 10, marginLeft: 8 }}
            />
            <Image
              source={require("../../assets/images/circle-fill.png")}
              style={{ width: 10, height: 10, marginLeft: 8 }}
            />
            <Image
              source={require("../../assets/images/circle-fill.png")}
              style={{ width: 10, height: 10, marginLeft: 8 }}
            />
            <Image
              source={require("../../assets/images/circle-fill.png")}
              style={{ width: 10, height: 10, marginLeft: 8 }}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <View>
            <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
              <Item stackedLabel style={{ width: "95%", marginBottom: 15 }}>
                <Label style={{ color: "#FFFFFF" }}>About You</Label>
                <Input
                  placeholder="Enter a unique username"
                  placeholderTextColor="gray"
                  value={email}
                  onChangeText={text => this.setState({ email: text })}
                />
              </Item>

              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    width: "100%",
                    marginTop: 10,
                    textAlign: "justify"
                  }}
                >
                  Profile Picture
                </Text>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    backgroundColor: "#C0C0C0",
                    justifyContent: "center",
                    width: 100,
                    height: 80
                  }}
                >
                  <Image
                    source={require("../../assets/images/add.png")}
                    style={{
                      width: 30,
                      height: 30,
                      alignSelf: "center"
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#C0C0C0",
              height: 50,
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 20,
              alignItems: "center",
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            onPress={() =>
              this.setState({
                isVisible: true
              })
            }
          >
            <Text
              style={{
                color: "#48B693",
                fontSize: 20
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EmailRegister5;
