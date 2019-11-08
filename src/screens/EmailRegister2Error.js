import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Input, Item, Label } from "native-base";
import { CheckBox } from "react-native-elements";
import HeaderITI from "../components/HeaderITI";

class EmailRegister2Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      checked: false
    };
  }

  render() {
    const { email, checked } = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#48B693"
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
              source={require("../../assets/images/circle.png")}
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
            <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
              <Item stackedLabel style={{ width: "95%", marginBottom: 15 }}>
                <Label style={{ color: "#FFFFFF" }}>Email</Label>
                <Input
                  placeholder="Enter your email address"
                  placeholderTextColor="gray"
                  value={email}
                  onChangeText={text => this.setState({ email: text })}
                />
              </Item>
              <Text style={{ color: "red", marginTop: 5, marginLeft: 10 }}>
                Enter your email address. Enter your email address. Enter your
                email address
              </Text>

              <View style={{ flexDirection: "row", width: "95%" }}>
                <CheckBox
                  checkedIcon={
                    <Image
                      source={require("../../assets/images/circle-fill.png")}
                      style={{ width: 20, height: 20, alignSelf: "flex-start" }}
                    />
                  }
                  uncheckedIcon={
                    <Image
                      source={require("../../assets/images/circle.png")}
                      style={{ width: 20, height: 20, alignSelf: "flex-start" }}
                    />
                  }
                  checked={checked}
                  onPress={() => this.setState({ checked: !checked })}
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    width: "90%",
                    marginTop: 10,
                    textAlign: "justify"
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </Text>
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#C0C0C0",
                height: 50,
                marginTop: 30,
                flexDirection: "row",
                justifyContent: "center",
                // marginBottom: 20,
                alignItems: "center",
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              onPress={() => this.props.navigation.navigate("EmailRegister3")}
            >
              <Text
                style={{
                  color: "#48B693",
                  fontSize: 20
                }}
              >
                Add Your Email
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#C0C0C0",
                height: 50,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 20,
                alignItems: "center",
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              onPress={() => this.props.navigation.navigate("EmailRegister3")}
            >
              <Text
                style={{
                  color: "#48B693",
                  fontSize: 20
                }}
              >
                Add Your Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default EmailRegister2Error;
