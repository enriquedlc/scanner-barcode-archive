import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ARROW_BADGE_RIGHT } from "../../../assets/profile-images";
import { useUserAuthStore } from "../../store/user-auth";

import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";
import { useAppNavigation } from "../../hooks/useAppNavigation";

type UserBasicInformationLabels = "username" | "email" | "password";

interface UserInfoItemProps {
	label: UserBasicInformationLabels;
}

export function UserInfoItem(props: UserInfoItemProps) {
	const { label } = props;

	const { navigation } = useAppNavigation();
	const user = useUserAuthStore((state) => state.user);

	return (
		<View style={styles.basicInformationItem}>
			<Text style={styles.userSettingLabel}>
				{label.charAt(0).toUpperCase() + label.slice(1)}
			</Text>
			<TouchableOpacity
				style={{ alignSelf: "flex-end" }}
				onPress={() => navigation.navigate("CHANGE_USER_INFO_SCREEN")}
			>
				<Image style={styles.arrowBadgeRight} source={ARROW_BADGE_RIGHT} />
			</TouchableOpacity>
			<Text style={styles.userSettingValue}>
				{label === "password"
					? new Array(user?.[label].length).fill("*").join("").substring(0, 12)
					: user?.[label]}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	basicInformationItem: {
		display: "flex",
		alignItems: "flex-start",
		width: "80%",
		marginBottom: 40,
		borderBottomColor: BLUE_PALLETE.GRAY,
		borderBottomWidth: 1,
	},

	userSettingLabel: {
		fontSize: FONT_SIZES.LARGE,
	},
	userSettingValue: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.SECONDARY_BLACK,
		paddingBottom: 5,
	},
	arrowBadgeRight: {
		width: 20,
		height: 20,
	},
});
