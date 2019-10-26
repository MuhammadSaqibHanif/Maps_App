/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput
} from "react-native";
// Import { RTLView, RTLText } from react-native-rtl-layout
import {
  Header,
  Icon,
  Button,
  Input,
  Rating,
  ButtonGroup,
  CheckBox,
  SearchBar
} from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa"
  }
};

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      upCircle: true,
      downcircle: false
    };
  }
  taponUpDown = () => {
    this.setState({
      upCircle: !this.state.upCircle,
      downcircle: !this.state.downcircle
    });
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Header  
                   leftComponent={
                    <Icon  
                    name="ios-menu"
                    type="ionicon"
                    color="white"
                    size={Platform.OS==='ios'?30:40}
                     onPress={(e)=>{this.props.navigation.toggleDrawer(e)}}
                    />
                      }
                 
                  centerComponent={
                    <SearchBar
                    containerStyle={{width:wp('85%'),height:hp('8%'),marginBottom:18,backgroundColor:'#311627',borderColor:'#311627',borderBottomWidth:0,borderTopWidth:0}}
                    inputContainerStyle={{width:wp('80%'),height:hp('5%'),marginBottom:15,backgroundColor:'white'}}
                    lightTheme={true}
                    placeholder="Type Searching For Brunch..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    inputStyle={{backgroundColor:'white'}}
                  />
                  }
                  containerStyle={{backgroundColor:'#311627',
                  height: Platform.OS === 'ios' ? 70 :  70 - 10,alignItems:"center"}}
                  /> */}
        <Header
          leftContainerStyle={{ flexBasis: "10%", marginBottom: 18 }}
          centerContainerStyle={{ flexBasis: "80%", alignItems: "center" }}
          rightContainerStyle={{ flexBasis: "20%" }}
          collapsable={true}
          leftComponent={
            <Icon
              name="ios-menu"
              type="ionicon"
              color="white"
              size={Platform.OS === "ios" ? 30 : 40}
              onPress={e => {
                this.props.navigation.toggleDrawer(e);
              }}
            />
          }
          centerComponent={
            <Input
              onChangeText={text => this.setState({ searchText: text })}
              returnKeyType="search"
              onSubmitEditing={this.handleSearch}
              leftIcon={<Icon name="ios-search" type="ionicon" color="gray" />}
              placeholder={"Search For Brunch"}
              shake={true}
              inputContainerStyle={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 12,
                borderBottomColor: "white"
              }}
              containerStyle={{
                height: 45,
                flex: 1,
                alignItems: "center",
                alignSelf: "center"
              }}
              rightIcon={<Icon name="clear" type="material" color="black" />}
            />
          }
          containerStyle={{
            backgroundColor: "#311627",
            opacity: 0.8,
            alignItems: "center"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 5
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#41BB94",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: wp("40%"),
              borderRadius: 8,
              height: hp("7%")
            }}
          >
            <Icon name="target-two" type="foundation" color="black" size={30} />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Current Location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f6e9e0",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: wp("25%"),
              borderRadius: 8,
              height: hp("7%")
            }}
          >
            <Icon name="filter" type="foundation" color="black" size={30} />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f6e9e0",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: wp("25%"),
              borderRadius: 8,
              height: hp("7%")
            }}
          >
            <Icon name="sort" type="font-awesome-5" color="black" size={30} />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sort</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 5,
            marginTop: 10
          }}
        >
          Recommends For You
        </Text>

        <FlatList
          data={[
            "efwew",
            "ewfw",
            "ewfewfwe",
            "efwew",
            "ewfw",
            "ewfewfwe",
            "efwew",
            "ewfw",
            "ewfewfwe",
            "efwew",
            "ewfw",
            "ewfewfwe",
            "efwew",
            "ewfw",
            "ewfewfwe"
          ]}
          renderItem={({ title }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  borderBottomColor: "lightgray",
                  paddingBottom: 10,
                  borderBottomWidth: 1
                }}
              >
                <View style={{ width: wp("60%") }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  >
                    Best Food
                  </Text>
                  <Text style={{ fontSize: 18, marginLeft: 5, marginTop: 5 }}>
                    na aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </Text>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      marginLeft: 5,
                      marginTop: 5
                    }}
                  >
                    Free
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <Rating
                      type="star"
                      ratingCount={5}
                      imageSize={15}
                      ratingColor="black"
                      ratingBackgroundColor="#f6e9e0"
                      style={{
                        alignSelf: "flex-start",
                        marginTop: 5,
                        marginLeft: 5
                      }}
                      onFinishRating={this.ratingCompleted}
                    />
                    <Text style={{ fontSize: 18, marginLeft: 10 }}>
                      17 reviews
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      containerStyle={{ alignItems: "flex-start" }}
                      name="map-marker-radius"
                      type="material-community"
                      color="black"
                      size={40}
                    />
                    <Icon
                      containerStyle={{ alignItems: "flex-start" }}
                      name="map-marker-radius"
                      type="material-community"
                      color="black"
                      size={40}
                    />
                    <View style={{ alignSelf: "center" }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          marginLeft: 10
                        }}
                      >
                        48 pointers
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: wp("40%") }}>
                  <Image
                    source={{
                      uri: "https://staticmapmaker.com/img/google@2x.png"
                    }}
                    style={{ width: 140, height: 225 }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      position: "absolute",
                      bottom: 2,
                      backgroundColor: "white",
                      borderRadius: 8
                    }}
                  >
                    <Image
                      source={{
                        uri:
                          "http://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg"
                      }}
                      style={{ width: 40, height: 30 }}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        alignSelf: "flex-end",
                        marginLeft: 3,
                        fontWeight: "bold"
                      }}
                    >
                      John Doe
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            backgroundColor: "white",
            borderTopColor: "lightgray",
            borderTopWidth: 1,
            height: hp("8%"),
            width: wp("100%"),
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View>
            <Icon
              containerStyle={{ alignItems: "flex-start" }}
              name="search"
              type="feather"
              color="black"
              size={30}
            />
            <Text style={{ fontSize: 15 }}>Explore</Text>
          </View>
          <View>
            <Icon
              containerStyle={{ alignItems: "flex-start" }}
              name="pencil"
              type="material-community"
              color="black"
              size={30}
            />
            <Text style={{ fontSize: 15 }}>Create</Text>
          </View>
          <View>
            <Icon
              containerStyle={{ alignItems: "flex-start" }}
              name="map-marker-radius"
              type="material-community"
              color="black"
              size={30}
            />
            <Text style={{ fontSize: 15 }}>Map</Text>
          </View>
          <View>
            <Icon
              containerStyle={{ alignItems: "flex-start" }}
              name="heart"
              type="material-community"
              color="black"
              size={30}
            />
            <Text style={{ fontSize: 15 }}>Saved</Text>
          </View>
          <View>
            <Icon
              containerStyle={{ alignItems: "flex-start" }}
              name="account"
              type="material-community"
              color="black"
              size={30}
            />
            <Text style={{ fontSize: 15 }}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Listings;
