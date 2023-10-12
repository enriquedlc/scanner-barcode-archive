import { ReactNode } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";
import { User, useUserAuthStore } from "../../store/user-auth";
import { capitalize } from "../../utils/general";
import { ArrowBack } from "./arrow-back";

type ChangeInfoProps = {
	route: {
		params: {
			userInfoToChange: keyof User;
		};
	};
};

export function ChangeInfo(props: ChangeInfoProps) {
	const { userInfoToChange } = props.route.params;
	const user = useUserAuthStore((state) => state.user);

	let infoToChange: ReactNode;

	switch (userInfoToChange) {
		case "username": {
			infoToChange = (
				<Text>
					This is your username, this will be displayed in your profile and will use it to
					login.
				</Text>
			);
			break;
		}
		case "email": {
			infoToChange = <Text>This is your email, this will be displayed in your profile.</Text>;
			break;
		}
		case "password": {
			infoToChange = (
				<Text>
					Your password is encrypted, and we don't have access to it, but you can change
					it whenever you want. It must be at least 8 characters long.
				</Text>
			);
			break;
		}
		default: {
			infoToChange = <Text>Change user info</Text>;
			break;
		}
	}

	return (
		<View>
			<ArrowBack />
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitleText}>Article Scanner Account</Text>
			</View>
			<View style={styles.infoToChangeContainer}>
				<Text style={styles.infoToChange}>{capitalize(userInfoToChange)}</Text>
				<Text style={styles.infoToChangeDescription}>{infoToChange}</Text>
				<Text style={styles.infoToChangeLabel}>{capitalize(userInfoToChange)}</Text>
				<TextInput
					style={styles.infoToChangeInput}
					placeholder={user?.[userInfoToChange as keyof User].toString()}
				/>
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
	},
	infoToChangeLabel: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.PRIMARY_BLACK,
		fontWeight: "600",
		paddingBottom: 10,
	},
	infoToChangeInput: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.SECONDARY_BLACK,
		borderRadius: 5,
		width: "90%",
		padding: 7,
		backgroundColor: BLUE_PALLETE.SECONDARY_WHITE,
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
