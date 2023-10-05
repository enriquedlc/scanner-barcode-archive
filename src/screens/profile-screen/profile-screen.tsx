import { Text, View } from "react-native";

import { LanguageSelector } from "../../components/profile/language-selector";
import { ProfileFooter } from "../../components/profile/profile-footer/profile-footer";
import { ThemeSelector } from "../../components/profile/theme-selector";
import { UpdateProfile } from "../../components/profile/update-profile";
import { ProfileInfoCard } from "../../components/profile/profile-info-card";
import { useArticlesStore } from "../../store/articles";

import { profileStyles } from "./profile-styles";

export function ProfileScreen() {
  const articles = useArticlesStore((state) => state.articles);

  return (
    <View style={profileStyles.profileContainer}>
      <ProfileInfoCard />
      <Text style={profileStyles.scannedArticlesLabel}>
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
