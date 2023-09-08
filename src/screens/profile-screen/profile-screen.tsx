import { Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ThemeSelector } from "../../components/profile/theme-selector";
import { LanguageSelector } from "../../components/profile/language-selector";
import { UpdateProfile } from "../../components/profile/update-profile";

import { USER_PROFILE_IMAGES } from "../../../assets";

import { profileStyles } from "./profile-styles";

export function ProfileScreen() {
  return (
    <View style={profileStyles.profileContainer}>
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
            <TouchableOpacity onPress={() => console.log("hola")}>
              <FontAwesome5 name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={profileStyles.infoLabelContainer}>
          <Text style={profileStyles.name}>John Doe</Text>
          <Text style={profileStyles.email}>johndoe@gmail.com</Text>
        </View>
      </View>
      <Text style={profileStyles.scannedArticlesLabel}>
        Artículos escaneados: 10
      </Text>
      <View style={profileStyles.profileLabelContainer}>
        <ThemeSelector />
        <LanguageSelector />
        <UpdateProfile />
      </View>
    </View>
  );
}
