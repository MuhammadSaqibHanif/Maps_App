import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

class ImageShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  render() {
    const { image } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            alignSelf: "flex-end",
            marginRight: 10
          }}
        >
          <Text style={{ fontSize: 36 }}>x</Text>
        </TouchableOpacity>

        <View style={{ justifyContent: "center" }}>
          <Image
            source={{ uri: image }}
            style={{ height: "90%" }}
            resizeMode="stretch"
          />
        </View>
      </View>
    );
  }
}

export default ImageShow;
