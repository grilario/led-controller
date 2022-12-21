import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ref, set, onValue } from "firebase/database";
import { database } from "../../firebaseConfig";

export default function LedController() {
  const [ledRedStatus, setLedRedStatus] = useState(false);
  const [ledGreenStatus, setLedGreenStatus] = useState(false);
  const [ledYellowStatus, setLedYellowStatus] = useState(false);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const eventRed = onValue(ref(database, "led-red"), (status) => {
      setLedRedStatus(status.val());
    });

    const eventGreen = onValue(ref(database, "led-green"), (status) => {
      setLedGreenStatus(status.val());
    });

    const eventYellow = onValue(ref(database, "led-yellow"), (status) => {
      setLedYellowStatus(status.val());
    });

    const eventMode = onValue(ref(database, "mode"), (status) => {
      setMode(status.val());
    });

    return () => {
      eventRed();
      eventGreen();
      eventYellow();
      eventMode();
    };
  }, []);

  function toggleLedRedStatus() {
    set(ref(database, "led-red"), !ledRedStatus);
  }

  function toggleLedGreenStatus() {
    set(ref(database, "led-green"), !ledGreenStatus);
  }

  function toggleLedYellowStatus() {
    set(ref(database, "led-yellow"), !ledYellowStatus);
  }

  function toggleModeSnake() {
    if (mode !== "snake") {
      set(ref(database, "led-red"), false);
      set(ref(database, "led-green"), false);
      set(ref(database, "led-yellow"), false);
      set(ref(database, "mode"), "snake");
    } else {
      set(ref(database, "mode"), "any");
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        {ledRedStatus ? (
          <MaterialCommunityIcons
            onPress={toggleLedRedStatus}
            name="led-on"
            size={64}
            color="red"
          />
        ) : (
          <MaterialCommunityIcons
            onPress={toggleLedRedStatus}
            name="led-off"
            size={64}
            color="black"
          />
        )}
        <Text>Red</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        {ledGreenStatus ? (
          <MaterialCommunityIcons
            onPress={toggleLedGreenStatus}
            name="led-on"
            size={64}
            color="green"
          />
        ) : (
          <MaterialCommunityIcons
            onPress={toggleLedGreenStatus}
            name="led-off"
            size={64}
            color="black"
          />
        )}
        <Text>Green</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        {ledYellowStatus ? (
          <MaterialCommunityIcons
            onPress={toggleLedYellowStatus}
            name="led-on"
            size={64}
            color="yellow"
          />
        ) : (
          <MaterialCommunityIcons
            onPress={toggleLedYellowStatus}
            name="led-off"
            size={64}
            color="black"
          />
        )}
        <Text>Yellow</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        {mode === "snake" ? (
          <MaterialCommunityIcons
            onPress={toggleModeSnake}
            name="snake"
            size={64}
            color="blue"
          />
        ) : (
          <MaterialCommunityIcons
            onPress={toggleModeSnake}
            name="snake"
            size={64}
            color="black"
          />
        )}
        <Text>Snake</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
