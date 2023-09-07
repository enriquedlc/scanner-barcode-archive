import { Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { USER_PROFILE_IMAGES } from "../../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

import { profileStyles } from "./profile-styles";

export function Profile() {
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
        <View style={profileStyles.appThemeChangerLabelContainer}>
          <Text style={profileStyles.profileDefaultLabel}>
            Tema de la aplicación
          </Text>
          <View style={profileStyles.themeColorsContainer}>
            <LinearGradient
              style={profileStyles.themeColor}
              colors={["blue", "#3b5998", "blue"]}
              start={{ x: 0, y: 3 }}
            />
            <LinearGradient
              style={profileStyles.themeColor}
              // orange
              colors={["#ff9966", "#ff5e62", "#ff9966"]}
              start={{ x: 0, y: 3 }}
            />
            <LinearGradient
              style={profileStyles.themeColor}
              // purple
              colors={["#cc2b5e", "#753a88", "#cc2b5e"]}
              start={{ x: 0, y: 3 }}
            />
            <LinearGradient
              style={profileStyles.themeColor}
              // green
              colors={["#11998e", "#38ef7d", "#11998e"]}
              start={{ x: 0, y: 3 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
