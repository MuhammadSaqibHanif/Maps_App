/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable*/
import React from "react";
import { Dimensions } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import ListingScreen from "../components/listingscreen";
import profile from "../components/profile";
import MyProfile from "../components/MyProfile";
import reviews from "../components/reviews";
import firstScreen from "../components/map Creation/firstScreen";
import mapform from "../components/map Creation/mapform";
import MenuDrawer from "../components/MenuDrawerComp";

import Register from "../src/screens/Register";
import Login from "../src/screens/Login";

const Width = Dimensions.get("window").width;

const AuthStack = createStackNavigator(
  {
    Register: Register,
    Login: Login
  },
  {
    headerMode: "none",
    initialRouteName: "Register"
  }
);

const Stack = createStackNavigator(
  {
    mapform: mapform,
    profile: profile,
    ListingScreen: ListingScreen,
    reviews,
    firstScreen,
    MyProfile
  },
  {
    headerMode: "none",
    initialRouteName: "ListingScreen"
  }
);

const drawerConfig = {
  drawerWidth: Width * 0.73,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const drawerNavigator = createDrawerNavigator(
  {
    AuthStack: AuthStack,
    HomeScreen: Stack
  },
  drawerConfig
);

export default createAppContainer(drawerNavigator);
