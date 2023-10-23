import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { USER_CIRCLE } from "../../../assets/profile-images";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { profileStyles } from "../../screens/profile-screen/profile-styles";
import { useUserPreferencesStore } from "../../store/user-preferences";

export function UpdateProfile() {
	const { navigation } = useAppNavigation();

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<View>
			{/* TODO: implement patching email password and username */}
			<TouchableOpacity
				onPress={() => navigation.navigate("USER_SETTINGS_SCREEN")}
				style={updateProfileStyles.updateProfileButton}
			>
				<Text
					style={[
						profileStyles.profileDefaultLabel,
						{
							color: colorScheme.SECONDARY_BLACK,
						},
					]}
				>
					Actualizar Perfil
				</Text>
				<Image style={profileStyles.profileIcon} source={USER_CIRCLE} />
			</TouchableOpacity>
			<Text
				style={[
					profileStyles.profileDefaultLabelValue,
					{
						color: colorScheme.SECONDARY_BLACK,
					},
				]}
			>
				Formulario para cambiar contraseña, nombre de usuario y correo electrónico
			</Text>
		</View>
	);
}

const updateProfileStyles = StyleSheet.create({
	updateProfileButton: {
		flexDirection: "row",
	},
});
