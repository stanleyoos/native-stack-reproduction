// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 85,
            otherParam: "anything you want here",
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ navigation, route }: { navigation: any; route: any }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Details Screen</Text>
      <Text style={{ fontSize: 30 }}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={{ fontSize: 22, marginBottom: 100 }}>
        otherParam: {JSON.stringify(otherParam)}
      </Text>

      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default App;
