import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WorkBudgetScreen from "../Screens/WorkBudgetScreen";
import PersonalBudgetScreen from "../Screens/PersonalBudgetScreen";
import AllBudgetScreen from "../Screens/AllBudgetScreen";
import { Dimensions } from "react-native";
import { Colors } from "../Utils/Colors";

// Material top tab navigator for the 3 tabs.

const TopTabs = createMaterialTopTabNavigator();
const { width } = Dimensions.get("window");
function TopTabNavigator() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: Colors.secondary,
          width: width * 0.06,
          marginLeft: width * 0.14,
        },
        tabBarLabelStyle: {
          textTransform: "none",
        },
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      <TopTabs.Screen name="All" component={AllBudgetScreen} />
      <TopTabs.Screen name="Personal" component={PersonalBudgetScreen} />
      <TopTabs.Screen name="Work" component={WorkBudgetScreen} />
    </TopTabs.Navigator>
  );
}

export default TopTabNavigator;
