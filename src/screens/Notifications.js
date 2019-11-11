import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  StyleSheet
} from "react-native";

import HeaderITI from "../components/HeaderITI";

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 30,
    backgroundColor: "grey",
    flexDirection: "row",
    overflow: "visible",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: -2,
      height: 2
    }
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "grey",
    alignSelf: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  activeContainer: {
    backgroundColor: "grey",
    flexDirection: "row-reverse"
  },
  label: {
    alignSelf: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 6,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      value2: props.value2,
      value3: props.value3,
      value4: props.value4,
      value5: props.value5,

      // value: false,
      // value2: props.value2,
      // value3: props.value3,
      // value4: props.value4,
      // value5: props.value5,
      map_update: false
    };
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // update local state.value if props.value changes....
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  toggle1() {
    // define how we will use LayoutAnimation to give smooth transition between state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const newValue = !this.state.value;
    this.setState({
      value: newValue
    });

    // fire function if exists
    if (typeof this.props.onValueChange === "function") {
      this.props.onValueChange(newValue);
    }
  }

  toggle2() {
    // define how we will use LayoutAnimation to give smooth transition between state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const newValue = !this.state.value2;
    this.setState({
      value2: newValue
    });

    // fire function if exists
    if (typeof this.props.onValueChange === "function") {
      this.props.onValueChange(newValue);
    }
  }

  toggle3() {
    // define how we will use LayoutAnimation to give smooth transition between state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const newValue = !this.state.value3;
    this.setState({
      value3: newValue
    });

    // fire function if exists
    if (typeof this.props.onValueChange === "function") {
      this.props.onValueChange(newValue);
    }
  }

  toggle4() {
    // define how we will use LayoutAnimation to give smooth transition between state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const newValue = !this.state.value4;
    this.setState({
      value4: newValue
    });

    // fire function if exists
    if (typeof this.props.onValueChange === "function") {
      this.props.onValueChange(newValue);
    }
  }

  toggle5() {
    // define how we will use LayoutAnimation to give smooth transition between state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const newValue = !this.state.value5;
    this.setState({
      value5: newValue
    });

    // fire function if exists
    if (typeof this.props.onValueChange === "function") {
      this.props.onValueChange(newValue);
    }
  }

  render() {
    const { map_update, value, value2, value3, value4, value5 } = this.state;

    // console.log("map_update >>>", map_update);

    return (
      <View style={{ flex: 1 }}>
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
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Email Notificatons
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "98%",
                alignSelf: "center"
              }}
            >
              <Text style={{ marginLeft: 15, width: 250 }}>
                Occassionally,we'd like to on email aboutnew map that you may be
                intrested in or new features on the app
              </Text>

              {/* Switch Button */}
              <TouchableOpacity
                onPress={this.toggle1}
                style={{
                  marginRight: 5
                }}
              >
                <View
                  style={[styles.container, value && styles.activeContainer]}
                >
                  <View style={styles.circle} />
                  <Text style={styles.label}>{value ? "YES" : "NO"}</Text>
                </View>
              </TouchableOpacity>
              {/* Switch Button */}
            </View>
            <View
              onPress={() => this.props.navigation.navigate("PreferencesSet")}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                borderTopColor: "gray",
                // borderTopWidth: 1,
                paddingVertical: 8
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
                Push Notification
              </Text>
            </View>
            <View style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8
                  // backgroundColor: 'yellow'
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Map Updates
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "98%",
                  alignSelf: "center"
                }}
              >
                <Text style={{ marginLeft: 15, width: 250, color: "gray" }}>
                  When a map you have a saved or purchased has been update by
                  the creator
                </Text>

                {/* Switch Button */}
                <TouchableOpacity
                  onPress={this.toggle2}
                  style={{
                    marginRight: 5
                  }}
                >
                  <View
                    style={[styles.container, value2 && styles.activeContainer]}
                  >
                    <View style={styles.circle} />
                    <Text style={styles.label}>{value2 ? "YES" : "NO"}</Text>
                  </View>
                </TouchableOpacity>
                {/* Switch Button */}
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Permanent Closures
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "98%",
                  alignSelf: "center"
                }}
              >
                <Text style={{ marginLeft: 15, width: 250, color: "gray" }}>
                  When a location is in the map you have created become
                  permanently closed so that you can remove it friom your map
                </Text>

                {/* Switch Button */}
                <TouchableOpacity
                  onPress={this.toggle3}
                  style={{
                    marginRight: 5
                  }}
                >
                  <View
                    style={[styles.container, value3 && styles.activeContainer]}
                  >
                    <View style={styles.circle} />
                    <Text style={styles.label}>{value3 ? "YES" : "NO"}</Text>
                  </View>
                </TouchableOpacity>
                {/* Switch Button */}
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Purchases/Save
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "98%",
                  alignSelf: "center"
                }}
              >
                <Text style={{ marginLeft: 15, width: 250, color: "gray" }}>
                  When a map you have created purchased or save by anothert user
                </Text>

                {/* Switch Button */}
                <TouchableOpacity
                  onPress={this.toggle4}
                  style={{
                    marginRight: 5
                  }}
                >
                  <View
                    style={[styles.container, value4 && styles.activeContainer]}
                  >
                    <View style={styles.circle} />
                    <Text style={styles.label}>{value4 ? "YES" : "NO"}</Text>
                  </View>
                </TouchableOpacity>
                {/* Switch Button */}
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignSelf: "center",
                  borderTopColor: "gray",
                  // borderTopWidth: 1,
                  paddingVertical: 8
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Reviews
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "98%",
                  alignSelf: "center",
                  marginBottom: 40
                }}
              >
                <Text style={{ marginLeft: 15, width: 250, color: "gray" }}>
                  When a map you have created or received a review from another
                  user
                </Text>

                {/* Switch Button */}
                <TouchableOpacity
                  onPress={this.toggle5}
                  style={{
                    marginRight: 5
                  }}
                >
                  <View
                    style={[styles.container, value5 && styles.activeContainer]}
                  >
                    <View style={styles.circle} />
                    <Text style={styles.label}>{value5 ? "YES" : "NO"}</Text>
                  </View>
                </TouchableOpacity>
                {/* Switch Button */}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Footer */}
        <View
          style={{
            // flex: 1,
            width: "100%",
            height: 60,

            // width: 50,
            borderTopColor: "#DCDCDC",
            borderTopWidth: 1
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              height: 45,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto"
            }}
            onPress={() => this.props.navigation.navigate("ListingScreen")}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20
              }}
            >
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
        {/* Footer */}
      </View>
    );
  }
}

// Notifications.propTypes = {
//   onValueChange: React.PropTypes.func,
//   value: React.PropTypes.bool
// };

// Notifications.defaultProps = {};

export default Notifications;
