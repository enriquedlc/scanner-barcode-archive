import { Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { profileStyles } from "./profile-styles";
import { USER_PROFILE_IMAGES } from "../../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Profile() {
  return (
    <View style={profileStyles.profileContainer}>
      <View style={profileStyles.profileCard}>
        <View style={profileStyles.photo}>
          <Image
            source={USER_PROFILE_IMAGES.BLUE_GRADIENT_USER}
            alt="user photo"
            style={{
              width: 70,
              height: 70,
              objectFit: "contain",
            }}
          />
        </View>
        <Text>hello</Text>
      </View>
      <Text>Profile Screen</Text>
    </View>
  );
}
