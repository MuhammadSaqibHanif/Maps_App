import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Input, Item, Label } from "native-base";
import HeaderITI from "../components/HeaderITI";

class EmailRegister extends Component {
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
            first_icon_path={{}}
            first_icon_style={{ width: 21, height: 21 }}
            first_icon_function={() => true}
            middle_text=" "
            middle_text_style={{ fontSize: 24, color: "#FFFFFF" }}
            second_icon_path={require("../../assets/images/multiply.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}

        <View style={{ width: "80%", alignSelf: "center" }}>
          <Text style={{ color: "#FFFFFF", fontSize: 20, textAlign: "center" }}>
            To save a map, we need to take a few details...
          </Text>
          <View
            style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}
          >
            <Image
              source={require("../../assets/images/circle-fill.png")}
              style={{ width: 10, height: 10 }}
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
                <Label style={{ color: "#FFFFFF" }}>First Name</Label>
                <Input
                  placeholder="Enter your first name"
                  placeholderTextColor="gray"
                  value={email}
                  onChangeText={text => this.setState({ email: text })}
                />
              </Item>
              <Item stackedLabel style={{ width: "95%" }}>
                <Label style={{ color: "#FFFFFF" }}>Last Name</Label>

                <Input
                  placeholder="Enter your last name"
                  secureTextEntry={true}
                  placeholderTextColor="gray"
                  value={password}
                  onChangeText={text => this.setState({ password: text })}
                />
              </Item>
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
            onPress={() => this.props.navigation.navigate("EmailRegister2")}
          >
            <Text
              style={{
                color: "#48B693",
                fontSize: 20
              }}
            >
              Add Your First Name
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EmailRegister;
