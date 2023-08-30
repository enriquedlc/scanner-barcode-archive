import { Text, View, StyleSheet } from "react-native";

export function Profile() {
  return (
    <View style={profileStyles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
