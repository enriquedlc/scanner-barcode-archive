import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ARROW_BADGE_RIGHT } from "../../../assets/profile-images";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useUserAuthStore } from "../../store/user-auth";
import { capitalize, hidePassword } from "../../utils/general";

import { FONT_SIZES } from "../../constants/font";
import { useUserPreferencesStore } from "../../store/user-preferences";

export type UserBasicInformationLabels = "username" | "email" | "password";

interface UserInfoItemProps {
	label: UserBasicInformationLabels;
}

export function UserInfoItem(props: UserInfoItemProps) {
	const { label } = props;

	const { navigation } = useAppNavigation();
	const user = useUserAuthStore((state) => state.user);
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<View
			style={[
				styles.basicInformationItem,
				{
					borderBottomColor: colorScheme.GRAY,
				},
			]}
		>
			<Text style={styles.userSettingLabel}>{capitalize(label)}</Text>
			<TouchableOpacity
				style={{ alignSelf: "flex-end" }}
				onPress={() => {
					navigation.navigate("CHANGE_USER_INFO_SCREEN", { userInfoToChange: label });
				}}
			>
				<Image style={styles.arrowBadgeRight} source={ARROW_BADGE_RIGHT} />
			</TouchableOpacity>
			<Text
				style={[
					styles.userSettingValue,
					{
						color: colorScheme.SECONDARY_BLACK,
					},
				]}
			>
				{label === "password" ? hidePassword(user?.[label] as string) : user?.[label]}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	basicInformationItem: {
		display: "flex",
		alignItems: "flex-start",
		width: "85%",
		marginBottom: 40,
		borderBottomWidth: 1,
	},

	userSettingLabel: {
		fontSize: FONT_SIZES.LARGE,
	},
	userSettingValue: {
		fontSize: FONT_SIZES.MEDIUM,

		paddingBottom: 5,
	},
	arrowBadgeRight: {
		width: 20,
		height: 20,
	},
});
