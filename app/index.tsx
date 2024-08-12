// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TextInput, Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

function HomeScreen({ route }: { route: any }) {
  const navigation: any = useNavigation();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <Text style={{ marginTop: 30, fontSize: 30 }}>Count: {count}</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
      {/* <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text> */}
    </View>
  );
}

function DetailsScreen({ route }: { route: any }) {
  // const { itemId, otherParam } = route.params;
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text style={{ fontSize: 22, marginBottom: 20 }}>Details Screen</Text>
      <Text style={{ fontSize: 30 }}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={{ fontSize: 22, marginBottom: 100 }}>
        otherParam: {JSON.stringify(otherParam)}
      </Text> */}

      {/* <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}
      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
      <Button
        title="Create Post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Button
        title="Details screen"
        onPress={() => navigation.navigate("Details")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

function CreatePostScreen({
  route,
}: //
{
  route: any;
}) {
  const navigation: any = useNavigation();
  const [postText, setPostText] = React.useState("");
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() =>
          navigation.navigate({
            name: "Home",
            params: { post: postText },
          })
        }
      />
      {/* <Button title="Back" onPress={() => navigation.goBack()} /> */}
    </>
  );
}

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require("../assets/react-logo.png")}
    />
  );
}

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "My home",
          headerTitle: () => <LogoTitle />,

          // headerStyle: {
          //   backgroundColor: "#f4511e",
          // },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
          headerRight: () => <Button title="Update count" color="#00cc00" />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerBackTitle: "Custom Back",
          headerBackTitleStyle: { fontSize: 30 },
        }}
      />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

export default App;
