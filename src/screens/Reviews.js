import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon, ListItem, List, Left, Right } from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import StarRating from "react-native-star-rating";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   map_update: false
      given: false,
      recieved: false,
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    const { map_update } = this.state;
    const { rating } = this.props;
    console.log("map_update >>>", map_update);

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
            middle_text="Reviews"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}
        <ScrollView contentContainerStyle={{ marginBottom: 100 }}>
          <View style={{}}>
            <ListItem>
              <Left>
                <Text style={{ fontSize: 16 }}>Reviews Given</Text>
              </Left>

              <Right>
                <TouchableOpacity
                  onPress={() => this.setState({ given: true })}
                >
                  {this.state.given == true ? (
                    <Icon
                      name="down"
                      type="AntDesign"
                      onPress={() => this.setState({ given: false })}
                    />
                  ) : (
                    <Icon name="right" type="AntDesign" />
                  )}
                </TouchableOpacity>
              </Right>
            </ListItem>
            {this.state.given == true && (
              <View>
                <Text
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 15,
                    marginTop: 10
                  }}
                >
                  12 Reviews
                </Text>
                <View
                  style={{
                    marginLeft: "5%",
                    flexDirection: "row",
                    marginTop: 15
                  }}
                >
                  <Icon name="map-marker" type="FontAwesome" />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Best Brunch in London
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: "5%", marginTop: 10 }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: "auto",
                      marginRight: "5%",
                      marginTop: 10
                    }}
                  >
                    <Text style={{ color: "gray" }}>19-Feb-2019</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: "5%" }}>
                  Love this map! Fantastic suggestion arround the capital. i'hv
                  tried3 so far really impress by them all, can't wait to try
                  more
                </Text>

                <View
                  style={{
                    marginLeft: "5%",
                    flexDirection: "row",
                    marginTop: 20
                  }}
                >
                  <Icon name="map-marker" type="FontAwesome" />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Best Brunch in London
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: "5%", marginTop: 10 }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: "auto",
                      marginRight: "5%",
                      marginTop: 10
                    }}
                  >
                    <Text style={{ color: "gray" }}>19-Feb-2019</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: "5%" }}>
                  Love this map! Fantastic suggestion arround the capital. i'hv
                  tried3 so far really impress by them all, can't wait to try
                  more
                </Text>

                <View
                  style={{
                    marginLeft: "5%",
                    flexDirection: "row",
                    marginTop: 20
                  }}
                >
                  <Icon name="map-marker" type="FontAwesome" />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Best Brunch in London
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: "5%", marginTop: 10 }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: "auto",
                      marginRight: "5%",
                      marginTop: 10
                    }}
                  >
                    <Text style={{ color: "gray" }}>19-Feb-2019</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: "5%" }}>
                  Love this map! Fantastic suggestion arround the capital. i'hv
                  tried3 so far really impress by them all, can't wait to try
                  more
                </Text>
              </View>
            )}
          </View>
          <View>
            <ListItem>
              <Left>
                <Text style={{ fontSize: 16 }}>Reviews Recieved</Text>
              </Left>

              <Right>
                <TouchableOpacity
                  onPress={() => this.setState({ recieved: true })}
                >
                  {this.state.recieved == true ? (
                    <Icon
                      name="down"
                      type="AntDesign"
                      onPress={() => this.setState({ recieved: false })}
                    />
                  ) : (
                    <Icon name="right" type="AntDesign" />
                  )}
                </TouchableOpacity>
              </Right>
            </ListItem>

            {this.state.recieved == true && (
              <View>
                <View
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 10
                  }}
                >
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={rating => this.onStarRatingPress(rating)}
                    fullStarColor={"green"}
                    starSize={20}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: 15
                  }}
                >
                  4.5 out of 5(170 reviews)
                </Text>
                <View
                  style={{
                    marginLeft: "5%",
                    flexDirection: "row",
                    marginTop: 15
                  }}
                >
                  <Icon name="map-marker" type="FontAwesome" />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Best Brunch in London
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: "5%", marginTop: 10 }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: "auto",
                      marginRight: "5%",
                      marginTop: 10
                    }}
                  >
                    <Text style={{ color: "gray" }}>19-Feb-2019</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: "5%" }}>
                  Love this map! Fantastic suggestion arround the capital. i'hv
                  tried3 so far really impress by them all, can't wait to try
                  more
                </Text>

                <View
                  style={{
                    marginLeft: "5%",
                    flexDirection: "row",
                    marginTop: 20
                  }}
                >
                  <Icon name="map-marker" type="FontAwesome" />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Best Brunch in London
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: "5%", marginTop: 10 }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: "auto",
                      marginRight: "5%",
                      marginTop: 10
                    }}
                  >
                    <Text style={{ color: "gray" }}>19-Feb-2019</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: "5%" }}>
                  Love this map! Fantastic suggestion arround the capital. i'hv
                  tried3 so far really impress by them all, can't wait to try
                  more
                </Text>

                <View
                  style={{
                    marginLeft: "5%",
                    flexDirection: "row",
                    marginTop: 20
                  }}
                >
                  <Icon name="map-marker" type="FontAwesome" />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 18,
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Best Brunch in London
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ marginLeft: "5%", marginTop: 10 }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={"green"}
                      starSize={20}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: "auto",
                      marginRight: "5%",
                      marginTop: 10
                    }}
                  >
                    <Text style={{ color: "gray" }}>19-Feb-2019</Text>
                  </View>
                </View>
                <Text style={{ marginLeft: "5%" }}>
                  Love this map! Fantastic suggestion arround the capital. i'hv
                  tried3 so far really impress by them all, can't wait to try
                  more
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Reviews;
