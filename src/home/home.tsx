import { View, Text, StyleSheet } from "react-native";

export function Home() {
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
