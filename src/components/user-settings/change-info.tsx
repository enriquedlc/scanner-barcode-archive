import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { FONT_SIZES } from "../../constants/font";
import { User } from "../../store/user-auth";
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

	let infoToChange: ReactNode;

	switch (userInfoToChange) {
		case "username": {
			infoToChange = <Text>Change username</Text>;
			break;
		}
		case "email": {
			infoToChange = <Text>Change email</Text>;
			break;
		}
		case "password": {
			infoToChange = <Text>Change password</Text>;
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
				<Text style={styles.infoToChange}> {capitalize(userInfoToChange)} </Text>
				{infoToChange}
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
	},
});
