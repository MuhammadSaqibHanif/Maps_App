import React, { Component } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { Input, Item, Button, Label } from "native-base";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signIn = () => {
    const { email, password } = this.state;
  };

  render() {
    const { email, password } = this.state;

    // console.log("SignIn this.props >>>", this.props);

    return (
      //   <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#48B693"
        }}
      >
        <View>
          <Item stackedLabel style={{ width: "90%", marginBottom: 15 }}>
            <Label>Eamil</Label>
            <Input
              placeholder="Username/Email/Phone"
              placeholderTextColor="gray"
              value={email}
              onChangeText={text => this.setState({ email: text })}
            />
          </Item>
          <Item stackedLabel style={{ width: "90%" }}>
            <Label>Password</Label>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="gray"
              value={password}
              onChangeText={text => this.setState({ password: text })}
            />
          </Item>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            width: "90%",
            alignItems: "flex-end"
          }}
        >
          <Text
            style={{ fontSize: 18, color: "purple" }}
            // onPress={() => this.props.navigation.navigate("ForgetPassword")}
          >
            Forget my password
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Button
            warning
            onPress={() => this.signIn()}
            style={{
              borderRadius: 5
            }}
          >
            <Text
              style={{
                color: "white",
                marginLeft: 70,
                marginRight: 70,
                fontSize: 20
              }}
            >
              Login
            </Text>
          </Button>
        </View>
      </View>
      //   </KeyboardAvoidingView>
    );
  }
}

export default Login;
