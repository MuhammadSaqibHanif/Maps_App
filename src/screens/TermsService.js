import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon, ListItem, List, Left, Right } from "native-base";
import { Switch } from "react-native-switch";
import HeaderITI from "../components/HeaderITI";
// import { Rating, AirbnbRating } from 'react-native-elements';
import StarRating from "react-native-star-rating";

class TermsService extends Component {
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
            middle_text="Terms of Service"
            middle_text_style={{ fontSize: 24, color: "black" }}
            second_icon_path={require("../../assets/images/multiply-black.png")}
            second_icon_style={{ width: 18, height: 18 }}
            second_icon_function={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}
        <ScrollView>
          <View style={{ marginLeft: "5%", width: "90%" }}>
            <Text style={{ fontWeight: "bold" }}>
              Many languages do not use articles (a, an, and the), or if they do
              exist, the way they are used may be different than in English.
              Multilingual writers often find article usage to be one of the
              most difficult concepts to learn. Although there are some rules
              about article usage to help, there are also quite a few
              exceptions. Therefore, learning to use articles accurately takes a
              long time. To master article usage, it is necessary to do a great
              deal of reading, notice how articles are used in published texts,
              and take notes that can apply back to your own writing.
            </Text>
            <Text style={{ marginTop: 10 }}>
              Sometimes article usage in English does not follow a specific
              rule. These expressions must be memorized instead. Here are some
              examples of phrases where article usage is not predictable:
              Destinations: go to the store, go to the bank, but go to school,
              go to church, go to bed, go home Locations: in school, at home, in
              bed, but in the hospital (in American English) Parts of the day:
              in the morning, in the evening, but at night Chores: mow the lawn,
              do the dishes, do the cleaning There are also numerous idiomatic
              expressions in English that contain nouns. Some of these also
              contain articles while others do not. Here are just a few
              examples: To give someone a hand In the end To be on time
            </Text>
            <Text style={{}}>
              Many languages do not use articles (a, an, and the), or if they do
              exist, the way they are used may be different than in English.
              Multilingual writers often find article usage to be one of the
              most difficult concepts to learn. Although there are some rules
              about article usage to help, there are also quite a few
              exceptions. Therefore, learning to use articles accurately takes a
              long time. To master article usage, it is necessary to do a great
              deal of reading, notice how articles are used in published texts,
              and take notes that can apply back to your own writing.
            </Text>
            <Text style={{ marginTop: 10, marginBottom: 20 }}>
              Many languages do not use articles (a, an, and the), or if they do
              exist, the way they are used may be different than in English.
              Multilingual writers often find article usage to be one of the
              most difficult concepts to learn. Although there are some rules
              about article usage to help, there are also quite a few
              exceptions. Therefore, learning to use articles accurately takes a
              long time. To master article usage, it is necessary to do a great
              deal of reading, notice how articles are used in published texts,
              and take notes that can apply back to your own writing.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TermsService;
