import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

const HeaderITI = ({
  first_icon_path,
  first_icon_style,
  first_icon_function,
  middle_text,
  middle_text_style,
  second_icon_path,
  second_icon_style,
  second_icon_function
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <TouchableOpacity onPress={first_icon_function}>
        <Image source={first_icon_path} style={first_icon_style} />
      </TouchableOpacity>

      <Text style={middle_text_style}>{middle_text}</Text>

      <TouchableOpacity onPress={second_icon_function}>
        <Image source={second_icon_path} style={second_icon_style} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderITI;
