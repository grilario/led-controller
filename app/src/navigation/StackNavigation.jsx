import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  PresentationConfigScreen,
  PresentationControlScreen,
  PresentationDashboardScreen,
} from "../screens/PresentationsScreen";
import LedControllerScreen from "../screens/LedControllerScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right"
      }}
    >
      <Stack.Screen
        name="PresentationControl"
        component={PresentationControlScreen}
      />
      <Stack.Screen
        name="PresentationDashboard"
        component={PresentationDashboardScreen}
      />
      <Stack.Screen
        name="PresentationConfig"
        component={PresentationConfigScreen}
      />
      <Stack.Screen name="LedController" component={LedControllerScreen} options={{presentation: "modal", animation: "flip"}} />
    </Stack.Navigator>
  );
}
