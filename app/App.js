import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StackNavigation />
        </GestureHandlerRootView>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
