import { FontAwesome5 } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LanguageSelector } from "../../components/profile/language-selector";
import { ProfileFooter } from "../../components/profile/profile-footer/profile-footer";
import { ThemeSelector } from "../../components/profile/theme-selector";
import { UpdateProfile } from "../../components/profile/update-profile";
import { useArticlesStore } from "../../store/articles";
import { useUserAuthStore } from "../../store/user-auth";

import { USER_PROFILE_IMAGES } from "../../../assets";

import { profileStyles } from "./profile-styles";

export function ProfileScreen() {
  const user = useUserAuthStore((state) => state.user);
  const articles = useArticlesStore((state) => state.articles);

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
      <Text style={profileStyles.scannedArticlesLabel}>
        {/* TODO: */}
        Artículos escaneados {articles ? articles.length : 0}
      </Text>
      <View style={profileStyles.profileLabelContainer}>
        <ThemeSelector />
        <LanguageSelector />
        <UpdateProfile />
        <ProfileFooter />
      </View>
    </View>
  );
}
