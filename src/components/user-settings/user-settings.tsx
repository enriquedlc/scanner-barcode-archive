import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { useAppNavigation } from "../../hooks/useAppNavigation";

import { ARROW_BACK } from "../../../assets/profile-images";

export function UserSettings() {
  const { navigation } = useAppNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.arrowBack} source={ARROW_BACK} />
      </TouchableOpacity>

      <Text>User Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowBack: {
    width: 50,
    height: 50,
    objectFit: "contain",
  },
});
