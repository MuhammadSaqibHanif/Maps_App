import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "native-base";
import HeaderITI from "../components/HeaderITI";

class PreferencesSet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderItems = (iconName, iconType, iconSize, text) => {
    return (
      <TouchableOpacity
        onPress={() => this.setState({ [text]: !this.state[text] })}
        style={{
          marginRight: 10,
          width: 60
        }}
      >
        <Icon
          type={iconType}
          name={iconName}
          style={{
            fontSize: iconSize,
            textAlign: "center",
            color: this.state[text] ? "green" : "gray"
          }}
        />
        <Text
          style={{
            fontSize: 12,
            textAlignVertical: "center",
            textAlign: "center",
            color: this.state[text] ? "green" : "black",
            fontWeight: this.state[text] ? "bold" : "normal"
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* Header */}
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            marginBottom: 10,
            marginTop: 10
          }}
        >
          <HeaderITI
            first_icon_path={{}}
            first_icon_style={{ width: 21, height: 21 }}
            first_icon_function={() => true}
            middle_text="Your Preferences"
            middle_text_style={{ fontSize: 24 }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>

        {/* Body */}
        <View
          style={{
            flex: 8,
            borderTopColor: "#DCDCDC",
            borderTopWidth: 1,
            width: "100%",
            alignSelf: "center"
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{ width: "100%", alignSelf: "center", marginBottom: 10 }}
            >
              <Text style={{ fontSize: 14, textAlign: "center" }}>
                To save a map, we need to take a few details. To save a map, we
                need to take a few details.
              </Text>
            </View>

            {/* 1 */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "left",
                    marginLeft: 10
                  }}
                >
                  Diet
                </Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 5,
                    borderBottomColor: "#DCDCDC",
                    borderBottomWidth: 3,
                    paddingBottom: 10
                  }}
                >
                  {this._renderItems("home", "FontAwesome", 45, "Diary Free")}

                  {this._renderItems("home", "FontAwesome", 45, "Egg Free")}

                  {this._renderItems("home", "FontAwesome", 45, "Gluten Free")}

                  {this._renderItems("home", "FontAwesome", 45, "High Protein")}

                  {this._renderItems("home", "FontAwesome", 45, "Keto")}

                  {this._renderItems("home", "FontAwesome", 45, "Nut Free")}

                  {this._renderItems("home", "FontAwesome", 45, "Paleo")}

                  {this._renderItems("home", "FontAwesome", 45, "Pescatarian")}

                  {this._renderItems("home", "FontAwesome", 45, "Raw")}

                  {this._renderItems("home", "FontAwesome", 45, "Vega")}
                </View>
              </ScrollView>

              {/* 2 */}
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      textAlign: "left",
                      marginLeft: 10,
                      marginTop: 10
                    }}
                  >
                    Cuisines
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 5,
                      borderBottomColor: "#DCDCDC",
                      borderBottomWidth: 3,
                      paddingBottom: 10
                    }}
                  >
                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "Afternoon Tea"
                    )}

                    {this._renderItems("home", "FontAwesome", 45, "American")}

                    {this._renderItems("home", "FontAwesome", 45, "Barbeque")}

                    {this._renderItems("home", "FontAwesome", 45, "British")}

                    {this._renderItems("home", "FontAwesome", 45, "Brunch")}

                    {this._renderItems("home", "FontAwesome", 45, "Caribb")}
                  </View>
                </ScrollView>
              </View>

              {/* 3 */}
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      textAlign: "left",
                      marginLeft: 10,
                      marginTop: 10
                    }}
                  >
                    Drinks
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 5,
                      borderBottomColor: "#DCDCDC",
                      borderBottomWidth: 3,
                      paddingBottom: 10
                    }}
                  >
                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcde qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef werty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwety"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwery"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwert"
                    )}
                  </View>
                </ScrollView>
              </View>

              {/* 4 */}
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      textAlign: "left",
                      marginLeft: 10,
                      marginTop: 10
                    }}
                  >
                    Budget
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 5,
                      borderBottomColor: "#DCDCDC",
                      borderBottomWidth: 3,
                      paddingBottom: 10
                    }}
                  >
                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcde qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef werty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwety"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwery"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwert"
                    )}
                  </View>
                </ScrollView>
              </View>

              {/* 5 */}
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      textAlign: "left",
                      marginLeft: 10,
                      marginTop: 10
                    }}
                  >
                    Sports
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 5,
                      borderBottomColor: "#DCDCDC",
                      borderBottomWidth: 3,
                      paddingBottom: 10
                    }}
                  >
                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcde qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef werty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwety"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwery"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwert"
                    )}
                  </View>
                </ScrollView>
              </View>

              {/* 6 */}
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      textAlign: "left",
                      marginLeft: 10,
                      marginTop: 10
                    }}
                  >
                    Travel
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 5,
                      borderBottomColor: "#DCDCDC",
                      borderBottomWidth: 3,
                      paddingBottom: 10
                    }}
                  >
                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcde qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef werty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwety"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwery"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwert"
                    )}
                  </View>
                </ScrollView>
              </View>

              {/* 7 */}
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      textAlign: "left",
                      marginLeft: 10,
                      marginTop: 10
                    }}
                  >
                    Interests
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 5,
                      borderBottomColor: "#DCDCDC",
                      borderBottomWidth: 3,
                      paddingBottom: 10
                    }}
                  >
                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcde qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef werty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwety"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwerty"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwery"
                    )}

                    {this._renderItems(
                      "home",
                      "FontAwesome",
                      45,
                      "abcdef qwert"
                    )}
                  </View>
                </ScrollView>
              </View>
            </View>

            {/* 8 */}
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "left",
                    marginLeft: 10,
                    marginTop: 10
                  }}
                >
                  Daily Life
                </Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingLeft: 5,
                    borderBottomColor: "#DCDCDC",
                    borderBottomWidth: 3,
                    paddingBottom: 10
                  }}
                >
                  {this._renderItems("home", "FontAwesome", 45, "abcde qwerty")}

                  {this._renderItems("home", "FontAwesome", 45, "abcdef werty")}

                  {this._renderItems("home", "FontAwesome", 45, "abcdef qerty")}

                  {this._renderItems("home", "FontAwesome", 45, "abcdef qwety")}

                  {this._renderItems(
                    "home",
                    "FontAwesome",
                    45,
                    "abcdef qwerty"
                  )}

                  {this._renderItems("home", "FontAwesome", 45, "abcdef qwery")}

                  {this._renderItems("home", "FontAwesome", 45, "abcdef qwert")}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* Body */}

        {/* Footer */}
        <View
          style={{
            flex: 1,
            borderTopColor: "#DCDCDC",
            borderTopWidth: 1
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              height: "80%",
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
              Save
            </Text>
          </TouchableOpacity>
        </View>
        {/* Footer */}
      </View>
    );
  }
}

export default PreferencesSet;
