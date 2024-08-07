import { ScrollView, View, Platform } from "react-native";

import { Article } from "../Shared/Article";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type NativeStackParams = {
  Article: { author: string } | undefined;
};

const ArticleScreen = () => {
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Article author={{ name: "Gandalf" }} />
      </ScrollView>
    </View>
  );
};

export default function Index() {
  const Stack = createNativeStackNavigator<NativeStackParams>();
  return (
    <Stack.Navigator initialRouteName="Article">
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          headerTransparent: true,
          headerBlurEffect: "light",
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
}
