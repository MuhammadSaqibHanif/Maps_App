import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Input, Icon } from "native-base";
import { Button } from "native-base";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

class CustomSliderMarkerRight extends Component {
  render() {
    return (
      <Image
        source={require("../../assets/images/multiply-black.png")}
        style={{ width: 17, height: 17, alignSelf: "flex-end" }}
      />
    );
  }
}

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [0, 9]
    };
  }

  // enableScroll = () => this.setState({ scrollEnabled: true });

  // disableScroll = () => this.setState({ scrollEnabled: false });

  multiSliderValuesChange = values => {
    this.setState({
      values
    });
  };

  render() {
    const {} = this.state;

    // console.log("map_update >>>", this.props.navigation.state.params);

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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity style={{ width: "20%" }} onPress={() => true}>
              <Text
                style={{ fontSize: 16, color: "black", textAlign: "center" }}
              >
                Clear All
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 24,
                color: "black",
                width: "60%",
                textAlign: "center"
              }}
            >
              Filter
            </Text>

            <TouchableOpacity
              style={{ width: "20%" }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Image
                source={require("../../assets/images/multiply-black.png")}
                style={{ width: 17, height: 17, alignSelf: "flex-end" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header */}

        <View>
          <ScrollView>
            <View style={{ borderTopWidth: 1, marginBottom: 150 }}>
              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: "5%" }}
                >
                  Price
                </Text>

                <View style={{ alignSelf: "center" }}>
                  <MultiSlider
                    values={[this.state.values[0], this.state.values[1]]}
                    sliderLength={280}
                    onValuesChange={this.multiSliderValuesChange}
                    min={0}
                    max={10}
                    step={1}
                    // customMarker={
                    // return (

                    //   <Image
                    //   source={require("../../assets/images/multiply-black.png")}
                    //   style={{ width: 17, height: 17, alignSelf: "flex-end" }}
                    //   />
                    //   )
                    // }
                    customMarkerLeft={e => {
                      return (
                        <View currentValue={e.currentValue}>
                          <Image
                            source={require("../../assets/images/multiply-black.png")}
                            style={{
                              width: 17,
                              height: 17
                              // alignSelf: "flex-end"
                            }}
                          />
                        </View>
                      );
                    }}
                    customMarkerRight={e => {
                      return (
                        <CustomSliderMarkerRight
                          currentValue={e.currentValue}
                        />
                      );
                    }}
                  />
                </View>
              </View>

              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginLeft: "5%"
                    }}
                  >
                    Distance
                  </Text>
                  <Text
                    style={{
                      color: "gray",
                      marginLeft: 10,
                      fontSize: 16,
                      marginTop: 5
                    }}
                  >
                    from
                  </Text>
                  <View
                    style={{
                      width: 210,
                      height: 50,
                      borderWidth: 1,
                      flexDirection: "row",
                      marginLeft: 5,
                      marginTop: -8
                    }}
                  >
                    <Icon
                      name="search"
                      type="EvilIcons"
                      style={{ marginTop: 13 }}
                    />
                    <Input placeholder="Search" style={{ marginLeft: 5 }} />
                  </View>
                </View>
              </View>

              <View
                style={{ marginTop: "5%", height: 120, borderBottomWidth: 1 }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginLeft: "5%",
                    marginBottom: 5
                  }}
                >
                  Pointers
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>

                  <View style={{ marginTop: "0%" }}>
                    <Image
                      style={{ width: 50, height: 50, marginLeft: 7 }}
                      source={require("../../assets/images/map-spoon.png")}
                    />
                    <Text
                      style={{
                        color: "gray",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 5
                      }}
                    >
                      Food
                    </Text>
                  </View>
                </ScrollView>
              </View>

              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: "5%" }}
                >
                  Review Rating
                </Text>
              </View>

              <View
                style={{ marginTop: "5%", height: 100, borderBottomWidth: 1 }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginLeft: "5%" }}
                >
                  No of Pointer
                </Text>
              </View>

              <Button
                style={{
                  backgroundColor: "lightgreen",
                  width: "90%",
                  marginLeft: "5%",
                  marginTop: "5%"
                }}
              >
                <Text
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: "5%"
                  }}
                >
                  Show 72 Maps
                </Text>
              </Button>
              {/* <RangeSlider
    minValue={0}
    maxValue={100}
    tintColor={'#da0f22'}
    handleBorderWidth={1}
    handleBorderColor="#454d55"
    selectedMinimum={20}
    selectedMaximum={40}
    style={{ flex: 1, height: 70, padding: 10, backgroundColor: '#ddd' }}
    onChange={ (data)=>{ console.log(data);} }
  /> */}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Filters;
