import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon } from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map_update: false
    };
  }

  render() {
    const { map_update } = this.state;

    console.log("map_update >>>", map_update);

    return (
      <View>
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
            middle_text="Notifications"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}

        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",

                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Email Notificatons</Text>

              <Switch
                value={false}
                onValueChange={val => console.log(val)}
                disabled={false}
                activeText={"On"}
                inActiveText={"Off"}
                circleSize={20}
                barHeight={1}
                circleBorderWidth={3}
                backgroundActive={"green"}
                backgroundInactive={"gray"}
                circleActiveColor={"#30a566"}
                circleInActiveColor={"#000000"}
                changeValueImmediately={true}
                // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                innerCircleStyle={{
                  alignItems: "center",
                  justifyContent: "center"
                }} // style for inner animated circle for what you (may) be rendering inside the circle
                outerCircleStyle={{}} // style for outer animated circle
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
              />
            </View>

            <View
              onPress={() => this.props.navigation.navigate("PreferencesSet")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>My Preferences</Text>
              <Switch
                value={map_update}
                onValueChange={val => {
                  this.setState({
                    map_update: !map_update
                  });
                }}
                disabled={false}
                activeText="On"
                inActiveText={"Off"}
                backgroundActive={"green"}
                backgroundInactive={"gray"}
                circleActiveColor={"#30a566"}
                circleInActiveColor={"#000000"}
              />
            </View>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Reviews</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Notifications</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Invite Friends</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>My Earnings</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Help</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Terms of Service</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Give Feedback</Text>
              <Icon name="home" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 16 }}>Log Out</Text>
              <Icon name="home" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Notifications;
