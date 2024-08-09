// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TextInput } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

function HomeScreen({ route }: { route: any }) {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
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

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

export default App;
