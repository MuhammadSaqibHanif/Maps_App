import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import HeaderITI from "../components/HeaderITI";

class Login extends Component {
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
            first_icon_path={require("../../assets/images/gobackwhite.png")}
            first_icon_style={{ width: 21, height: 21 }}
            first_icon_function={() => this.props.navigation.goBack()}
            middle_text="LOG IN"
            middle_text_style={{ fontSize: 24, color: "#FFFFFF" }}
            second_icon_path={{}}
            second_icon_style={{ width: 21, height: 21 }}
            second_icon_function={() => true}
          />
        </View>
        {/* Header */}

        <View
          style={{
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <View>
            <View style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
              <View style={{ marginBottom: 20 }}>
                <Input
                  label="Email"
                  labelStyle={{ color: "#FFFFFF" }}
                  placeholder="Enter your email address"
                  placeholderTextColor="gray"
                  value={email}
                  inputContainerStyle={{
                    borderColor: "#FFFFFF"
                  }}
                  rightIcon={<Icon name="user" size={24} color="white" />}
                  onChangeText={text => this.setState({ email: text })}
                />
                <Text style={{ color: "red", marginTop: 5, marginLeft: 10 }}>
                  Enter your email address
                </Text>
              </View>

              <View>
                <Input
                  label="Password"
                  labelStyle={{ color: "#FFFFFF" }}
                  placeholder="Enter your password"
                  placeholderTextColor="gray"
                  style={{ marginTop: 10 }}
                  value={password}
                  inputContainerStyle={{
                    borderColor: "#FFFFFF"
                  }}
                  onChangeText={text => this.setState({ password: text })}
                  secureTextEntry={true}
                  rightIcon={<Icon name="user" size={24} color="white" />}
                />
                <Text style={{ color: "red", marginTop: 5, marginLeft: 10 }}>
                  Enter your email address. Enter your email address. Enter your
                  email address
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                marginTop: 30,
                width: "100%",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#FFFFFF",
                  borderBottomColor: "#FFFFFF",
                  borderBottomWidth: 1
                }}
              >
                Forgot your password?
              </Text>
            </TouchableOpacity>
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
          >
            <Text
              style={{
                color: "#48B693",
                fontSize: 20
              }}
            >
              Enter Your Email Address
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
