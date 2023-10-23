import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { FONT_SIZES } from "../../../constants/font";
import { useUserPreferencesStore } from "../../../store/user-preferences";

interface UpdateUserInfoButtonProps {
	action: () => void;
}

export function UpdateUserInfoButton(props: UpdateUserInfoButtonProps) {
	const { action } = props;

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<TouchableOpacity
			style={[
				styles.updateUserInfoButton,
				{
					backgroundColor: colorScheme.MAIN,
				},
			]}
			onPress={action}
		>
			<Text
				style={[
					styles.updateUserInfoButtonText,
					{
						color: colorScheme.PRIMARY_WHITE,
					},
				]}
			>
				Update
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	updateUserInfoButton: {
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
		fontWeight: "bold",
	},
});
