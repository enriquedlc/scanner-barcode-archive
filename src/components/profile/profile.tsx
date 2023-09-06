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
              width: 60,
              height: 60,
              objectFit: "contain",
              tintColor: "black",
            }}
          />
          <View style={profileStyles.editPhotoButton}>
            <TouchableOpacity onPress={() => console.log("hola")}>
              <FontAwesome5 name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text>Profile Screen</Text>
    </View>
  );
}
