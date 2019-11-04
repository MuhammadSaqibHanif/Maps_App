import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  TextInput
} from "react-native";

import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Card,
  Left,
  Right,
  Textarea
} from "native-base";

import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import StarRating from "react-native-star-rating";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 350,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class FreeMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   map_update: false
      given: false,
      recieved: false,
      starCount: 3.5,
      input: null,
      text: null,
      cmt: false,
      heart: false
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
              <View style={{ marginTop: 0, marginBottom: 30 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  >
                    Gluten Free Launch Spots
                  </Text>
                  {/* <Icon name="pencil" type="EvilIcons" style={{marginRight:15}} onPress={()=>this.props.navigation.navigate("EditMap",{text: "My favourite place to go for launch arround the capital that are fantastic gluten free optional are All tried and tasted",title:"Gluten Free Launch Spots"})}/> */}
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

                <View style={{ marginLeft: "5%", width: "90%", marginTop: 5 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "row" }}>
                      <Icon name="map-marker" type="FontAwesome" style={{}} />
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
                        selectedStar={rating => this.onStarRatingPress(rating)}
                        fullStarColor={"green"}
                        starSize={15}
                      />
                      <Text style={{ marginLeft: 5 }}>86 reviews</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 48 }}>
                      <Icon name="clockcircleo" type="AntDesign" style={{}} />
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

                <View
                  style={{ marginTop: "5%", marginLeft: "5%", width: "90%" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={require("../../assets/images/img.jpg")}
                    />
                    <View style={{ marginTop: -5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          marginLeft: 5
                        }}
                      >
                        EveBradFord
                      </Text>
                      <View style={{ width: 100, marginLeft: 5 }}>
                        <StarRating
                          disabled={false}
                          maxStars={5}
                          rating={this.state.starCount}
                          selectedStar={rating =>
                            this.onStarRatingPress(rating)
                          }
                          fullStarColor={"green"}
                          starSize={10}
                          starStyle={{}}
                        />
                      </View>
                      <Text style={{ marginLeft: 5, width: "50%" }}>
                        Thank you Jan for all your faboluse suggestion My
                        Favourite is tell your
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: "row", marginTop: "5%" }}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={require("../../assets/images/img.jpg")}
                    />
                    <View style={{ marginTop: -5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          marginLeft: 5
                        }}
                      >
                        EveBradFord
                      </Text>
                      <View style={{ width: 100, marginLeft: 5 }}>
                        <StarRating
                          disabled={false}
                          maxStars={5}
                          rating={this.state.starCount}
                          selectedStar={rating =>
                            this.onStarRatingPress(rating)
                          }
                          fullStarColor={"green"}
                          starSize={10}
                          starStyle={{}}
                        />
                      </View>
                      <Text style={{ marginLeft: 5, width: "50%" }}>
                        Thank you Jan for all your faboluse suggestion My
                        Favourite is tell your
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: "row", marginTop: "5%" }}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={require("../../assets/images/img.jpg")}
                    />
                    <View style={{ marginTop: -5 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          marginLeft: 5
                        }}
                      >
                        EveBradFord
                      </Text>
                      <View style={{ width: 100, marginLeft: 5 }}>
                        <StarRating
                          disabled={false}
                          maxStars={5}
                          rating={this.state.starCount}
                          selectedStar={rating =>
                            this.onStarRatingPress(rating)
                          }
                          fullStarColor={"green"}
                          starSize={10}
                          starStyle={{}}
                        />
                      </View>
                      <Text style={{ marginLeft: 5, width: "50%" }}>
                        Thank you Jan for all your faboluse suggestion My
                        Favourite is tell your
                      </Text>
                    </View>
                  </View>

                  <View style={{ marginTop: 15 }}>
                    <Text
                      style={{
                        color: "green",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >
                      Read More Reviews
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", marginTop: "5%" }}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={require("../../assets/images/img.jpg")}
                    />
                    <View style={{}}>
                      <View style={{ width: 100, marginLeft: 15 }}>
                        <StarRating
                          disabled={false}
                          maxStars={5}
                          rating={this.state.starCount}
                          selectedStar={rating =>
                            this.onStarRatingPress(rating)
                          }
                          fullStarColor={"green"}
                          starSize={10}
                          starStyle={{}}
                        />
                      </View>
                      <View style={{ width: "90%", marginLeft: "5%" }}>
                        <Textarea
                          rowSpan={3}
                          bordered
                          placeholder="Textarea"
                          style={{ width: 200, borderRadius: 10 }}
                          onChangeText={text => {
                            this.setState({ text, cmt: true });
                          }}
                        />
                      </View>
                    </View>
                  </View>

                  {this.state.cmt == true ? (
                    <View style={{ marginTop: "5%" }}>
                      <Button
                        style={{
                          backgroundColor: "lightgreen",
                          width: 100,
                          marginLeft: "25%"
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 18,
                            fontWeight: "bold"
                          }}
                        >
                          Submit
                        </Text>
                      </Button>
                    </View>
                  ) : (
                    <View style={{ marginTop: "5%" }}>
                      <Button
                        style={{
                          backgroundColor: "lightgreen",
                          width: 150,
                          marginLeft: "25%"
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            fontSize: 18,
                            fontWeight: "bold"
                          }}
                        >
                          Add to Comment
                        </Text>
                      </Button>
                    </View>
                  )}
                </View>

                {/* <View style={{flexDirection:'row',marginLeft:"10%",marginTop:30}}>
                                            <View  style={{flexDirection:'row'}}>
                                                <Icon name="map-marker" type="FontAwesome" style={{}}/>
                                                <Text style={{marginLeft:"3%",marginTop:10}}>1 Pointer</Text>
                                            </View>
                                            <View style={{flexDirection:'row',marginLeft:"auto",}}>
                                                <Icon name="md-people" type="Ionicons" style={{}}/>
                                                <Text style={{marginLeft:"3%",marginTop:10,marginRight:"5%"}}>Visible to Everyone</Text>
                                            </View>
                                        </View>
                                */}
              </View>
            </View>
          </ScrollView>

          <View style={{ borderTopWidth: 1, borderTopColor: "gray" }}>
            <View style={{ flexDirection: "row" }}>
              <Left>
                <TouchableOpacity
                  onPress={() => this.setState({ heart: true })}
                >
                  {this.state.heart == true ? (
                    <View style={{ marginLeft: "5%" }}>
                      <Icon
                        name="hearto"
                        type="AntDesign"
                        style={{
                          marginTop: 0,
                          marginLeft: "13%",
                          color: "blue"
                        }}
                      />
                      <Text style={{ marginLeft: "10%" }}>Saved</Text>
                    </View>
                  ) : (
                    //   <Modal

                    //     visible={this.state.Alert_Visibility}

                    //     transparent={true}
                    //     backdropColor="black"

                    //     animationType={"fade"}

                    //     onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >

                    //         <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>

                    //             <View style={styles.Alert_Main_View}>

                    //                 <Text style={styles.Alert_Title}>Delete <Text style={{color:'green',fontWeight:'bold'}}>'Gluten Free Launched Spot'</Text>?</Text>

                    //                 <View style={{ width: '100%', height: 2}} />

                    //                 <Text style={styles.Alert_Message}> Are You Sure you want to delete your map </Text>
                    //                 <Text  style={styles.Alert_Message}> You will be no longer be able to access oir edit your map. Any one who has saved or purchased your map will will still be able to access or achieved version of this map</Text>

                    //                 <View style={{ width: '100%', height: 1, backgroundColor: 'black'}} />

                    //                 <View style={{flexDirection: 'row', height: '14%'}}>

                    //                     <TouchableOpacity
                    //                         style={styles.buttonStyle}
                    //                         onPress={this.ok_Button}
                    //                         activeOpacity={0.7}
                    //                         >

                    //                         <Text style={styles.TextStyle}> No, Cancel </Text>

                    //                     </TouchableOpacity>

                    //                     <View style={{ width: 1, height: '100%', backgroundColor: 'black'}} />

                    //                     <TouchableOpacity
                    //                         style={styles.buttonStyle}
                    //                         onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} }
                    //                         activeOpacity={0.7}
                    //                         >
                    //                         <Text style={styles.TextStyle}> Yes Delete </Text>
                    //                     </TouchableOpacity>
                    //                 </View>
                    //             </View>

                    //         </View>

                    //     </Modal>

                    <View style={{ marginLeft: "5%" }}>
                      <Icon
                        name="hearto"
                        type="AntDesign"
                        style={{ marginTop: 0, marginLeft: "10%" }}
                      />
                      <Text style={{ marginLeft: "10%" }}>Save</Text>
                    </View>
                  )}
                </TouchableOpacity>
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
                <Text style={{ width: 70, marginRight: "5%" }}>Download</Text>
              </Right>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default FreeMap;
