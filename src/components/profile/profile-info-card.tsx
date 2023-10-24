import { FontAwesome5 } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useUserAuthStore } from "../../store/user-auth";

import { USER_PROFILE_IMAGES } from "../../../assets";

import { profileStyles } from "../../screens/profile-screen/profile-styles";
import { useUserPreferencesStore } from "../../store/user-preferences";

export const UserProfilePhoto = () => {
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);
	return (
		<View
			style={[
				profileStyles.photo,
				{
					borderColor: colorScheme.MAIN,
					shadowColor: colorScheme.MAIN,
				},
			]}
		>
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
			<View
				style={[
					profileStyles.editPhotoButton,
					{
						backgroundColor: colorScheme.MAIN,
					},
				]}
			>
				<TouchableOpacity onPress={() => console.log("change photo")}>
					<FontAwesome5 name="camera" size={16} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export function ProfileInfoCard() {
	const user = useUserAuthStore((state) => state.user);

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<View
			style={[
				profileStyles.profileCard,
				{
					shadowColor: colorScheme.MAIN,
				},
			]}
		>
			<UserProfilePhoto />
			<View style={profileStyles.infoLabelContainer}>
				<Text
					style={[
						profileStyles.name,
						{
							color: colorScheme.PRIMARY_BLACK,
						},
					]}
				>
					{user?.username}
				</Text>
				<Text
					style={[
						profileStyles.email,
						{
							color: colorScheme.SECONDARY_BLACK,
						},
					]}
				>
					{user?.email}{" "}
				</Text>
			</View>
		</View>
	);
}
