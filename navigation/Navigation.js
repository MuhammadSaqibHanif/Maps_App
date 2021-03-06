import React from "react";
import { Dimensions } from "react-native";
import { Icon } from "react-native-elements";

import {
  createAppContainer,
  createStackNavigator,
  // createDrawerNavigator,
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
import SelectedMap from "../src/screens/SelectedMap";
import Map from "../src/screens/Map";
import EmailRegister2Error from "../src/screens/EmailRegister2Error";
import ShareMap from "../src/screens/ShareMap";
import SelectedOfflineMap from "../src/screens/SelectedOfflineMap";
import PointerSelected from "../src/screens/PointerSelected";
import ImageShow from "../src/screens/ImageShow";
import PaidMap from "../src/screens/PaidMap";
import PurchasedMap from "../src/screens/PurchasedMap";
import AddPointerMyMap from "../src/screens/AddPointerMyMap";
import ExistingPointerSelected from "../src/screens/ExistingPointerSelected";
import SearchForLocation from "../src/screens/SearchForLocation";
import NoPointerYet from "../src/screens/NoPointerYet";
import CreateLocationSearch from "../src/screens/CreateLocationSearch";
import CreateSelectIcon from "../src/screens/CreateSelectIcon";
import CreateEditMap from "../src/screens/CreateEditMap";
import CreateAddedPointer from "../src/screens/CreateAddedPointer";

const Width = Dimensions.get("window").width;

////////////////////////// AuthStack //////////////////////////

const AuthStack = createStackNavigator(
  {
    Register,
    Login,
    EmailRegister,
    EmailRegister2,
    EmailRegister2Error,
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
    // Reviews,
    Earning,
    ExistingMap,
    EditMap,
    ModalDelete,
    Filters,
    SelectedMap,
    ShareMap,
    SelectedOfflineMap,
    PointerSelected,
    ImageShow,
    PaidMap,
    PurchasedMap,
    AddPointerMyMap
  },
  {
    headerMode: "none",
    initialRouteName: "ListingScreen"
  }
);

ExploreStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  navigation.state.routes.map(route => {
    if (
      route.routeName === "SelectedMap" ||
      route.routeName === "ShareMap" ||
      route.routeName === "PointerSelected" ||
      route.routeName === "ImageShow" ||
      route.routeName === "PaidMap" ||
      route.routeName === "ExistingMap" ||
      route.routeName === "PurchasedMap" ||
      route.routeName === "AddPointerMyMap" ||
      route.routeName === "SelectedOfflineMap"
    ) {
      tabBarVisible = false;
    } else {
      tabBarVisible = true;
    }
  });

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
    CreatNewMap,
    NoPointerYet,
    CreateLocationSearch,
    CreateSelectIcon,
    CreateEditMap,
    CreateAddedPointer
  },
  {
    headerMode: "none"
  }
);

CreateStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  navigation.state.routes.map(route => {
    if (
      route.routeName === "CreatNewMap" ||
      route.routeName === "CreateLocationSearch" ||
      route.routeName === "CreateSelectIcon" ||
      route.routeName === "CreateEditMap" ||
      route.routeName === "CreateAddedPointer" ||
      route.routeName === "NoPointerYet"
    ) {
      tabBarVisible = false;
    } else {
      tabBarVisible = true;
    }
  });

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
    Map,
    ExistingPointerSelected,
    SearchForLocation
  },
  {
    headerMode: "none"
  }
);

MapStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  navigation.state.routes.map(route => {
    if (
      route.routeName === "ExistingPointerSelected" ||
      route.routeName === "SearchForLocation"
    ) {
      tabBarVisible = false;
    } else {
      tabBarVisible = true;
    }
  });

  return {
    tabBarVisible,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="map-marker-radius"
        type="material-community"
        color={tintColor}
        size={30}
      />
    )
  };
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
    Reviews,
    PreferencesSet,
    Notifications,
    InviteFriends,
    Help,
    TermsService,
    FeedBack,
    Earning,
    Saved
  },
  {
    headerMode: "none"
  }
);

AccountStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  navigation.state.routes.map(route => {
    if (
      route.routeName === "Reviews" ||
      route.routeName === "Notifications" ||
      route.routeName === "InviteFriends" ||
      route.routeName === "Help" ||
      route.routeName === "Earning" ||
      route.routeName === "TermsService" ||
      route.routeName === "FeedBack" ||
      route.routeName === "PreferencesSet"
    ) {
      tabBarVisible = false;
    } else {
      tabBarVisible = true;
    }
  });

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
      activeTintColor: "green",
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

// const DrawerConfig = {
//   drawerWidth: Width * 0.73,
//   contentComponent: ({ navigation }) => {
//     return <MenuDrawer navigation={navigation} />;
//   }
// };

// const drawerNavigator = createDrawerNavigator(
//   {
//     App
//   },
//   DrawerConfig
// );

////////////////////////// DrawerConfig //////////////////////////

export default createAppContainer(App);
