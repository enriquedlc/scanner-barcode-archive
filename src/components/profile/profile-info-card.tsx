import { FontAwesome5 } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useUserAuthStore } from "../../store/user-auth";

import { USER_PROFILE_IMAGES } from "../../../assets";

import { profileStyles } from "../../screens/profile-screen/profile-styles";

export function ProfileInfoCard() {
  const user = useUserAuthStore((state) => state.user);

  return (
    <View style={profileStyles.profileCard}>
      <View style={profileStyles.photo}>
        <Image
          source={USER_PROFILE_IMAGES.BLUE_GRADIENT_USER}
          alt="user photo"
          style={{
            width: 50,
            height: 50,
            objectFit: "contain",
            tintColor: "black",
          }}
        />
        <View style={profileStyles.editPhotoButton}>
          {/* TODO: implement changing profile photo */}
          <TouchableOpacity onPress={() => console.log("change photo")}>
            <FontAwesome5 name="camera" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={profileStyles.infoLabelContainer}>
        <Text style={profileStyles.name}>{user?.username}</Text>
        <Text style={profileStyles.email}>{user?.email} </Text>
      </View>
    </View>
  );
}
