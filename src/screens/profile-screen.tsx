import { Text, View, StyleSheet } from "react-native";

export function ProfileScreen() {
  return (
    <View style={profileScreenStyles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
