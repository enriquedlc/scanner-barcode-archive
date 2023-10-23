import { Pressable, StyleSheet, Text } from "react-native";
import { useUserPreferencesStore } from "../../store/user-preferences";

type ButtonLandingProps = {
	title: string;
	outLined?: boolean;
	width?: number;
	onPress: () => void;
};

export function ButtonLanding(props: ButtonLandingProps) {
	const { title, outLined, onPress } = props;

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.button,
				{
					borderColor: colorScheme.BUTTON_DEFAULT,
					backgroundColor: outLined ? "transparent" : "#2f54f0",
					width: props.width,
				},
			]}
		>
			<Text
				style={[
					styles.textButton,
					{
						color: outLined ? colorScheme.BUTTON_DEFAULT : colorScheme.PRIMARY_WHITE,
					},
				]}
			>
				{title}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		paddingVertical: 12,
		paddingHorizontal: 30,

		borderWidth: 2,
	},
	textButton: {
		fontWeight: "bold",
		alignSelf: "center",
	},
});
