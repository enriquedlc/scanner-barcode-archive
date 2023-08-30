import { Text, View, StyleSheet } from "react-native";

import { Navbar } from "../components/navbar/navbar";

export function GeneralLayout() {
  return (
    <View style={styles.container}>
      <Text>General Layout</Text>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});