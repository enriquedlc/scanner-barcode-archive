import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

import { USER_CIRCLE } from "../../../assets/profile-images";

import { profileStyles } from "../../screens/profile-screen/profile-styles";

export function UpdateProfile() {
  return (
    <View>
      <TouchableOpacity style={updateProfileStyles.updateProfileButton}>
        <Text style={profileStyles.profileDefaultLabel}>Actualizar Perfil</Text>
        <Image style={profileStyles.profileIcon} source={USER_CIRCLE} />
      </TouchableOpacity>
      <Text style={profileStyles.profileDefaultLabelValue}>
        Formulario para cambiar contraseña, nombre de usuario y correo
        electrónico
      </Text>
    </View>
  );
}

const updateProfileStyles = StyleSheet.create({
  updateProfileButton: {
    flexDirection: "row",
  },
});
