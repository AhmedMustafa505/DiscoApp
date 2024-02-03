import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { store } from "./src/Redux/store";
import InsightsAndBudgetScreen from "./src/Screens/InsightsAndBudgetScreen";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <InsightsAndBudgetScreen />
        </NavigationContainer>
      </Provider>
    </>
  );
}
