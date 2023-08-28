import { View, Text, StyleSheet } from "react-native";

export function SignUpScreen() {
  return (
    <View style={signupStyles.signupContainer}>
      <Text>SignUp</Text>
    </View>
  );
}

const signupStyles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
