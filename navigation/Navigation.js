import React from "react";
import { Dimensions } from "react-native";
import { Icon } from "react-native-elements";

import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
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
import MyAccount from "../src/screens/MyAccount";
import Notifications from "../src/screens/Notifications";
import Reviews from "../src/screens/Reviews";
import InviteFriends from "../src/screens/InviteFriends";
import Help from "../src/screens/Help";
import TermsService from "../src/screens/TermsService";
import FeedBack from "../src/screens/FeedBack";
import Saved from "../src/screens/Saved";
import Earning from "../src/screens/Earning";
import Create from "../src/screens/Create";
import CreatNewMap from "../src/screens/CreatNewMap";
import ExistingMap from "../src/screens/ExistingMap";
import EditMap from "../src/screens/EditMap";
import ModalDelete from "../src/screens/ModalDelete";
import Filters from "../src/screens/Filters";
import FreeMap from "../src/screens/FreeMap";
import Map from "../src/screens/Map";

const Width = Dimensions.get("window").width;

////////////////////////// AuthStack //////////////////////////

const AuthStack = createStackNavigator(
  {
    Register,
    Login,
    EmailRegister,
    EmailRegister2,
    EmailRegister3,
    EmailRegister4,
    EmailRegister5
  },
  {
    headerMode: "none"
  }
);

////////////////////////// AuthStack //////////////////////////

////////////////////////// ExploreStack //////////////////////////

const ExploreStack = createStackNavigator(
  {
    ListingScreen,
    PreferencesSet,
    mapform,
    profile,
    reviews,
    firstScreen,
    MyProfile,
    Reviews,
    Earning,
    ExistingMap,
    EditMap,
    ModalDelete,
    Filters,
    FreeMap
  },
  {
    headerMode: "none",
    initialRouteName: "ListingScreen"
  }
);

ExploreStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  // navigation.state.routes.map(route => {
  //   if (route.routeName === "Updates" || route.routeName === "SinglePost") {
  //     tabBarVisible = true;
  //   } else {
  //     tabBarVisible = false;
  //   }
  // });

  return {
    tabBarVisible,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" type="feather" color={tintColor} size={30} />
    )
  };
};

////////////////////////// ExploreStack //////////////////////////

////////////////////////// CreateStack //////////////////////////

const CreateStack = createStackNavigator(
  {
    Create,
    CreatNewMap
  },
  {
    headerMode: "none"
  }
);

CreateStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  return {
    tabBarVisible,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="pencil"
        type="material-community"
        color={tintColor}
        size={30}
      />
    )
  };
};

////////////////////////// CreateStack //////////////////////////

////////////////////////// MapStack //////////////////////////

const MapStack = createStackNavigator(
  {
    Map
  },
  {
    headerMode: "none"
  }
);

MapStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name="map-marker-radius"
      type="material-community"
      color={tintColor}
      size={30}
    />
  )
};

////////////////////////// MapStack //////////////////////////

////////////////////////// SavedStack //////////////////////////

const SavedStack = createStackNavigator(
  {
    Saved
  },
  {
    headerMode: "none"
  }
);

SavedStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  return {
    tabBarVisible,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="heart"
        type="material-community"
        color={tintColor}
        size={30}
      />
    )
  };
};

////////////////////////// SavedStack //////////////////////////

////////////////////////// AccountStack //////////////////////////

const AccountStack = createStackNavigator(
  {
    MyAccount,
    Notifications,
    InviteFriends,
    Help,
    TermsService,
    FeedBack
  },
  {
    headerMode: "none"
  }
);

AccountStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  return {
    tabBarVisible,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="account"
        type="material-community"
        color={tintColor}
        size={30}
      />
    )
  };
};

////////////////////////// AccountStack //////////////////////////

////////////////////////// BottomTabs //////////////////////////

const BottomTabs = createBottomTabNavigator(
  {
    Explore: ExploreStack,
    Create: CreateStack,
    Map: MapStack,
    Saved: SavedStack,
    Account: AccountStack
  },
  {
    tabBarOptions: {
      activeTintColor: "gray",
      inactiveTintColor: "black",
      showLabel: true,
      style: {
        backgroundColor: "#FFFFFF"
      }
    }
  }
);

////////////////////////// BottomTabs //////////////////////////

const App = createSwitchNavigator(
  {
    AuthStack: {
      screen: AuthStack
    },
    BottomTabs: {
      screen: BottomTabs
    }
  },
  {
    initialRouteName: "AuthStack"
  }
);

////////////////////////// DrawerConfig //////////////////////////

const DrawerConfig = {
  drawerWidth: Width * 0.73,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const drawerNavigator = createDrawerNavigator(
  {
    App
  },
  DrawerConfig
);

////////////////////////// DrawerConfig //////////////////////////

export default createAppContainer(drawerNavigator);
