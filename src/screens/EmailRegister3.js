import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import HeaderITI from "../components/HeaderITI";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Overlay } from "react-native-elements";

class EmailRegister3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isVisible: false
    };
  }
  componentDidMount() {
    this.setState({
      isVisible: true
    });
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
                "Pointer" Wants to Use
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
                  Allow
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
              source={require("../../assets/images/circle.png")}
              style={{ width: 10, height: 10, marginLeft: 8 }}
            />
            <Image
              source={require("../../assets/images/circle.png")}
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
            <View style={{ marginTop: 20 }}>
              <Input
                label="Your City"
                labelStyle={{ color: "#FFFFFF" }}
                placeholder="Enter your city"
                placeholderTextColor="gray"
                value={email}
                inputContainerStyle={{
                  borderColor: "#FFFFFF"
                }}
                rightIcon={<Icon name="user" size={24} color="white" />}
                onChangeText={text => this.setState({ email: text })}
              />
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
            onPress={() => this.props.navigation.navigate("EmailRegister4")}
          >
            <Text
              style={{
                color: "#48B693",
                fontSize: 20
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EmailRegister3;
