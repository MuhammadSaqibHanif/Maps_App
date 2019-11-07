import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon, ListItem, List, Left, Right, Item, Input } from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import StarRating from "react-native-star-rating";

class Help extends Component {
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
            middle_text="Help"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}

        <View
          style={{
            borderWidth: 0.5,
            borderRadius: 10,
            marginBottom: 10,
            width: "90%",
            height: 45,
            justifyContent: "center",
            paddingHorizontal: 5,
            alignSelf: "center"
          }}
        >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search help articels..." />
          </Item>
        </View>

        <ScrollView>
          <View style={{}}>
            <ListItem>
              <Left>
                <Text style={{ fontSize: 16 }}>Getting Start</Text>
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
              <List>
                <ListItem style={{ marginLeft: 40 }}>
                  <Left>
                    <Text style={{ fontSize: 16 }}>Creating an Account</Text>
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
                  <Text
                    style={{
                      width: "80%",
                      marginLeft: "12%",
                      borderBottomWidth: 0.3
                    }}
                  >
                    sdafvadsvdsfvdsavdagvaegerageargaaegeag
                    ssvcdasvdvsdfvdvavaaegeagerageagea
                    savdvsdddvvvvvvvvgvgerafgveragverageabhgrab bera
                    sdafvadsvdsfvdsavdagvaegerageargaaegeag
                    ssvcdasvdvsdfvdvavaaegeagerageagea
                    savdvsdddvvvvvvvvgvgerafgveragverageabhgrab bera
                  </Text>
                )}

                <ListItem style={{ marginLeft: 40 }}>
                  <Left>
                    <Text style={{ fontSize: 16 }}>Discovering Map</Text>
                  </Left>

                  <Right>
                    <TouchableOpacity>
                      <Icon name="right" type="AntDesign" />
                    </TouchableOpacity>
                  </Right>
                </ListItem>

                <ListItem style={{ marginLeft: 40 }}>
                  <Left>
                    <Text style={{ fontSize: 16 }}>How do i Create a Map</Text>
                  </Left>

                  <Right>
                    <TouchableOpacity>
                      <Icon name="right" type="AntDesign" />
                    </TouchableOpacity>
                  </Right>
                </ListItem>

                <ListItem style={{ marginLeft: 40 }}>
                  <Left>
                    <Text style={{ fontSize: 16 }}>
                      Why Do I Have to Pay Account to Access Some Map
                    </Text>
                  </Left>

                  <Right>
                    <TouchableOpacity>
                      <Icon name="right" type="AntDesign" />
                    </TouchableOpacity>
                  </Right>
                </ListItem>
              </List>
            )}
          </View>

          <ListItem>
            <Left>
              <Text style={{ fontSize: 16 }}>About Pointer</Text>
            </Left>

            <Right>
              <TouchableOpacity>
                <Icon name="right" type="AntDesign" />
              </TouchableOpacity>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text style={{ fontSize: 16 }}>Create a Map</Text>
            </Left>

            <Right>
              <TouchableOpacity>
                <Icon name="right" type="AntDesign" />
              </TouchableOpacity>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text style={{ fontSize: 16 }}>Purchasing a Map</Text>
            </Left>

            <Right>
              <TouchableOpacity>
                <Icon name="right" type="AntDesign" />
              </TouchableOpacity>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text style={{ fontSize: 16 }}>Reviews</Text>
            </Left>

            <Right>
              <TouchableOpacity>
                <Icon name="right" type="AntDesign" />
              </TouchableOpacity>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text style={{ fontSize: 16 }}>Payment</Text>
            </Left>

            <Right>
              <TouchableOpacity>
                <Icon name="right" type="AntDesign" />
              </TouchableOpacity>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text style={{ fontSize: 16 }}>Your Account</Text>
            </Left>

            <Right>
              <TouchableOpacity>
                <Icon name="right" type="AntDesign" />
              </TouchableOpacity>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text style={{ fontSize: 16 }}>Contact us</Text>
            </Left>

            <Right>
              <TouchableOpacity>
                <Icon name="right" type="AntDesign" />
              </TouchableOpacity>
            </Right>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
}

export default Help;
