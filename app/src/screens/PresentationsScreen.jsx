import { Dimensions, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  Directions,
} from "react-native-gesture-handler";

import Control from "../../assets/undraw_control_panel_re_y3ar.svg";
import Dashboard from "../../assets/undraw_dashboard_re_3b76";
import Settings from "../../assets/undraw_personal_settings_re_i6w4.svg";

export function PresentationControlScreen({ navigation }) {
  const flingGesture = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(() => {
      navigation.navigate("PresentationDashboard");
    });

  return (
    <GestureDetector gesture={flingGesture}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Control width={Dimensions.get("screen").width - 120} height={320} />
        <Text style={{ marginBottom: 40, marginTop: 80 }}>Controle a distância</Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#22f",
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#888",
              borderRadius: 50,
              marginLeft: 8,
              marginRight: 8,
            }}
          ></View>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#888",
              borderRadius: 50,
            }}
          ></View>
        </View>
      </View>
    </GestureDetector>
  );
}

export function PresentationDashboardScreen({ navigation }) {
  const flingGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(() => {
      navigation.navigate("PresentationConfig");
    });

  const flingGestureRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(() => {
      navigation.goBack();
    });

  const composedGesture = Gesture.Race(flingGestureLeft, flingGestureRight);

  return (
    <GestureDetector gesture={composedGesture}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Dashboard width={Dimensions.get("screen").width - 120} height={320} />
        <Text style={{ marginBottom: 40, marginTop: 80 }}>Monitore o funcionamento</Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#888",
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#22f",
              borderRadius: 50,
              marginLeft: 8,
              marginRight: 8,
            }}
          ></View>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#888",
              borderRadius: 50,
            }}
          ></View>
        </View>
      </View>
    </GestureDetector>
  );
}

export function PresentationConfigScreen({ navigation }) {
  const flingGestureLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(() => {
      navigation.navigate("LedController");
    });

  const flingGestureRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(() => {
      navigation.goBack();
    });

  const composedGesture = Gesture.Race(flingGestureLeft, flingGestureRight);

  return (
    <GestureDetector gesture={composedGesture}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Settings width={Dimensions.get("screen").width - 120} height={320} />
        <Text style={{ marginBottom: 40, marginTop: 80 }}>Configure as ações</Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#888",
              borderRadius: 50,
            }}
          ></View>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#888",
              borderRadius: 50,
              marginLeft: 8,
              marginRight: 8,
            }}
          ></View>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#22f",
              borderRadius: 50,
            }}
          ></View>
        </View>
      </View>
    </GestureDetector>
  );
}
