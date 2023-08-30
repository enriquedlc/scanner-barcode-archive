import { StyleSheet, Text, View } from "react-native";

import { useUserAuthStore } from "../store/user-auth";

export function Home() {
  const user = useUserAuthStore((state) => state.user);

  console.log(user);

  return (
    <View style={homeStyles.container}>
      <Text>Home component</Text>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
