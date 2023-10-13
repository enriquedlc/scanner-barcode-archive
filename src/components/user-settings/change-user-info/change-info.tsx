import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { changeInfoDescription } from "../../../constants/lang/change-user-info-description";
import { UserBasicInformationLabels } from "../user-info-item";
import { ChangeEmailInput } from "./inputs/change-email";
import { ChangePasswordInput } from "./inputs/change-password";
import { ChangeUsernameInput } from "./inputs/change-username";

import { capitalize } from "../../../utils/general";
import { ArrowBack } from "../arrow-back";

import { BLUE_PALLETE } from "../../../constants/colors/colors";
import { FONT_SIZES } from "../../../constants/font";

type ChangeInfoProps = {
	route: {
		params: {
			userInfoToChange: UserBasicInformationLabels;
		};
	};
};

export function ChangeInfo(props: ChangeInfoProps) {
	const { userInfoToChange } = props.route.params;

	return (
		<View>
			<ArrowBack />
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitleText}>Article Scanner Account</Text>
			</View>
			<View style={styles.infoToChangeContainer}>
				<Text style={styles.infoToChange}>{capitalize(userInfoToChange)}</Text>
				<Text style={styles.infoToChangeDescription}>
					{changeInfoDescription[userInfoToChange]}
				</Text>

				{userInfoToChange === "username" && <ChangeUsernameInput />}
				{userInfoToChange === "email" && <ChangeEmailInput />}
				{userInfoToChange === "password" && <ChangePasswordInput />}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitleText: {
		fontSize: FONT_SIZES.MEDIUM,
		paddingBottom: 40,
		fontWeight: "500",
		alignSelf: "center",
	},
	infoToChangeContainer: {
		display: "flex",
		alignItems: "flex-start",
		paddingLeft: 15,
	},
	infoToChange: {
		fontSize: FONT_SIZES.EXTRA_LARGE,
		fontWeight: "bold",
		paddingBottom: 5,
	},
	infoToChangeDescription: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.SECONDARY_BLACK,
		paddingBottom: 50,
		width: "80%",
	},
});
