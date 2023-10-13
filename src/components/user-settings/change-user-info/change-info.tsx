import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useUserAuthStore } from "../../../store/user-auth";
import { capitalize } from "../../../utils/general";
import { ArrowBack } from "../arrow-back";

import { BLUE_PALLETE } from "../../../constants/colors/colors";
import { FONT_SIZES } from "../../../constants/font";
import { changeInfoDescription } from "../../../constants/lang/change-user-info-description";
import { UserBasicInformationLabels } from "../user-info-item";
import { ChangeEmailInput } from "./inputs/change-email";
import { ChangeUsernameInput } from "./inputs/change-username";

type ChangeInfoProps = {
	route: {
		params: {
			userInfoToChange: UserBasicInformationLabels;
		};
	};
};

export function ChangeInfo(props: ChangeInfoProps) {
	const { userInfoToChange } = props.route.params;
	const user = useUserAuthStore((state) => state.user);

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
				{/* {userInfoToChange === "password" && <ChangePasswordInput />} */}

				{/* {userInfoToChange === "password" ? (
					<>
						<Text style={styles.infoToChangeLabel}>
							New {capitalize(userInfoToChange)}
						</Text>
						<TextInput
							style={styles.infoToChangeInput}
							placeholder={hidePassword(user?.[userInfoToChange] as string)}
						/>
						<Text style={styles.infoToChangeLabel}>
							Confirm new {capitalize(userInfoToChange)}
						</Text>
						<TextInput
							style={styles.infoToChangeInput}
							placeholder={hidePassword(user?.[userInfoToChange] as string)}
						/>
					</>
				) : (
					<>
						<Text style={styles.infoToChangeLabel}>{capitalize(userInfoToChange)}</Text>
						<TextInput
							style={styles.infoToChangeInput}
							placeholder={user?.[userInfoToChange] as unknown as string}
						/>
					</>
				)} */}

				<TouchableOpacity style={styles.updateUserInfoButton}>
					<Text style={styles.updateUserInfoButtonText}>Save</Text>
				</TouchableOpacity>
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

	updateUserInfoButton: {
		backgroundColor: BLUE_PALLETE.BLUE,

		padding: 10,
		borderRadius: 5,
		width: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
	},
	updateUserInfoButtonText: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.PRIMARY_WHITE,
		fontWeight: "bold",
	},
});
