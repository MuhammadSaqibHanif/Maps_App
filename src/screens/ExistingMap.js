import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Card,
  Left,
  Right
} from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import StarRating from "react-native-star-rating";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: "90%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class ExistingMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   map_update: false
      given: false,
      recieved: false,
      starCount: 3.5
    };
  }

  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }

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
          <Header searchBar rounded style={{ backgroundColor: "#34282C" }}>
            <Icon
              name="ios-arrow-back"
              type="Ionicons"
              style={{ marginTop: 13, color: "white" }}
            />
            <Item
              style={{ backgroundColor: "lightbrown" }}
              style={{ marginLeft: 10, backgroundColor: "white" }}
            >
              <Icon type="AntDesign" name="search1" />
              <Input placeholder="Search your another pointer.." />
            </Item>
          </Header>
        </View>
        {/* Header */}

        <View style={{ marginBottom: 130 }}>
          <ScrollView>
            <View style={{ width: "100%", marginBottom: 30 }}>
              <View style={{ height: 350 }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    width: "75%",
                    justifyContent: "center",
                    height: 40,
                    backgroundColor: "#34282C",
                    marginLeft: 10
                  }}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    ...or tap anywhere to add another pointer
                  </Text>
                </View>
                {/* <Image
                  style={{ width: "100%", height: "90%" }}
                  source={require("../../assets/images/map.jpg")}
                /> */}
                <View style={styles.container}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121
                    }}
                  />
                </View>
              </View>
              <View style={{ marginTop: 10, marginBottom: 30 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginLeft: "auto",
                      marginRight: "10%"
                    }}
                  >
                    Gluten Free Launch Spots
                  </Text>
                  <Icon
                    name="pencil"
                    type="EvilIcons"
                    style={{ marginRight: 15 }}
                    onPress={() =>
                      this.props.navigation.navigate("EditMap", {
                        text:
                          "My favourite place to go for launch arround the capital that are fantastic gluten free optional are All tried and tasted",
                        title: "Gluten Free Launch Spots"
                      })
                    }
                  />
                </View>

                <View style={{}}>
                  <Text style={{ marginLeft: 5, textAlign: "center" }}>
                    My favourite place to go for launch arround the capital that
                    are fantastic gluten free optional are All tried and tasted
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "gray",
                      fontSize: 16,
                      fontWeight: "bold",
                      marginTop: 2
                    }}
                  >
                    $2.00
                  </Text>
                </View>

                {this.props.navigation.state &&
                this.props.navigation.state.params &&
                this.props.navigation.state.params.route == "Save" ? (
                  <View>
                    <View
                      style={{ marginLeft: "5%", width: "90%", marginTop: 5 }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                          <Icon
                            name="map-marker"
                            type="FontAwesome"
                            style={{}}
                          />
                          <View style={{ marginLeft: "3%" }}>
                            <Text
                              style={{
                                marginLeft: "3%",
                                fontSize: 14,
                                fontWeight: "bold"
                              }}
                            >
                              1 Pointer
                            </Text>
                            <Text
                              style={{
                                marginLeft: "3%",
                                fontSize: 12,
                                color: "gray"
                              }}
                            >
                              (1 Currently open)
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 60 }}>
                          <Icon name="hearto" type="AntDesign" style={{}} />
                          <View style={{ marginLeft: "3%" }}>
                            <Text
                              style={{
                                marginLeft: "3%",
                                fontSize: 16,
                                fontWeight: "bold"
                              }}
                            >
                              0 Save
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <View style={{ flexDirection: "row" }}>
                          <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={rating =>
                              this.onStarRatingPress(rating)
                            }
                            fullStarColor={"green"}
                            starSize={15}
                          />
                          <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 48 }}>
                          <Icon
                            name="clockcircleo"
                            type="AntDesign"
                            style={{}}
                          />
                          <View style={{ marginLeft: "3%" }}>
                            <Text
                              style={{
                                marginLeft: "3%",
                                fontSize: 14,
                                color: "gray"
                              }}
                            >
                              Last Updated
                            </Text>
                            <Text
                              style={{
                                marginLeft: "3%",
                                fontSize: 14,
                                color: "gray",
                                fontWeight: "bold"
                              }}
                            >
                              9th Jun 2019
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    {/* <View style={{marginTop:10,borderTopWidth:1,borderTopColor:'gray',  }}>
                                        <View style={{flexDirection:'row'}}>
                                            
                                            <Left>
                                                <Icon name="pencil" type="EvilIcons" style={{marginTop:0,marginLeft:'10%'}}/>
                                                <Text style={{marginLeft:'10%'}}>Edit</Text>
                                            </Left>
                                            <View style={{marginTop:5}}>
                                            <Icon name="paper-plane-o" type="FontAwesome" style={{}}/>
                                                <Text style={{width:70}}>
                                                Share
                                                </Text>
                                            </View>
                                            <Right>
                                            <Icon name="clouddownloado" type="AntDesign" style={{marginRight:50,marginTop:5}}/>   
                                                <Text style={{width:70,marginRight:"10%"}}>
                                                    Download 
                                                </Text>
                                            </Right>
                                        
                                        
                                        </View>
                                        </View> */}
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "10%",
                      marginTop: 30
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="map-marker" type="FontAwesome" style={{}} />
                      <Text style={{ marginLeft: "3%", marginTop: 10 }}>
                        1 Pointer
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: "auto" }}>
                      <Icon name="md-people" type="Ionicons" style={{}} />
                      <Text
                        style={{
                          marginLeft: "3%",
                          marginTop: 10,
                          marginRight: "5%"
                        }}
                      >
                        Visible to Everyone
                      </Text>
                    </View>
                  </View>
                )}

                {/* <View style={{flexDirection:'row',marginLeft:"10%",marginTop:30}}>
                                            <View  style={{flexDirection:'row'}}>
                                                <Icon name="map-marker" type="FontAwesome" style={{}}/>
                                                <Text style={{marginLeft:"3%",marginTop:10}}>1 Pointer</Text>
                                            </View>
                                            <View style={{flexDirection:'row',marginLeft:"auto",}}>
                                                <Icon name="md-people" type="Ionicons" style={{}}/>
                                                <Text style={{marginLeft:"3%",marginTop:10,marginRight:"5%"}}>Visible to Everyone</Text>
                                            </View>
                                        </View> */}
              </View>
            </View>
          </ScrollView>
          {this.props.navigation.state &&
            this.props.navigation.state.params &&
            this.props.navigation.state.params.route == "Save" && (
              <View style={{ borderTopWidth: 1, borderTopColor: "gray" }}>
                <View style={{ flexDirection: "row" }}>
                  <Left>
                    <Icon
                      name="pencil"
                      type="EvilIcons"
                      style={{ marginTop: 0, marginLeft: "10%" }}
                    />
                    <Text style={{ marginLeft: "10%" }}>Edit</Text>
                  </Left>
                  <View style={{ marginTop: 5, marginLeft: 10 }}>
                    <Icon name="paper-plane-o" type="FontAwesome" style={{}} />
                    <Text style={{ width: 40 }}>Share</Text>
                  </View>
                  <Right>
                    <Icon
                      name="clouddownloado"
                      type="AntDesign"
                      style={{ marginRight: 40, marginTop: 5 }}
                    />
                    <Text style={{ width: 70, marginRight: "5%" }}>
                      Download
                    </Text>
                  </Right>
                </View>
              </View>
            )}
        </View>
      </View>
    );
  }
}

export default ExistingMap;
