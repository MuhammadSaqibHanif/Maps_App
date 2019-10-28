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
import EmailRegister from "../src/screens/EmailRegister";
import EmailRegister2 from "../src/screens/EmailRegister2";
import EmailRegister3 from "../src/screens/EmailRegister3";
import EmailRegister4 from "../src/screens/EmailRegister4";
import EmailRegister5 from "../src/screens/EmailRegister5";
import PreferencesSet from "../src/screens/PreferencesSet";

const Width = Dimensions.get("window").width;

const Stack = createStackNavigator(
  {
    Register: Register,
    Login: Login,
    EmailRegister: EmailRegister,
    EmailRegister2: EmailRegister2,
    EmailRegister3: EmailRegister3,
    EmailRegister4: EmailRegister4,
    EmailRegister5: EmailRegister5,
    PreferencesSet: PreferencesSet,
    mapform: mapform,
    profile: profile,
    ListingScreen: ListingScreen,
    reviews,
    firstScreen,
    MyProfile
  },
  {
    headerMode: "none",
    initialRouteName: "Register"
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
    HomeScreen: Stack
  },
  drawerConfig
);

export default createAppContainer(drawerNavigator);
